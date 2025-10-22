//import md5 from './misc/md5.js';
import { postProcessCode } from './defaultProcess.js';
import qsrc2tw from './qsrc2tw.js';

export default function translate(codeRaw){

    const codeFromSimpleTranslation = qsrc2tw(codeRaw, false, true);

    const code = postProcessCode(codeFromSimpleTranslation.join("\n"),false).split("\n");
    return code;
}


/*
setup ??= {}
setup.qsrc2tw = (code) => { 
    setup.qsrc2tw_cached ??= {};
    const id = md5(code);
    if(!setup.qsrc2tw_cached[id])
        setup.qsrc2tw_cached[id] = qsrc2tw(code,false,true);
    return setup.qsrc2tw_cached[id];
    
}*/