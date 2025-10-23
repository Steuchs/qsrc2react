import qsrc2tw from "../qsrc2tw.js";
import translate from "../webshell.js";


test('cla', () => expect(JSON.stringify(translate(`"<a href=""exec:gt 'version'"">Change log</a>"`)))
    .toBe(JSON.stringify([`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.print("<Link to={["version",""]}>Change log</Link>")}`]))); 

test('pushkinBallet', () => expect(JSON.stringify(translate(`$ballet_log[] ='Passmark: ' + 100 * (ballet_grade_score['class'] + ballet_grade_score['homework']) / 210`)))
    .toBe(JSON.stringify([`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_QSP.$ballet_log[-1] = 'Passmark: ' + 100 * (_QSP.ballet_grade_score['class'] + _QSP.ballet_grade_score['homework']) / 210}`])))


test('complexAExec', () => expect(JSON.stringify(translate(`$result = '<TD><center><a href="exec:$start_type[''loc''] = ''<<$ARGS[3]>>'' & $start_type[''magic''] = ''<<$ARGS[4]>>'' & gt ''begin'',''start''"><img src="images/system/icons/uncheck.png" height="50"></a></center></TD>'`)))
    .toBe(""));