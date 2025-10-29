import {glob} from 'glob';
import fs from 'node:fs';
import path from "path";

import { Command } from "commander";

import WorkerPool from './worker_pool.js';
import os from 'node:os';

import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const VERSION = 8;
const generatedFilesPrefix = '';
//const resourcesFilesPrefix = '+resources';

const program = new Command();
program
  .name('QSP TO Sugarcube')
  .description('CLI to Convert Quest Soft sourcecode to Twine Sugarcube')
  .version('0.0.8')
  .option('-in, --input-file-path <path>','the path where the qsrc-files are')
  .option('-out, --output-file-path <path>','the path where the tw-files go')
  .option('-f, --single-file <path>','only converts the specified file')
  .option('-fs, --multiple-files-from-file <path>','only converts the files specified in the input file')
  .option('-outff, --failed-files-output-path <path>','path of the failed files file')
  .option('-sff, --skip-failedfiles-file','skips creation of the failed files file')
  .option('-ve, --verbose-errors','prints out complete error messages where possible')
  .option('-fo, --force', 'always redoes everything')
  .option('-ju, --junction <path>', 'junction-file')
  ;

program.parse(process.argv);
const options = program.opts();

console.log('START CONVERSION');
const startTime = (new Date()).getTime();

const inPath = options.inputFilePath ?? './in';
const outPath =  options.outputFilePath ?? './out';
const failedFilesPath = options.failedFilesOutputPath ?? "./failedFiles.log";

var filePaths = [];
try{
    if(options.singleFile)
        filePaths = [options.singleFile];
    else if(options.multipleFilesFromFile){
        let multipleFilesFromFilePath = options.multipleFilesFromFile;
        if(multipleFilesFromFilePath == "ff")
            multipleFilesFromFilePath = failedFilesPath;
        const data = fs.readFileSync(multipleFilesFromFilePath, 'utf8');
        filePaths = data.split('\n');
    }
    else{
        const searchArgument = path.join(inPath,'**/*.qsrc');
        filePaths = await glob(searchArgument.replace(/\\/g,'/'));
    }
}catch(e){
    console.error("Error retrieving filePaths:",e);
}

fs.mkdir(path.join(outPath,generatedFilesPrefix), { recursive: true }, (err) => {
  if (err) throw err;
});

const failedFiles = [];
const successFiles = [];
const pool = new WorkerPool(os.availableParallelism());

let percentageDisplayed = 0;

const existingFiles = filePaths.map((p) =>baseFileName(p).split(".")[0].replaceAll("$", "_").toLowerCase())
let finished = 0;
const promises = [];
for (let filePath of filePaths) {
    promises.push(new Promise((resolve, reject)=>{
        pool.runTask({
            VERSION: VERSION,
            filePath: filePath,
            outPath: outPath,
            generatedFilesPrefix: generatedFilesPrefix,
            options: options,
            existingFiles: existingFiles
        }, (err, result) => {
            const wasSuccessful = (result?.[0] === 0);
            const message = result?.[1] ?? '';

            if (!wasSuccessful) {
                const displayFilePath = baseFileName(filePath);
                if (!options.verboseErrors)
                    console.error(`${displayFilePath} failed`);
                else
                    console.error(message, err);
                failedFiles.push(filePath);
            }else{
                successFiles.push(filePath);
            }
            finished++;

            const percentageFinished = finished / filePaths.length * 100;

            if (percentageFinished > Math.floor(percentageDisplayed / 5 + 1) * 5) {
                console.log(`${Math.round(percentageFinished)}% done`);
                percentageDisplayed = percentageFinished;
            }

            resolve("DONE");

            
        });
    }));
}

await Promise.all(promises);

pool.close();

if(options.junction)
    await makeJunctionFile(options.junction,successFiles);

async function makeJunctionFile(targetpath, successFiles){
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    const imports = successFiles.map((fpath)=>{
        const fname = path.basename(fpath).split(".")[0];
        return `const ${capitalize(fname)} = lazy(() => import('../locations/${fname.replaceAll("$", "_").toLowerCase() }'));`;
    }).sort();

    const cases = successFiles.map((fpath) => {
        const fname = path.basename(fpath).split(".")[0];
        return `\t\tcase "${fname}": locationComponent = <${capitalize(fname)} key={\`${fname}.\${ locationHistory.renderedHistoryIndex }\`} _args={locationArgs}/>; break;`;
    }).sort();

    

const s = `
import { lazy, useContext } from 'react';
import { LocationHistoryContext } from '../util/locationHistory';

${imports.join("\n")}

export default function Location({location}:{location:(string|number)[]}){
	if(!location.length)
		throw new Error(\`Error in Location.tsx: invalid location - data : '\${JSON.stringify(location)}'\`);

    const locationHistory = useContext(LocationHistoryContext);

	const locationId = location[0];
	const locationArgs = location.length > 1 ? location.slice(1) : [];


	var locationComponent = <>Component missing: {locationId}</>;

	switch (locationId) {
${cases.join("\n")}
		default:
			break;
	}

	return <>{locationComponent}</>;
}
`;
    fs.writeFileSync(targetpath,s);
}

if(!options.skipFailedfilesFile){
    const contentsOfFailedFilesFile = failedFiles.sort((a, b) => a.localeCompare(b)).join("\n");
    fs.writeFile(failedFilesPath, contentsOfFailedFilesFile , err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
}

//const resourcesPath = path.join(outPath,resourcesFilesPrefix);
//fs.rmSync(resourcesPath, { recursive: true, force: true });
//fs.cpSync("./resources", resourcesPath, {recursive: true});


const executionTime =  (new Date()).getTime() - startTime;
const executionTimeString = `${Math.floor(executionTime/3600000).toString().padStart(2,'0')}:${Math.floor(executionTime % 3600000 / 60000).toString().padStart(2,'0')}:${Math.floor(executionTime % 60000 /1000).toString().padStart(2,'0')}.${(executionTime % 1000).toString().padStart(4,'0')}`;
console.log('ENDED CONVERSION'.padEnd(30,'.')+ ' '+executionTimeString+` (${filePaths.length-failedFiles.length} of ${filePaths.length} successful)`);

//https://stackoverflow.com/a/25221100/7200161
export function baseFileName(fullpath){
    return fullpath.split('\\').pop().split('/').pop();
}


//Auto-Include

const searchArgument = path.join(outPath, '**/*.tsx');
filePaths = await glob(searchArgument.replace(/\\/g, '/'));

/*const imports = new Set();

for(const filePath of filePaths){
    const fileName = path.basename(filePath).split(".")[0];
    const contents = fs.readFileSync(filePath);


    const importRegex = /{type: "GS", p:\(_args, _QSP\) => \['(\w+)'(?:\s*,\s*'\w+')*\]}/g;


    let match;
    while ((match = importRegex.exec(contents)) !== null) {
        imports.add(match[1]);
    }
}

const copyPromises = [];

for (const fileName of Array.from(imports)){
    const allFilesFolder = path.join(inPath,'../locations/');
    if(!fs.existsSync(path.join(outPath,`${fileName}.tsx`))){
        const filePathSource = path.join(allFilesFolder, `${fileName}.qsrc`);
        const targetPath = path.join(inPath, `${fileName}.qsrc`);
        copyPromises.push(fs.copyFile(filePathSource, targetPath,()=>console.log(`Copy: ${fileName}`)));
    }
        
}

await Promise.all(copyPromises);
*/
console.log("Copy done");



