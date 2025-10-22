# Setup

 1. Make sure you have **Node.js** and **npm** installed.
 2. Run `npm i` in the terminal in the root folder to install the dependencies.
 3. Install *antlr4* (https://github.com/antlr/antlr4-tools might be handy).
 4. Run `antlr4 -Dlanguage=JavaScript -visitor qsrcLexer.g4` in `src\antlr`
 5. Run `antlr4 -Dlanguage=JavaScript -visitor qsrcParser.g4` in `src\antlr`

# Create Binary
This guide assumes that you're using Node 22.7.0. 
Check here if you're using another version: https://nodejs.org/api/single-executable-applications.html
## Windows
1. Run `npm run build`in the root folder. This will use webpack to create the file *dist/blob.js*
2. Run `node --experimental-sea-config sea-config.json` to create *sea-prep.blob*
3. Run `node -e "require('fs').copyFileSync(process.execPath, 'QSRC2TW.exe')"` to copy and rename your *node.exe* to *QSRC2TW.exe*
4. Run `powershell
npx postject hello.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`to append *sea-prep.blob* to *QSRC2TW.exe*
5. Run `npx webpack --config './webpackProcessor.config.cjs'` to create *task_processor.js* in the folder *dist*
6. Copy *QSRC2TW.exe* and *task_processor.js* (the one from the dist-folder) to where you need these files.
