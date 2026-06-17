// Generated from qsrcParser.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import qsrcParserListener from './qsrcParserListener.js';
import qsrcParserVisitor from './qsrcParserVisitor.js';

const serializedATN = [4,1,87,726,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,
78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,1,0,1,0,1,0,1,0,1,0,5,0,
172,8,0,10,0,12,0,175,9,0,1,0,1,0,1,1,5,1,180,8,1,10,1,12,1,183,9,1,1,2,
1,2,1,2,1,2,3,2,189,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,200,8,4,
1,4,3,4,203,8,4,1,4,1,4,1,5,1,5,1,5,3,5,210,8,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,7,1,7,1,7,1,7,1,7,1,7,3,7,224,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,232,8,8,
10,8,12,8,235,9,8,1,8,3,8,238,8,8,1,8,1,8,3,8,242,8,8,1,8,3,8,245,8,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,286,8,11,1,11,5,11,289,8,11,
10,11,12,11,292,9,11,1,11,1,11,1,11,3,11,297,8,11,1,12,1,12,3,12,301,8,12,
1,12,3,12,304,8,12,1,12,1,12,1,13,1,13,3,13,310,8,13,1,13,1,13,1,14,1,14,
1,14,1,15,1,15,1,15,1,16,3,16,321,8,16,1,16,1,16,3,16,325,8,16,1,17,1,17,
1,17,1,17,1,18,1,18,1,18,1,18,3,18,335,8,18,1,19,1,19,1,20,1,20,1,20,1,21,
1,21,5,21,344,8,21,10,21,12,21,347,9,21,1,21,1,21,5,21,351,8,21,10,21,12,
21,354,9,21,1,21,3,21,357,8,21,1,22,1,22,5,22,361,8,22,10,22,12,22,364,9,
22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,373,8,23,1,24,1,24,1,24,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,3,25,385,8,25,1,26,1,26,1,26,1,27,1,27,1,27,
1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,
32,1,33,1,33,1,33,1,33,3,33,412,8,33,3,33,414,8,33,1,34,1,34,1,34,1,35,1,
35,5,35,421,8,35,10,35,12,35,424,9,35,1,35,1,35,1,36,1,36,3,36,430,8,36,
1,37,1,37,1,37,1,37,1,38,1,38,3,38,438,8,38,1,39,1,39,1,39,1,40,1,40,1,40,
1,40,1,40,1,40,1,40,1,40,3,40,451,8,40,1,41,1,41,1,41,1,41,3,41,457,8,41,
1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,
46,1,46,1,46,1,47,1,47,1,47,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,51,1,51,
1,51,1,52,1,52,3,52,491,8,52,1,53,1,53,1,53,1,54,1,54,3,54,498,8,54,1,55,
1,55,3,55,502,8,55,1,56,1,56,1,56,3,56,507,8,56,1,57,1,57,1,57,1,57,1,57,
1,57,3,57,515,8,57,1,58,1,58,1,58,1,58,1,58,1,58,3,58,523,8,58,1,59,1,59,
1,60,1,60,1,60,1,60,1,60,1,60,1,60,5,60,534,8,60,10,60,12,60,537,9,60,1,
61,1,61,1,61,1,61,1,61,1,61,1,61,5,61,546,8,61,10,61,12,61,549,9,61,1,62,
1,62,1,62,1,62,1,62,1,62,1,62,5,62,558,8,62,10,62,12,62,561,9,62,1,63,1,
63,1,63,1,63,1,63,1,63,1,63,5,63,570,8,63,10,63,12,63,573,9,63,1,64,5,64,
576,8,64,10,64,12,64,579,9,64,1,64,1,64,1,65,5,65,584,8,65,10,65,12,65,587,
9,65,1,65,1,65,1,66,5,66,592,8,66,10,66,12,66,595,9,66,1,66,1,66,1,67,1,
67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
3,67,615,8,67,1,68,3,68,618,8,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,70,
1,70,1,71,5,71,630,8,71,10,71,12,71,633,9,71,1,71,1,71,1,72,1,72,1,72,1,
72,1,72,1,72,1,72,3,72,644,8,72,1,73,1,73,1,73,5,73,649,8,73,10,73,12,73,
652,9,73,1,74,1,74,5,74,656,8,74,10,74,12,74,659,9,74,1,74,1,74,1,74,5,74,
664,8,74,10,74,12,74,667,9,74,1,74,5,74,670,8,74,10,74,12,74,673,9,74,1,
74,1,74,1,74,5,74,678,8,74,10,74,12,74,681,9,74,1,74,5,74,684,8,74,10,74,
12,74,687,9,74,1,74,3,74,690,8,74,1,75,1,75,3,75,694,8,75,1,76,1,76,1,76,
1,76,1,77,1,77,1,78,1,78,1,78,1,78,1,79,1,79,5,79,708,8,79,10,79,12,79,711,
9,79,1,80,1,80,1,81,1,81,1,81,1,81,1,82,1,82,5,82,721,8,82,10,82,12,82,724,
9,82,1,82,0,4,120,122,124,126,83,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,
156,158,160,162,164,0,10,1,0,38,43,1,0,72,72,1,0,22,23,2,0,59,59,61,61,1,
0,52,53,1,0,33,34,3,0,48,48,50,50,54,54,4,0,33,34,48,48,50,50,52,54,2,0,
76,76,78,78,2,0,79,79,81,81,749,0,166,1,0,0,0,2,181,1,0,0,0,4,188,1,0,0,
0,6,190,1,0,0,0,8,192,1,0,0,0,10,206,1,0,0,0,12,214,1,0,0,0,14,217,1,0,0,
0,16,225,1,0,0,0,18,248,1,0,0,0,20,254,1,0,0,0,22,296,1,0,0,0,24,298,1,0,
0,0,26,307,1,0,0,0,28,313,1,0,0,0,30,316,1,0,0,0,32,320,1,0,0,0,34,326,1,
0,0,0,36,330,1,0,0,0,38,336,1,0,0,0,40,338,1,0,0,0,42,356,1,0,0,0,44,358,
1,0,0,0,46,372,1,0,0,0,48,374,1,0,0,0,50,384,1,0,0,0,52,386,1,0,0,0,54,389,
1,0,0,0,56,392,1,0,0,0,58,395,1,0,0,0,60,398,1,0,0,0,62,401,1,0,0,0,64,404,
1,0,0,0,66,407,1,0,0,0,68,415,1,0,0,0,70,418,1,0,0,0,72,429,1,0,0,0,74,431,
1,0,0,0,76,435,1,0,0,0,78,439,1,0,0,0,80,450,1,0,0,0,82,456,1,0,0,0,84,458,
1,0,0,0,86,462,1,0,0,0,88,466,1,0,0,0,90,469,1,0,0,0,92,472,1,0,0,0,94,475,
1,0,0,0,96,478,1,0,0,0,98,480,1,0,0,0,100,483,1,0,0,0,102,485,1,0,0,0,104,
488,1,0,0,0,106,492,1,0,0,0,108,497,1,0,0,0,110,499,1,0,0,0,112,503,1,0,
0,0,114,514,1,0,0,0,116,522,1,0,0,0,118,524,1,0,0,0,120,526,1,0,0,0,122,
538,1,0,0,0,124,550,1,0,0,0,126,562,1,0,0,0,128,577,1,0,0,0,130,585,1,0,
0,0,132,593,1,0,0,0,134,614,1,0,0,0,136,617,1,0,0,0,138,621,1,0,0,0,140,
626,1,0,0,0,142,631,1,0,0,0,144,643,1,0,0,0,146,645,1,0,0,0,148,689,1,0,
0,0,150,693,1,0,0,0,152,695,1,0,0,0,154,699,1,0,0,0,156,701,1,0,0,0,158,
705,1,0,0,0,160,712,1,0,0,0,162,714,1,0,0,0,164,718,1,0,0,0,166,167,5,1,
0,0,167,168,3,2,1,0,168,173,5,2,0,0,169,172,5,72,0,0,170,172,3,42,21,0,171,
169,1,0,0,0,171,170,1,0,0,0,172,175,1,0,0,0,173,171,1,0,0,0,173,174,1,0,
0,0,174,176,1,0,0,0,175,173,1,0,0,0,176,177,5,0,0,1,177,1,1,0,0,0,178,180,
3,4,2,0,179,178,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,
182,3,1,0,0,0,183,181,1,0,0,0,184,189,3,8,4,0,185,189,3,24,12,0,186,189,
3,16,8,0,187,189,3,6,3,0,188,184,1,0,0,0,188,185,1,0,0,0,188,186,1,0,0,0,
188,187,1,0,0,0,189,5,1,0,0,0,190,191,5,72,0,0,191,7,1,0,0,0,192,193,5,27,
0,0,193,194,3,120,60,0,194,195,5,51,0,0,195,196,5,72,0,0,196,197,3,2,1,0,
197,199,5,31,0,0,198,200,3,26,13,0,199,198,1,0,0,0,199,200,1,0,0,0,200,202,
1,0,0,0,201,203,3,44,22,0,202,201,1,0,0,0,202,203,1,0,0,0,203,204,1,0,0,
0,204,205,5,72,0,0,205,9,1,0,0,0,206,207,5,27,0,0,207,209,3,120,60,0,208,
210,3,12,6,0,209,208,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,5,51,
0,0,212,213,3,22,11,0,213,11,1,0,0,0,214,215,5,70,0,0,215,216,3,120,60,0,
216,13,1,0,0,0,217,218,5,28,0,0,218,219,3,120,60,0,219,220,5,51,0,0,220,
223,3,22,11,0,221,222,5,30,0,0,222,224,3,22,11,0,223,221,1,0,0,0,223,224,
1,0,0,0,224,15,1,0,0,0,225,226,5,28,0,0,226,227,3,120,60,0,227,228,5,51,
0,0,228,229,5,72,0,0,229,233,3,2,1,0,230,232,3,18,9,0,231,230,1,0,0,0,232,
235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,237,1,0,0,0,235,233,1,0,
0,0,236,238,3,20,10,0,237,236,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,
241,5,31,0,0,240,242,3,26,13,0,241,240,1,0,0,0,241,242,1,0,0,0,242,244,1,
0,0,0,243,245,3,44,22,0,244,243,1,0,0,0,244,245,1,0,0,0,245,246,1,0,0,0,
246,247,5,72,0,0,247,17,1,0,0,0,248,249,5,29,0,0,249,250,3,120,60,0,250,
251,5,51,0,0,251,252,5,72,0,0,252,253,3,2,1,0,253,19,1,0,0,0,254,255,5,30,
0,0,255,256,5,72,0,0,256,257,3,2,1,0,257,21,1,0,0,0,258,259,5,68,0,0,259,
260,3,22,11,0,260,261,5,69,0,0,261,286,1,0,0,0,262,286,3,28,14,0,263,286,
3,30,15,0,264,286,3,32,16,0,265,286,3,40,20,0,266,286,3,46,23,0,267,286,
3,48,24,0,268,286,3,50,25,0,269,286,3,52,26,0,270,286,3,54,27,0,271,286,
3,56,28,0,272,286,3,58,29,0,273,286,3,62,31,0,274,286,3,64,32,0,275,286,
3,66,33,0,276,286,3,68,34,0,277,286,3,76,38,0,278,286,3,78,39,0,279,286,
3,80,40,0,280,286,3,98,49,0,281,286,3,100,50,0,282,286,3,102,51,0,283,286,
3,104,52,0,284,286,3,106,53,0,285,258,1,0,0,0,285,262,1,0,0,0,285,263,1,
0,0,0,285,264,1,0,0,0,285,265,1,0,0,0,285,266,1,0,0,0,285,267,1,0,0,0,285,
268,1,0,0,0,285,269,1,0,0,0,285,270,1,0,0,0,285,271,1,0,0,0,285,272,1,0,
0,0,285,273,1,0,0,0,285,274,1,0,0,0,285,275,1,0,0,0,285,276,1,0,0,0,285,
277,1,0,0,0,285,278,1,0,0,0,285,279,1,0,0,0,285,280,1,0,0,0,285,281,1,0,
0,0,285,282,1,0,0,0,285,283,1,0,0,0,285,284,1,0,0,0,286,290,1,0,0,0,287,
289,3,26,13,0,288,287,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,
0,0,0,291,297,1,0,0,0,292,290,1,0,0,0,293,297,3,10,5,0,294,297,3,42,21,0,
295,297,3,14,7,0,296,285,1,0,0,0,296,293,1,0,0,0,296,294,1,0,0,0,296,295,
1,0,0,0,297,23,1,0,0,0,298,300,3,22,11,0,299,301,3,26,13,0,300,299,1,0,0,
0,300,301,1,0,0,0,301,303,1,0,0,0,302,304,3,44,22,0,303,302,1,0,0,0,303,
304,1,0,0,0,304,305,1,0,0,0,305,306,5,72,0,0,306,25,1,0,0,0,307,309,5,35,
0,0,308,310,5,35,0,0,309,308,1,0,0,0,309,310,1,0,0,0,310,311,1,0,0,0,311,
312,3,22,11,0,312,27,1,0,0,0,313,314,5,5,0,0,314,315,3,120,60,0,315,29,1,
0,0,0,316,317,5,6,0,0,317,318,3,120,60,0,318,31,1,0,0,0,319,321,5,37,0,0,
320,319,1,0,0,0,320,321,1,0,0,0,321,324,1,0,0,0,322,325,3,34,17,0,323,325,
3,36,18,0,324,322,1,0,0,0,324,323,1,0,0,0,325,33,1,0,0,0,326,327,3,110,55,
0,327,328,3,38,19,0,328,329,3,120,60,0,329,35,1,0,0,0,330,331,3,112,56,0,
331,334,3,38,19,0,332,335,3,120,60,0,333,335,3,70,35,0,334,332,1,0,0,0,334,
333,1,0,0,0,335,37,1,0,0,0,336,337,7,0,0,0,337,39,1,0,0,0,338,339,5,7,0,
0,339,340,3,146,73,0,340,41,1,0,0,0,341,345,5,61,0,0,342,344,8,1,0,0,343,
342,1,0,0,0,344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,357,1,0,
0,0,347,345,1,0,0,0,348,352,5,62,0,0,349,351,5,87,0,0,350,349,1,0,0,0,351,
354,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,357,1,0,0,0,354,352,1,0,
0,0,355,357,5,64,0,0,356,341,1,0,0,0,356,348,1,0,0,0,356,355,1,0,0,0,357,
43,1,0,0,0,358,362,5,63,0,0,359,361,5,87,0,0,360,359,1,0,0,0,361,364,1,0,
0,0,362,360,1,0,0,0,362,363,1,0,0,0,363,45,1,0,0,0,364,362,1,0,0,0,365,366,
5,8,0,0,366,373,3,146,73,0,367,368,5,8,0,0,368,369,5,68,0,0,369,370,3,146,
73,0,370,371,5,69,0,0,371,373,1,0,0,0,372,365,1,0,0,0,372,367,1,0,0,0,373,
47,1,0,0,0,374,375,5,9,0,0,375,376,3,120,60,0,376,49,1,0,0,0,377,378,5,10,
0,0,378,385,3,146,73,0,379,380,5,10,0,0,380,381,5,68,0,0,381,382,3,146,73,
0,382,383,5,69,0,0,383,385,1,0,0,0,384,377,1,0,0,0,384,379,1,0,0,0,385,51,
1,0,0,0,386,387,5,11,0,0,387,388,3,146,73,0,388,53,1,0,0,0,389,390,5,12,
0,0,390,391,3,146,73,0,391,55,1,0,0,0,392,393,5,13,0,0,393,394,3,146,73,
0,394,57,1,0,0,0,395,396,5,14,0,0,396,397,3,120,60,0,397,59,1,0,0,0,398,
399,5,15,0,0,399,400,3,124,62,0,400,61,1,0,0,0,401,402,5,16,0,0,402,403,
3,120,60,0,403,63,1,0,0,0,404,405,5,51,0,0,405,406,5,49,0,0,406,65,1,0,0,
0,407,413,5,17,0,0,408,411,3,120,60,0,409,410,5,70,0,0,410,412,3,120,60,
0,411,409,1,0,0,0,411,412,1,0,0,0,412,414,1,0,0,0,413,408,1,0,0,0,413,414,
1,0,0,0,414,67,1,0,0,0,415,416,5,18,0,0,416,417,3,120,60,0,417,69,1,0,0,
0,418,422,5,67,0,0,419,421,3,72,36,0,420,419,1,0,0,0,421,424,1,0,0,0,422,
420,1,0,0,0,422,423,1,0,0,0,423,425,1,0,0,0,424,422,1,0,0,0,425,426,5,84,
0,0,426,71,1,0,0,0,427,430,5,86,0,0,428,430,3,74,37,0,429,427,1,0,0,0,429,
428,1,0,0,0,430,73,1,0,0,0,431,432,5,85,0,0,432,433,3,120,60,0,433,434,5,
44,0,0,434,75,1,0,0,0,435,437,5,19,0,0,436,438,3,120,60,0,437,436,1,0,0,
0,437,438,1,0,0,0,438,77,1,0,0,0,439,440,5,20,0,0,440,441,3,146,73,0,441,
79,1,0,0,0,442,451,3,82,41,0,443,451,3,84,42,0,444,451,3,86,43,0,445,451,
3,88,44,0,446,451,3,90,45,0,447,451,3,92,46,0,448,451,3,94,47,0,449,451,
3,96,48,0,450,442,1,0,0,0,450,443,1,0,0,0,450,444,1,0,0,0,450,445,1,0,0,
0,450,446,1,0,0,0,450,447,1,0,0,0,450,448,1,0,0,0,450,449,1,0,0,0,451,81,
1,0,0,0,452,457,3,120,60,0,453,454,5,50,0,0,454,455,5,21,0,0,455,457,3,120,
60,0,456,452,1,0,0,0,456,453,1,0,0,0,457,83,1,0,0,0,458,459,5,50,0,0,459,
460,5,22,0,0,460,461,3,120,60,0,461,85,1,0,0,0,462,463,5,50,0,0,463,464,
5,23,0,0,464,465,3,120,60,0,465,87,1,0,0,0,466,467,5,50,0,0,467,468,7,2,
0,0,468,89,1,0,0,0,469,470,5,21,0,0,470,471,3,120,60,0,471,91,1,0,0,0,472,
473,5,22,0,0,473,474,3,120,60,0,474,93,1,0,0,0,475,476,5,23,0,0,476,477,
3,120,60,0,477,95,1,0,0,0,478,479,7,2,0,0,479,97,1,0,0,0,480,481,5,24,0,
0,481,482,3,120,60,0,482,99,1,0,0,0,483,484,5,3,0,0,484,101,1,0,0,0,485,
486,5,4,0,0,486,487,3,120,60,0,487,103,1,0,0,0,488,490,5,25,0,0,489,491,
3,120,60,0,490,489,1,0,0,0,490,491,1,0,0,0,491,105,1,0,0,0,492,493,5,26,
0,0,493,494,3,120,60,0,494,107,1,0,0,0,495,498,3,112,56,0,496,498,3,110,
55,0,497,495,1,0,0,0,497,496,1,0,0,0,498,109,1,0,0,0,499,501,5,49,0,0,500,
502,3,114,57,0,501,500,1,0,0,0,501,502,1,0,0,0,502,111,1,0,0,0,503,504,5,
60,0,0,504,506,5,49,0,0,505,507,3,114,57,0,506,505,1,0,0,0,506,507,1,0,0,
0,507,113,1,0,0,0,508,509,5,65,0,0,509,510,3,120,60,0,510,511,5,66,0,0,511,
515,1,0,0,0,512,513,5,65,0,0,513,515,5,66,0,0,514,508,1,0,0,0,514,512,1,
0,0,0,515,115,1,0,0,0,516,523,5,56,0,0,517,523,5,55,0,0,518,523,5,58,0,0,
519,523,5,57,0,0,520,523,5,38,0,0,521,523,3,118,59,0,522,516,1,0,0,0,522,
517,1,0,0,0,522,518,1,0,0,0,522,519,1,0,0,0,522,520,1,0,0,0,522,521,1,0,
0,0,523,117,1,0,0,0,524,525,7,3,0,0,525,119,1,0,0,0,526,527,6,60,-1,0,527,
528,3,122,61,0,528,535,1,0,0,0,529,530,10,2,0,0,530,531,3,130,65,0,531,532,
3,122,61,0,532,534,1,0,0,0,533,529,1,0,0,0,534,537,1,0,0,0,535,533,1,0,0,
0,535,536,1,0,0,0,536,121,1,0,0,0,537,535,1,0,0,0,538,539,6,61,-1,0,539,
540,3,124,62,0,540,547,1,0,0,0,541,542,10,2,0,0,542,543,3,116,58,0,543,544,
3,124,62,0,544,546,1,0,0,0,545,541,1,0,0,0,546,549,1,0,0,0,547,545,1,0,0,
0,547,548,1,0,0,0,548,123,1,0,0,0,549,547,1,0,0,0,550,551,6,62,-1,0,551,
552,3,126,63,0,552,559,1,0,0,0,553,554,10,2,0,0,554,555,3,128,64,0,555,556,
3,126,63,0,556,558,1,0,0,0,557,553,1,0,0,0,558,561,1,0,0,0,559,557,1,0,0,
0,559,560,1,0,0,0,560,125,1,0,0,0,561,559,1,0,0,0,562,563,6,63,-1,0,563,
564,3,134,67,0,564,571,1,0,0,0,565,566,10,2,0,0,566,567,3,132,66,0,567,568,
3,134,67,0,568,570,1,0,0,0,569,565,1,0,0,0,570,573,1,0,0,0,571,569,1,0,0,
0,571,572,1,0,0,0,572,127,1,0,0,0,573,571,1,0,0,0,574,576,5,72,0,0,575,574,
1,0,0,0,576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,580,1,0,0,0,
579,577,1,0,0,0,580,581,7,4,0,0,581,129,1,0,0,0,582,584,5,72,0,0,583,582,
1,0,0,0,584,587,1,0,0,0,585,583,1,0,0,0,585,586,1,0,0,0,586,588,1,0,0,0,
587,585,1,0,0,0,588,589,7,5,0,0,589,131,1,0,0,0,590,592,5,72,0,0,591,590,
1,0,0,0,592,595,1,0,0,0,593,591,1,0,0,0,593,594,1,0,0,0,594,596,1,0,0,0,
595,593,1,0,0,0,596,597,7,6,0,0,597,133,1,0,0,0,598,599,5,68,0,0,599,600,
3,120,60,0,600,601,5,69,0,0,601,615,1,0,0,0,602,615,3,136,68,0,603,615,3,
110,55,0,604,605,3,140,70,0,605,606,3,120,60,0,606,615,1,0,0,0,607,615,3,
138,69,0,608,615,3,148,74,0,609,615,3,112,56,0,610,615,3,144,72,0,611,615,
3,70,35,0,612,613,5,53,0,0,613,615,3,120,60,0,614,598,1,0,0,0,614,602,1,
0,0,0,614,603,1,0,0,0,614,604,1,0,0,0,614,607,1,0,0,0,614,608,1,0,0,0,614,
609,1,0,0,0,614,610,1,0,0,0,614,611,1,0,0,0,614,612,1,0,0,0,615,135,1,0,
0,0,616,618,7,4,0,0,617,616,1,0,0,0,617,618,1,0,0,0,618,619,1,0,0,0,619,
620,5,36,0,0,620,137,1,0,0,0,621,622,5,49,0,0,622,623,5,68,0,0,623,624,3,
146,73,0,624,625,5,69,0,0,625,139,1,0,0,0,626,627,5,32,0,0,627,141,1,0,0,
0,628,630,5,72,0,0,629,628,1,0,0,0,630,633,1,0,0,0,631,629,1,0,0,0,631,632,
1,0,0,0,632,634,1,0,0,0,633,631,1,0,0,0,634,635,7,7,0,0,635,143,1,0,0,0,
636,637,5,60,0,0,637,638,5,49,0,0,638,639,5,68,0,0,639,640,3,146,73,0,640,
641,5,69,0,0,641,644,1,0,0,0,642,644,3,60,30,0,643,636,1,0,0,0,643,642,1,
0,0,0,644,145,1,0,0,0,645,650,3,120,60,0,646,647,5,70,0,0,647,649,3,120,
60,0,648,646,1,0,0,0,649,652,1,0,0,0,650,648,1,0,0,0,650,651,1,0,0,0,651,
147,1,0,0,0,652,650,1,0,0,0,653,657,5,47,0,0,654,656,3,150,75,0,655,654,
1,0,0,0,656,659,1,0,0,0,657,655,1,0,0,0,657,658,1,0,0,0,658,660,1,0,0,0,
659,657,1,0,0,0,660,690,5,47,0,0,661,665,5,46,0,0,662,664,3,154,77,0,663,
662,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,665,666,1,0,0,0,666,671,1,0,
0,0,667,665,1,0,0,0,668,670,3,158,79,0,669,668,1,0,0,0,670,673,1,0,0,0,671,
669,1,0,0,0,671,672,1,0,0,0,672,674,1,0,0,0,673,671,1,0,0,0,674,690,5,46,
0,0,675,679,5,45,0,0,676,678,3,160,80,0,677,676,1,0,0,0,678,681,1,0,0,0,
679,677,1,0,0,0,679,680,1,0,0,0,680,685,1,0,0,0,681,679,1,0,0,0,682,684,
3,164,82,0,683,682,1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,0,685,686,1,0,0,
0,686,688,1,0,0,0,687,685,1,0,0,0,688,690,5,45,0,0,689,653,1,0,0,0,689,661,
1,0,0,0,689,675,1,0,0,0,690,149,1,0,0,0,691,694,5,83,0,0,692,694,3,152,76,
0,693,691,1,0,0,0,693,692,1,0,0,0,694,151,1,0,0,0,695,696,5,82,0,0,696,697,
3,120,60,0,697,698,5,44,0,0,698,153,1,0,0,0,699,700,7,8,0,0,700,155,1,0,
0,0,701,702,5,77,0,0,702,703,3,120,60,0,703,704,5,44,0,0,704,157,1,0,0,0,
705,709,3,156,78,0,706,708,3,154,77,0,707,706,1,0,0,0,708,711,1,0,0,0,709,
707,1,0,0,0,709,710,1,0,0,0,710,159,1,0,0,0,711,709,1,0,0,0,712,713,7,9,
0,0,713,161,1,0,0,0,714,715,5,80,0,0,715,716,3,120,60,0,716,717,5,44,0,0,
717,163,1,0,0,0,718,722,3,162,81,0,719,721,3,160,80,0,720,719,1,0,0,0,721,
724,1,0,0,0,722,720,1,0,0,0,722,723,1,0,0,0,723,165,1,0,0,0,724,722,1,0,
0,0,61,171,173,181,188,199,202,209,223,233,237,241,244,285,290,296,300,303,
309,320,324,334,345,352,356,362,372,384,411,413,422,429,437,450,456,490,
497,501,506,514,522,535,547,559,571,577,585,593,614,617,631,643,650,657,
665,671,679,685,689,693,709,722];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class qsrcParser extends antlr4.Parser {

    static grammarFileName = "qsrcParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'&'", null, null, "'='", 
                            "'+='", "'-='", "'/='", "'*='", "'to'", null, 
                            null, null, null, null, null, "'*'", "':'", 
                            "'+'", "'-'", "'/'", "'>'", null, "'<'", null, 
                            "'<>'", "'$'", "'!'", "'!!'", null, null, "'['", 
                            "']'", "'{'", "'('", "')'", "','", "'?'", null, 
                            null, null, null, null, null, null, "'\"\"'", 
                            null, null, null, null, "'}'" ];
    static symbolicNames = [ null, "PassageIdentifier", "PassageEndMarker", 
                             "SYSCALL", "SYSSETTING", "ADDOBJ", "ADDQST", 
                             "CLOSE", "COPYARR", "DELACT", "DYNAMIC", "GOSUB", 
                             "GOTO", "XGOTO", "INCLIB", "INPUT", "JUMP", 
                             "KILLVAR", "MSG", "OPENGAME", "PLAY", "Print", 
                             "PrintNewline", "PrintNewlinepre", "SAVEGAME", 
                             "VIEW", "WAIT", "ACT", "IF", "ELSEIF", "ELSE", 
                             "END", "INVERT", "AND", "OR", "CommandConnect", 
                             "NumberLiteral", "SET", "EqualOperator", "IncrementOperator", 
                             "DecrementOperator", "DivideSelfOperator", 
                             "MultSelfOperator", "SetToOperator", "TemplateStringEndExpression", 
                             "DOUBLEQUOTE", "SINGLEQUOTE", "TemplateDoubleSingleQuote", 
                             "MOD", "WORD", "STAR", "DPOINT", "PLUS", "MINUS", 
                             "DIVIDE", "GREATER_THAN", "GREAT_EQUAL_THAN", 
                             "LOWER_THAN", "LOWER_EQUAL_THAN", "NEQ", "DOLLAR", 
                             "EXCLAMATIONMARK", "CommentStart", "AttachedComment", 
                             "Multilinecomment", "ARRAYBRACKOPEN", "ARRAYBRACKCLOSE", 
                             "BRACK_OPEN", "ParenthesisLeft", "ParenthesisRight", 
                             "Comma", "Questionmark", "NEWLINE", "WHITESPACE", 
                             "LINEBREAK", "AnythingElse", "EscapedSingleQuote", 
                             "TemplateStringStartExpression", "StringAtom", 
                             "EscapedDoubleQuote", "DQTemplateStringStartExpression", 
                             "DQStringAtom", "EscapedStringTemplateStart", 
                             "InEscapedStringAtom", "BRACK_CLOSE", "MultilineTemplateStringStartExpression", 
                             "AnythingElseInMultiLine", "InComment" ];
    static ruleNames = [ "passage", "block", "statementLine", "emptyLine", 
                         "actBlock", "actInline", "actPicture", "ifInline", 
                         "ifBlock", "elseIfBlock", "elseBlock", "command", 
                         "commandLine", "commandAppended", "addobj", "addqst", 
                         "assignment", "assignmentNumber", "assignmentString", 
                         "assignmentoperator", "close", "comment", "commentAttached", 
                         "copyarr", "delact", "dynamic", "gosub", "gt", 
                         "xgt", "inclib", "inp", "jump", "jumpmarker", "killvar", 
                         "msg", "multilineBlock", "multilineContents", "multilineBlockTemplateVar", 
                         "opengame", "play", "print", "printMain", "printNewlineMain", 
                         "printNewlinepreMain", "printEmptyLineMain", "printSide", 
                         "printNewlineSide", "printNewlinepreSide", "printEmptyLineSide", 
                         "savegame", "syscall", "syssetting", "view", "wait", 
                         "identifier", "identifierNumber", "identifierString", 
                         "arrayIndex", "compareOperator", "notEqual", "value", 
                         "comparee", "sum", "term", "addOp", "logicOp", 
                         "mulOp", "factor", "numberLiteralWithOptionalSign", 
                         "functionWithNumberReturn", "invert", "numberOperator", 
                         "functionWithStringReturn", "functionArguments", 
                         "escapedString", "escapedStringContent", "escapedStringTemplateVar", 
                         "stringAtom", "stringTemplateVar", "stringTemplateVarSuffix", 
                         "doubleQuoteAtom", "stringTemplateVarDQ", "stringDQTemplateVarSuffix" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = qsrcParser.ruleNames;
        this.literalNames = qsrcParser.literalNames;
        this.symbolicNames = qsrcParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 60:
    	    		return this.value_sempred(localctx, predIndex);
    	case 61:
    	    		return this.comparee_sempred(localctx, predIndex);
    	case 62:
    	    		return this.sum_sempred(localctx, predIndex);
    	case 63:
    	    		return this.term_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    comparee_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    sum_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	passage() {
	    let localctx = new PassageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, qsrcParser.RULE_passage);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(qsrcParser.PassageIdentifier);
	        this.state = 167;
	        this.block();
	        this.state = 168;
	        this.match(qsrcParser.PassageEndMarker);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 2059) !== 0)) {
	            this.state = 171;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 72:
	                this.state = 169;
	                this.match(qsrcParser.NEWLINE);
	                break;
	            case 61:
	            case 62:
	            case 64:
	                this.state = 170;
	                this.comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 176;
	        this.match(qsrcParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, qsrcParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 536870904) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1883168817) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 281) !== 0)) {
	            this.state = 178;
	            this.statementLine();
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statementLine() {
	    let localctx = new StatementLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, qsrcParser.RULE_statementLine);
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.actBlock();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.commandLine();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.ifBlock();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.emptyLine();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyLine() {
	    let localctx = new EmptyLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, qsrcParser.RULE_emptyLine);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(qsrcParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actBlock() {
	    let localctx = new ActBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, qsrcParser.RULE_actBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(qsrcParser.ACT);
	        this.state = 193;
	        this.value(0);
	        this.state = 194;
	        this.match(qsrcParser.DPOINT);
	        this.state = 195;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 196;
	        this.block();
	        this.state = 197;
	        this.match(qsrcParser.END);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 198;
	            this.commandAppended();
	        }

	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 201;
	            this.commentAttached();
	        }

	        this.state = 204;
	        this.match(qsrcParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actInline() {
	    let localctx = new ActInlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, qsrcParser.RULE_actInline);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(qsrcParser.ACT);
	        this.state = 207;
	        this.value(0);
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===70) {
	            this.state = 208;
	            this.actPicture();
	        }

	        this.state = 211;
	        this.match(qsrcParser.DPOINT);
	        this.state = 212;
	        this.command();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actPicture() {
	    let localctx = new ActPictureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, qsrcParser.RULE_actPicture);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(qsrcParser.Comma);
	        this.state = 215;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifInline() {
	    let localctx = new IfInlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, qsrcParser.RULE_ifInline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(qsrcParser.IF);
	        this.state = 218;
	        this.value(0);
	        this.state = 219;
	        this.match(qsrcParser.DPOINT);
	        this.state = 220;
	        this.command();
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 221;
	            this.match(qsrcParser.ELSE);
	            this.state = 222;
	            this.command();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifBlock() {
	    let localctx = new IfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, qsrcParser.RULE_ifBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(qsrcParser.IF);
	        this.state = 226;
	        this.value(0);
	        this.state = 227;
	        this.match(qsrcParser.DPOINT);
	        this.state = 228;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 229;
	        this.block();
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 230;
	            this.elseIfBlock();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 236;
	            this.elseBlock();
	        }

	        this.state = 239;
	        this.match(qsrcParser.END);
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 240;
	            this.commandAppended();
	        }

	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 243;
	            this.commentAttached();
	        }

	        this.state = 246;
	        this.match(qsrcParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfBlock() {
	    let localctx = new ElseIfBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, qsrcParser.RULE_elseIfBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(qsrcParser.ELSEIF);
	        this.state = 249;
	        this.value(0);
	        this.state = 250;
	        this.match(qsrcParser.DPOINT);
	        this.state = 251;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 252;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseBlock() {
	    let localctx = new ElseBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, qsrcParser.RULE_elseBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(qsrcParser.ELSE);
	        this.state = 255;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 256;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, qsrcParser.RULE_command);
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 32:
	        case 36:
	        case 37:
	        case 45:
	        case 46:
	        case 47:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 60:
	        case 67:
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 285;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 258;
	                this.match(qsrcParser.ParenthesisLeft);
	                this.state = 259;
	                this.command();
	                this.state = 260;
	                this.match(qsrcParser.ParenthesisRight);
	                break;

	            case 2:
	                this.state = 262;
	                this.addobj();
	                break;

	            case 3:
	                this.state = 263;
	                this.addqst();
	                break;

	            case 4:
	                this.state = 264;
	                this.assignment();
	                break;

	            case 5:
	                this.state = 265;
	                this.close();
	                break;

	            case 6:
	                this.state = 266;
	                this.copyarr();
	                break;

	            case 7:
	                this.state = 267;
	                this.delact();
	                break;

	            case 8:
	                this.state = 268;
	                this.dynamic();
	                break;

	            case 9:
	                this.state = 269;
	                this.gosub();
	                break;

	            case 10:
	                this.state = 270;
	                this.gt();
	                break;

	            case 11:
	                this.state = 271;
	                this.xgt();
	                break;

	            case 12:
	                this.state = 272;
	                this.inclib();
	                break;

	            case 13:
	                this.state = 273;
	                this.jump();
	                break;

	            case 14:
	                this.state = 274;
	                this.jumpmarker();
	                break;

	            case 15:
	                this.state = 275;
	                this.killvar();
	                break;

	            case 16:
	                this.state = 276;
	                this.msg();
	                break;

	            case 17:
	                this.state = 277;
	                this.opengame();
	                break;

	            case 18:
	                this.state = 278;
	                this.play();
	                break;

	            case 19:
	                this.state = 279;
	                this.print();
	                break;

	            case 20:
	                this.state = 280;
	                this.savegame();
	                break;

	            case 21:
	                this.state = 281;
	                this.syscall();
	                break;

	            case 22:
	                this.state = 282;
	                this.syssetting();
	                break;

	            case 23:
	                this.state = 283;
	                this.view();
	                break;

	            case 24:
	                this.state = 284;
	                this.wait();
	                break;

	            }
	            this.state = 290;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 287;
	                    this.commandAppended(); 
	                }
	                this.state = 292;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.actInline();
	            break;
	        case 61:
	        case 62:
	        case 64:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 294;
	            this.comment();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 295;
	            this.ifInline();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandLine() {
	    let localctx = new CommandLineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, qsrcParser.RULE_commandLine);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.command();
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 299;
	            this.commandAppended();
	        }

	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 302;
	            this.commentAttached();
	        }

	        this.state = 305;
	        this.match(qsrcParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commandAppended() {
	    let localctx = new CommandAppendedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, qsrcParser.RULE_commandAppended);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(qsrcParser.CommandConnect);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 308;
	            this.match(qsrcParser.CommandConnect);
	        }

	        this.state = 311;
	        this.command();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addobj() {
	    let localctx = new AddobjContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, qsrcParser.RULE_addobj);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(qsrcParser.ADDOBJ);
	        this.state = 314;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	addqst() {
	    let localctx = new AddqstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, qsrcParser.RULE_addqst);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(qsrcParser.ADDQST);
	        this.state = 317;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, qsrcParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 319;
	            this.match(qsrcParser.SET);
	        }

	        this.state = 324;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.state = 322;
	            this.assignmentNumber();
	            break;
	        case 60:
	            this.state = 323;
	            this.assignmentString();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentNumber() {
	    let localctx = new AssignmentNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, qsrcParser.RULE_assignmentNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.identifierNumber();
	        this.state = 327;
	        this.assignmentoperator();
	        this.state = 328;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentString() {
	    let localctx = new AssignmentStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, qsrcParser.RULE_assignmentString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.identifierString();
	        this.state = 331;
	        this.assignmentoperator();
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 332;
	            this.value(0);
	            break;

	        case 2:
	            this.state = 333;
	            this.multilineBlock();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentoperator() {
	    let localctx = new AssignmentoperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, qsrcParser.RULE_assignmentoperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	close() {
	    let localctx = new CloseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, qsrcParser.RULE_close);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(qsrcParser.CLOSE);
	        this.state = 339;
	        this.functionArguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, qsrcParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 61:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 341;
	            this.match(qsrcParser.EXCLAMATIONMARK);
	            this.state = 345;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 342;
	                    _la = this._input.LA(1);
	                    if(_la<=0 || _la===72) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    } 
	                }
	                this.state = 347;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	            }

	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 348;
	            this.match(qsrcParser.CommentStart);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===87) {
	                this.state = 349;
	                this.match(qsrcParser.InComment);
	                this.state = 354;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 355;
	            this.match(qsrcParser.Multilinecomment);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commentAttached() {
	    let localctx = new CommentAttachedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, qsrcParser.RULE_commentAttached);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(qsrcParser.AttachedComment);
	        this.state = 362;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===87) {
	            this.state = 359;
	            this.match(qsrcParser.InComment);
	            this.state = 364;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	copyarr() {
	    let localctx = new CopyarrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, qsrcParser.RULE_copyarr);
	    try {
	        this.state = 372;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 365;
	            this.match(qsrcParser.COPYARR);
	            this.state = 366;
	            this.functionArguments();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 367;
	            this.match(qsrcParser.COPYARR);
	            this.state = 368;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 369;
	            this.functionArguments();
	            this.state = 370;
	            this.match(qsrcParser.ParenthesisRight);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delact() {
	    let localctx = new DelactContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, qsrcParser.RULE_delact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.match(qsrcParser.DELACT);
	        this.state = 375;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dynamic() {
	    let localctx = new DynamicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, qsrcParser.RULE_dynamic);
	    try {
	        this.state = 384;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 377;
	            this.match(qsrcParser.DYNAMIC);
	            this.state = 378;
	            this.functionArguments();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 379;
	            this.match(qsrcParser.DYNAMIC);
	            this.state = 380;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 381;
	            this.functionArguments();
	            this.state = 382;
	            this.match(qsrcParser.ParenthesisRight);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gosub() {
	    let localctx = new GosubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, qsrcParser.RULE_gosub);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(qsrcParser.GOSUB);
	        this.state = 387;
	        this.functionArguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gt() {
	    let localctx = new GtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, qsrcParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(qsrcParser.GOTO);
	        this.state = 390;
	        this.functionArguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	xgt() {
	    let localctx = new XgtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, qsrcParser.RULE_xgt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(qsrcParser.XGOTO);
	        this.state = 393;
	        this.functionArguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inclib() {
	    let localctx = new InclibContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, qsrcParser.RULE_inclib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.match(qsrcParser.INCLIB);
	        this.state = 396;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inp() {
	    let localctx = new InpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, qsrcParser.RULE_inp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(qsrcParser.INPUT);
	        this.state = 399;
	        this.sum(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jump() {
	    let localctx = new JumpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, qsrcParser.RULE_jump);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(qsrcParser.JUMP);
	        this.state = 402;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jumpmarker() {
	    let localctx = new JumpmarkerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, qsrcParser.RULE_jumpmarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(qsrcParser.DPOINT);
	        this.state = 405;
	        this.match(qsrcParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	killvar() {
	    let localctx = new KillvarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, qsrcParser.RULE_killvar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(qsrcParser.KILLVAR);
	        this.state = 413;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 3223453697) !== 0) || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 3154021) !== 0)) {
	            this.state = 408;
	            this.value(0);
	            this.state = 411;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===70) {
	                this.state = 409;
	                this.match(qsrcParser.Comma);
	                this.state = 410;
	                this.value(0);
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	msg() {
	    let localctx = new MsgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, qsrcParser.RULE_msg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(qsrcParser.MSG);
	        this.state = 416;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multilineBlock() {
	    let localctx = new MultilineBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, qsrcParser.RULE_multilineBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(qsrcParser.BRACK_OPEN);

	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85 || _la===86) {
	            this.state = 419;
	            this.multilineContents();
	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 425;
	        this.match(qsrcParser.BRACK_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multilineContents() {
	    let localctx = new MultilineContentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, qsrcParser.RULE_multilineContents);
	    try {
	        this.state = 429;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 86:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.match(qsrcParser.AnythingElseInMultiLine);
	            break;
	        case 85:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 428;
	            this.multilineBlockTemplateVar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multilineBlockTemplateVar() {
	    let localctx = new MultilineBlockTemplateVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, qsrcParser.RULE_multilineBlockTemplateVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.match(qsrcParser.MultilineTemplateStringStartExpression);
	        this.state = 432;
	        this.value(0);
	        this.state = 433;
	        this.match(qsrcParser.TemplateStringEndExpression);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opengame() {
	    let localctx = new OpengameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, qsrcParser.RULE_opengame);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(qsrcParser.OPENGAME);
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 3223453697) !== 0) || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 3154021) !== 0)) {
	            this.state = 436;
	            this.value(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	play() {
	    let localctx = new PlayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, qsrcParser.RULE_play);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this.match(qsrcParser.PLAY);
	        this.state = 440;
	        this.functionArguments();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, qsrcParser.RULE_print);
	    try {
	        this.state = 450;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 442;
	            this.printMain();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 443;
	            this.printNewlineMain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 444;
	            this.printNewlinepreMain();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 445;
	            this.printEmptyLineMain();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 446;
	            this.printSide();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 447;
	            this.printNewlineSide();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 448;
	            this.printNewlinepreSide();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 449;
	            this.printEmptyLineSide();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printMain() {
	    let localctx = new PrintMainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, qsrcParser.RULE_printMain);
	    try {
	        this.state = 456;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 32:
	        case 36:
	        case 45:
	        case 46:
	        case 47:
	        case 49:
	        case 52:
	        case 53:
	        case 60:
	        case 67:
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 452;
	            this.value(0);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 453;
	            this.match(qsrcParser.STAR);
	            this.state = 454;
	            this.match(qsrcParser.Print);
	            this.state = 455;
	            this.value(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printNewlineMain() {
	    let localctx = new PrintNewlineMainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, qsrcParser.RULE_printNewlineMain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.match(qsrcParser.STAR);
	        this.state = 459;
	        this.match(qsrcParser.PrintNewline);
	        this.state = 460;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printNewlinepreMain() {
	    let localctx = new PrintNewlinepreMainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, qsrcParser.RULE_printNewlinepreMain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
	        this.match(qsrcParser.STAR);
	        this.state = 463;
	        this.match(qsrcParser.PrintNewlinepre);
	        this.state = 464;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printEmptyLineMain() {
	    let localctx = new PrintEmptyLineMainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, qsrcParser.RULE_printEmptyLineMain);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.match(qsrcParser.STAR);
	        this.state = 467;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printSide() {
	    let localctx = new PrintSideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, qsrcParser.RULE_printSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.match(qsrcParser.Print);
	        this.state = 470;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printNewlineSide() {
	    let localctx = new PrintNewlineSideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, qsrcParser.RULE_printNewlineSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.match(qsrcParser.PrintNewline);
	        this.state = 473;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printNewlinepreSide() {
	    let localctx = new PrintNewlinepreSideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, qsrcParser.RULE_printNewlinepreSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.match(qsrcParser.PrintNewlinepre);
	        this.state = 476;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printEmptyLineSide() {
	    let localctx = new PrintEmptyLineSideContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, qsrcParser.RULE_printEmptyLineSide);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===23)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	savegame() {
	    let localctx = new SavegameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, qsrcParser.RULE_savegame);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.match(qsrcParser.SAVEGAME);
	        this.state = 481;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	syscall() {
	    let localctx = new SyscallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, qsrcParser.RULE_syscall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this.match(qsrcParser.SYSCALL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	syssetting() {
	    let localctx = new SyssettingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, qsrcParser.RULE_syssetting);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(qsrcParser.SYSSETTING);
	        this.state = 486;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	view() {
	    let localctx = new ViewContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, qsrcParser.RULE_view);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.match(qsrcParser.VIEW);
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 15)) & ~0x1f) === 0 && ((1 << (_la - 15)) & 3223453697) !== 0) || ((((_la - 47)) & ~0x1f) === 0 && ((1 << (_la - 47)) & 3154021) !== 0)) {
	            this.state = 489;
	            this.value(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wait() {
	    let localctx = new WaitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, qsrcParser.RULE_wait);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        this.match(qsrcParser.WAIT);
	        this.state = 493;
	        this.value(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, qsrcParser.RULE_identifier);
	    try {
	        this.state = 497;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 495;
	            this.identifierString();
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 496;
	            this.identifierNumber();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierNumber() {
	    let localctx = new IdentifierNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, qsrcParser.RULE_identifierNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
	        this.match(qsrcParser.WORD);
	        this.state = 501;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 500;
	            this.arrayIndex();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierString() {
	    let localctx = new IdentifierStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, qsrcParser.RULE_identifierString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(qsrcParser.DOLLAR);
	        this.state = 504;
	        this.match(qsrcParser.WORD);
	        this.state = 506;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        if(la_===1) {
	            this.state = 505;
	            this.arrayIndex();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayIndex() {
	    let localctx = new ArrayIndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, qsrcParser.RULE_arrayIndex);
	    try {
	        this.state = 514;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 508;
	            this.match(qsrcParser.ARRAYBRACKOPEN);
	            this.state = 509;
	            this.value(0);
	            this.state = 510;
	            this.match(qsrcParser.ARRAYBRACKCLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 512;
	            this.match(qsrcParser.ARRAYBRACKOPEN);
	            this.state = 513;
	            this.match(qsrcParser.ARRAYBRACKCLOSE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compareOperator() {
	    let localctx = new CompareOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, qsrcParser.RULE_compareOperator);
	    try {
	        this.state = 522;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 56:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 516;
	            this.match(qsrcParser.GREAT_EQUAL_THAN);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 517;
	            this.match(qsrcParser.GREATER_THAN);
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 518;
	            this.match(qsrcParser.LOWER_EQUAL_THAN);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 519;
	            this.match(qsrcParser.LOWER_THAN);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 520;
	            this.match(qsrcParser.EqualOperator);
	            break;
	        case 59:
	        case 61:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 521;
	            this.notEqual();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	notEqual() {
	    let localctx = new NotEqualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, qsrcParser.RULE_notEqual);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
	        _la = this._input.LA(1);
	        if(!(_la===59 || _la===61)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 120;
	    this.enterRecursionRule(localctx, 120, qsrcParser.RULE_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 527;
	        this.comparee(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 535;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ValueContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, qsrcParser.RULE_value);
	                this.state = 529;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 530;
	                this.logicOp();
	                this.state = 531;
	                this.comparee(0); 
	            }
	            this.state = 537;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	comparee(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CompareeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 122;
	    this.enterRecursionRule(localctx, 122, qsrcParser.RULE_comparee, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        this.sum(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 547;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CompareeContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, qsrcParser.RULE_comparee);
	                this.state = 541;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 542;
	                this.compareOperator();
	                this.state = 543;
	                this.sum(0); 
	            }
	            this.state = 549;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	sum(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SumContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 124;
	    this.enterRecursionRule(localctx, 124, qsrcParser.RULE_sum, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 551;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 559;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new SumContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, qsrcParser.RULE_sum);
	                this.state = 553;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 554;
	                this.addOp();
	                this.state = 555;
	                this.term(0); 
	            }
	            this.state = 561;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TermContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 126;
	    this.enterRecursionRule(localctx, 126, qsrcParser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 571;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TermContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, qsrcParser.RULE_term);
	                this.state = 565;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 566;
	                this.mulOp();
	                this.state = 567;
	                this.factor(); 
	            }
	            this.state = 573;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	addOp() {
	    let localctx = new AddOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, qsrcParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===72) {
	            this.state = 574;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 579;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 580;
	        _la = this._input.LA(1);
	        if(!(_la===52 || _la===53)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicOp() {
	    let localctx = new LogicOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, qsrcParser.RULE_logicOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===72) {
	            this.state = 582;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 587;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 588;
	        _la = this._input.LA(1);
	        if(!(_la===33 || _la===34)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mulOp() {
	    let localctx = new MulOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, qsrcParser.RULE_mulOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 593;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===72) {
	            this.state = 590;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 595;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 596;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 69) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, qsrcParser.RULE_factor);
	    try {
	        this.state = 614;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 598;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 599;
	            this.value(0);
	            this.state = 600;
	            this.match(qsrcParser.ParenthesisRight);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 602;
	            this.numberLiteralWithOptionalSign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 603;
	            this.identifierNumber();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 604;
	            this.invert();
	            this.state = 605;
	            this.value(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 607;
	            this.functionWithNumberReturn();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 608;
	            this.escapedString();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 609;
	            this.identifierString();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 610;
	            this.functionWithStringReturn();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 611;
	            this.multilineBlock();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 612;
	            this.match(qsrcParser.MINUS);
	            this.state = 613;
	            this.value(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberLiteralWithOptionalSign() {
	    let localctx = new NumberLiteralWithOptionalSignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, qsrcParser.RULE_numberLiteralWithOptionalSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 617;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52 || _la===53) {
	            this.state = 616;
	            _la = this._input.LA(1);
	            if(!(_la===52 || _la===53)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 619;
	        this.match(qsrcParser.NumberLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionWithNumberReturn() {
	    let localctx = new FunctionWithNumberReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, qsrcParser.RULE_functionWithNumberReturn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 621;
	        this.match(qsrcParser.WORD);
	        this.state = 622;
	        this.match(qsrcParser.ParenthesisLeft);
	        this.state = 623;
	        this.functionArguments();
	        this.state = 624;
	        this.match(qsrcParser.ParenthesisRight);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	invert() {
	    let localctx = new InvertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, qsrcParser.RULE_invert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 626;
	        this.match(qsrcParser.INVERT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberOperator() {
	    let localctx = new NumberOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, qsrcParser.RULE_numberOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 631;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===72) {
	            this.state = 628;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 633;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 634;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 3833859) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionWithStringReturn() {
	    let localctx = new FunctionWithStringReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, qsrcParser.RULE_functionWithStringReturn);
	    try {
	        this.state = 643;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 636;
	            this.match(qsrcParser.DOLLAR);
	            this.state = 637;
	            this.match(qsrcParser.WORD);
	            this.state = 638;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 639;
	            this.functionArguments();
	            this.state = 640;
	            this.match(qsrcParser.ParenthesisRight);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 642;
	            this.inp();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionArguments() {
	    let localctx = new FunctionArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, qsrcParser.RULE_functionArguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 645;
	        this.value(0);
	        this.state = 650;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 646;
	            this.match(qsrcParser.Comma);
	            this.state = 647;
	            this.value(0);
	            this.state = 652;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escapedString() {
	    let localctx = new EscapedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, qsrcParser.RULE_escapedString);
	    var _la = 0;
	    try {
	        this.state = 689;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 653;
	            this.match(qsrcParser.TemplateDoubleSingleQuote);
	            this.state = 657;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===82 || _la===83) {
	                this.state = 654;
	                this.escapedStringContent();
	                this.state = 659;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 660;
	            this.match(qsrcParser.TemplateDoubleSingleQuote);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 661;
	            this.match(qsrcParser.SINGLEQUOTE);
	            this.state = 665;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76 || _la===78) {
	                this.state = 662;
	                this.stringAtom();
	                this.state = 667;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 671;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===77) {
	                this.state = 668;
	                this.stringTemplateVarSuffix();
	                this.state = 673;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 674;
	            this.match(qsrcParser.SINGLEQUOTE);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 675;
	            this.match(qsrcParser.DOUBLEQUOTE);
	            this.state = 679;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===79 || _la===81) {
	                this.state = 676;
	                this.doubleQuoteAtom();
	                this.state = 681;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 685;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===80) {
	                this.state = 682;
	                this.stringDQTemplateVarSuffix();
	                this.state = 687;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 688;
	            this.match(qsrcParser.DOUBLEQUOTE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escapedStringContent() {
	    let localctx = new EscapedStringContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 150, qsrcParser.RULE_escapedStringContent);
	    try {
	        this.state = 693;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 83:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 691;
	            this.match(qsrcParser.InEscapedStringAtom);
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 692;
	            this.escapedStringTemplateVar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	escapedStringTemplateVar() {
	    let localctx = new EscapedStringTemplateVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 152, qsrcParser.RULE_escapedStringTemplateVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 695;
	        this.match(qsrcParser.EscapedStringTemplateStart);
	        this.state = 696;
	        this.value(0);
	        this.state = 697;
	        this.match(qsrcParser.TemplateStringEndExpression);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringAtom() {
	    let localctx = new StringAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 154, qsrcParser.RULE_stringAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 699;
	        _la = this._input.LA(1);
	        if(!(_la===76 || _la===78)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringTemplateVar() {
	    let localctx = new StringTemplateVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 156, qsrcParser.RULE_stringTemplateVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 701;
	        this.match(qsrcParser.TemplateStringStartExpression);
	        this.state = 702;
	        this.value(0);
	        this.state = 703;
	        this.match(qsrcParser.TemplateStringEndExpression);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringTemplateVarSuffix() {
	    let localctx = new StringTemplateVarSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 158, qsrcParser.RULE_stringTemplateVarSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 705;
	        this.stringTemplateVar();
	        this.state = 709;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76 || _la===78) {
	            this.state = 706;
	            this.stringAtom();
	            this.state = 711;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doubleQuoteAtom() {
	    let localctx = new DoubleQuoteAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 160, qsrcParser.RULE_doubleQuoteAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 712;
	        _la = this._input.LA(1);
	        if(!(_la===79 || _la===81)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringTemplateVarDQ() {
	    let localctx = new StringTemplateVarDQContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 162, qsrcParser.RULE_stringTemplateVarDQ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 714;
	        this.match(qsrcParser.DQTemplateStringStartExpression);
	        this.state = 715;
	        this.value(0);
	        this.state = 716;
	        this.match(qsrcParser.TemplateStringEndExpression);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringDQTemplateVarSuffix() {
	    let localctx = new StringDQTemplateVarSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 164, qsrcParser.RULE_stringDQTemplateVarSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 718;
	        this.stringTemplateVarDQ();
	        this.state = 722;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===79 || _la===81) {
	            this.state = 719;
	            this.doubleQuoteAtom();
	            this.state = 724;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

qsrcParser.EOF = antlr4.Token.EOF;
qsrcParser.PassageIdentifier = 1;
qsrcParser.PassageEndMarker = 2;
qsrcParser.SYSCALL = 3;
qsrcParser.SYSSETTING = 4;
qsrcParser.ADDOBJ = 5;
qsrcParser.ADDQST = 6;
qsrcParser.CLOSE = 7;
qsrcParser.COPYARR = 8;
qsrcParser.DELACT = 9;
qsrcParser.DYNAMIC = 10;
qsrcParser.GOSUB = 11;
qsrcParser.GOTO = 12;
qsrcParser.XGOTO = 13;
qsrcParser.INCLIB = 14;
qsrcParser.INPUT = 15;
qsrcParser.JUMP = 16;
qsrcParser.KILLVAR = 17;
qsrcParser.MSG = 18;
qsrcParser.OPENGAME = 19;
qsrcParser.PLAY = 20;
qsrcParser.Print = 21;
qsrcParser.PrintNewline = 22;
qsrcParser.PrintNewlinepre = 23;
qsrcParser.SAVEGAME = 24;
qsrcParser.VIEW = 25;
qsrcParser.WAIT = 26;
qsrcParser.ACT = 27;
qsrcParser.IF = 28;
qsrcParser.ELSEIF = 29;
qsrcParser.ELSE = 30;
qsrcParser.END = 31;
qsrcParser.INVERT = 32;
qsrcParser.AND = 33;
qsrcParser.OR = 34;
qsrcParser.CommandConnect = 35;
qsrcParser.NumberLiteral = 36;
qsrcParser.SET = 37;
qsrcParser.EqualOperator = 38;
qsrcParser.IncrementOperator = 39;
qsrcParser.DecrementOperator = 40;
qsrcParser.DivideSelfOperator = 41;
qsrcParser.MultSelfOperator = 42;
qsrcParser.SetToOperator = 43;
qsrcParser.TemplateStringEndExpression = 44;
qsrcParser.DOUBLEQUOTE = 45;
qsrcParser.SINGLEQUOTE = 46;
qsrcParser.TemplateDoubleSingleQuote = 47;
qsrcParser.MOD = 48;
qsrcParser.WORD = 49;
qsrcParser.STAR = 50;
qsrcParser.DPOINT = 51;
qsrcParser.PLUS = 52;
qsrcParser.MINUS = 53;
qsrcParser.DIVIDE = 54;
qsrcParser.GREATER_THAN = 55;
qsrcParser.GREAT_EQUAL_THAN = 56;
qsrcParser.LOWER_THAN = 57;
qsrcParser.LOWER_EQUAL_THAN = 58;
qsrcParser.NEQ = 59;
qsrcParser.DOLLAR = 60;
qsrcParser.EXCLAMATIONMARK = 61;
qsrcParser.CommentStart = 62;
qsrcParser.AttachedComment = 63;
qsrcParser.Multilinecomment = 64;
qsrcParser.ARRAYBRACKOPEN = 65;
qsrcParser.ARRAYBRACKCLOSE = 66;
qsrcParser.BRACK_OPEN = 67;
qsrcParser.ParenthesisLeft = 68;
qsrcParser.ParenthesisRight = 69;
qsrcParser.Comma = 70;
qsrcParser.Questionmark = 71;
qsrcParser.NEWLINE = 72;
qsrcParser.WHITESPACE = 73;
qsrcParser.LINEBREAK = 74;
qsrcParser.AnythingElse = 75;
qsrcParser.EscapedSingleQuote = 76;
qsrcParser.TemplateStringStartExpression = 77;
qsrcParser.StringAtom = 78;
qsrcParser.EscapedDoubleQuote = 79;
qsrcParser.DQTemplateStringStartExpression = 80;
qsrcParser.DQStringAtom = 81;
qsrcParser.EscapedStringTemplateStart = 82;
qsrcParser.InEscapedStringAtom = 83;
qsrcParser.BRACK_CLOSE = 84;
qsrcParser.MultilineTemplateStringStartExpression = 85;
qsrcParser.AnythingElseInMultiLine = 86;
qsrcParser.InComment = 87;

qsrcParser.RULE_passage = 0;
qsrcParser.RULE_block = 1;
qsrcParser.RULE_statementLine = 2;
qsrcParser.RULE_emptyLine = 3;
qsrcParser.RULE_actBlock = 4;
qsrcParser.RULE_actInline = 5;
qsrcParser.RULE_actPicture = 6;
qsrcParser.RULE_ifInline = 7;
qsrcParser.RULE_ifBlock = 8;
qsrcParser.RULE_elseIfBlock = 9;
qsrcParser.RULE_elseBlock = 10;
qsrcParser.RULE_command = 11;
qsrcParser.RULE_commandLine = 12;
qsrcParser.RULE_commandAppended = 13;
qsrcParser.RULE_addobj = 14;
qsrcParser.RULE_addqst = 15;
qsrcParser.RULE_assignment = 16;
qsrcParser.RULE_assignmentNumber = 17;
qsrcParser.RULE_assignmentString = 18;
qsrcParser.RULE_assignmentoperator = 19;
qsrcParser.RULE_close = 20;
qsrcParser.RULE_comment = 21;
qsrcParser.RULE_commentAttached = 22;
qsrcParser.RULE_copyarr = 23;
qsrcParser.RULE_delact = 24;
qsrcParser.RULE_dynamic = 25;
qsrcParser.RULE_gosub = 26;
qsrcParser.RULE_gt = 27;
qsrcParser.RULE_xgt = 28;
qsrcParser.RULE_inclib = 29;
qsrcParser.RULE_inp = 30;
qsrcParser.RULE_jump = 31;
qsrcParser.RULE_jumpmarker = 32;
qsrcParser.RULE_killvar = 33;
qsrcParser.RULE_msg = 34;
qsrcParser.RULE_multilineBlock = 35;
qsrcParser.RULE_multilineContents = 36;
qsrcParser.RULE_multilineBlockTemplateVar = 37;
qsrcParser.RULE_opengame = 38;
qsrcParser.RULE_play = 39;
qsrcParser.RULE_print = 40;
qsrcParser.RULE_printMain = 41;
qsrcParser.RULE_printNewlineMain = 42;
qsrcParser.RULE_printNewlinepreMain = 43;
qsrcParser.RULE_printEmptyLineMain = 44;
qsrcParser.RULE_printSide = 45;
qsrcParser.RULE_printNewlineSide = 46;
qsrcParser.RULE_printNewlinepreSide = 47;
qsrcParser.RULE_printEmptyLineSide = 48;
qsrcParser.RULE_savegame = 49;
qsrcParser.RULE_syscall = 50;
qsrcParser.RULE_syssetting = 51;
qsrcParser.RULE_view = 52;
qsrcParser.RULE_wait = 53;
qsrcParser.RULE_identifier = 54;
qsrcParser.RULE_identifierNumber = 55;
qsrcParser.RULE_identifierString = 56;
qsrcParser.RULE_arrayIndex = 57;
qsrcParser.RULE_compareOperator = 58;
qsrcParser.RULE_notEqual = 59;
qsrcParser.RULE_value = 60;
qsrcParser.RULE_comparee = 61;
qsrcParser.RULE_sum = 62;
qsrcParser.RULE_term = 63;
qsrcParser.RULE_addOp = 64;
qsrcParser.RULE_logicOp = 65;
qsrcParser.RULE_mulOp = 66;
qsrcParser.RULE_factor = 67;
qsrcParser.RULE_numberLiteralWithOptionalSign = 68;
qsrcParser.RULE_functionWithNumberReturn = 69;
qsrcParser.RULE_invert = 70;
qsrcParser.RULE_numberOperator = 71;
qsrcParser.RULE_functionWithStringReturn = 72;
qsrcParser.RULE_functionArguments = 73;
qsrcParser.RULE_escapedString = 74;
qsrcParser.RULE_escapedStringContent = 75;
qsrcParser.RULE_escapedStringTemplateVar = 76;
qsrcParser.RULE_stringAtom = 77;
qsrcParser.RULE_stringTemplateVar = 78;
qsrcParser.RULE_stringTemplateVarSuffix = 79;
qsrcParser.RULE_doubleQuoteAtom = 80;
qsrcParser.RULE_stringTemplateVarDQ = 81;
qsrcParser.RULE_stringDQTemplateVarSuffix = 82;

class PassageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_passage;
    }

	PassageIdentifier() {
	    return this.getToken(qsrcParser.PassageIdentifier, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	PassageEndMarker() {
	    return this.getToken(qsrcParser.PassageEndMarker, 0);
	};

	EOF() {
	    return this.getToken(qsrcParser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	comment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommentContext);
	    } else {
	        return this.getTypedRuleContext(CommentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPassage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPassage(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPassage(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_block;
    }

	statementLine = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementLineContext);
	    } else {
	        return this.getTypedRuleContext(StatementLineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_statementLine;
    }

	actBlock() {
	    return this.getTypedRuleContext(ActBlockContext,0);
	};

	commandLine() {
	    return this.getTypedRuleContext(CommandLineContext,0);
	};

	ifBlock() {
	    return this.getTypedRuleContext(IfBlockContext,0);
	};

	emptyLine() {
	    return this.getTypedRuleContext(EmptyLineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStatementLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStatementLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStatementLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_emptyLine;
    }

	NEWLINE() {
	    return this.getToken(qsrcParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterEmptyLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitEmptyLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitEmptyLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_actBlock;
    }

	ACT() {
	    return this.getToken(qsrcParser.ACT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	END() {
	    return this.getToken(qsrcParser.END, 0);
	};

	commandAppended() {
	    return this.getTypedRuleContext(CommandAppendedContext,0);
	};

	commentAttached() {
	    return this.getTypedRuleContext(CommentAttachedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterActBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitActBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitActBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActInlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_actInline;
    }

	ACT() {
	    return this.getToken(qsrcParser.ACT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	actPicture() {
	    return this.getTypedRuleContext(ActPictureContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterActInline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitActInline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitActInline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActPictureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_actPicture;
    }

	Comma() {
	    return this.getToken(qsrcParser.Comma, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterActPicture(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitActPicture(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitActPicture(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfInlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_ifInline;
    }

	IF() {
	    return this.getToken(qsrcParser.IF, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(qsrcParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterIfInline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitIfInline(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitIfInline(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_ifBlock;
    }

	IF() {
	    return this.getToken(qsrcParser.IF, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	END() {
	    return this.getToken(qsrcParser.END, 0);
	};

	elseIfBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfBlockContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfBlockContext,i);
	    }
	};

	elseBlock() {
	    return this.getTypedRuleContext(ElseBlockContext,0);
	};

	commandAppended() {
	    return this.getTypedRuleContext(CommandAppendedContext,0);
	};

	commentAttached() {
	    return this.getTypedRuleContext(CommentAttachedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitIfBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitIfBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_elseIfBlock;
    }

	ELSEIF() {
	    return this.getToken(qsrcParser.ELSEIF, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	NEWLINE() {
	    return this.getToken(qsrcParser.NEWLINE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterElseIfBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitElseIfBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitElseIfBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_elseBlock;
    }

	ELSE() {
	    return this.getToken(qsrcParser.ELSE, 0);
	};

	NEWLINE() {
	    return this.getToken(qsrcParser.NEWLINE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterElseBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitElseBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitElseBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_command;
    }

	addobj() {
	    return this.getTypedRuleContext(AddobjContext,0);
	};

	addqst() {
	    return this.getTypedRuleContext(AddqstContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	close() {
	    return this.getTypedRuleContext(CloseContext,0);
	};

	copyarr() {
	    return this.getTypedRuleContext(CopyarrContext,0);
	};

	delact() {
	    return this.getTypedRuleContext(DelactContext,0);
	};

	dynamic() {
	    return this.getTypedRuleContext(DynamicContext,0);
	};

	gosub() {
	    return this.getTypedRuleContext(GosubContext,0);
	};

	gt() {
	    return this.getTypedRuleContext(GtContext,0);
	};

	xgt() {
	    return this.getTypedRuleContext(XgtContext,0);
	};

	inclib() {
	    return this.getTypedRuleContext(InclibContext,0);
	};

	jump() {
	    return this.getTypedRuleContext(JumpContext,0);
	};

	jumpmarker() {
	    return this.getTypedRuleContext(JumpmarkerContext,0);
	};

	killvar() {
	    return this.getTypedRuleContext(KillvarContext,0);
	};

	msg() {
	    return this.getTypedRuleContext(MsgContext,0);
	};

	opengame() {
	    return this.getTypedRuleContext(OpengameContext,0);
	};

	play() {
	    return this.getTypedRuleContext(PlayContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	savegame() {
	    return this.getTypedRuleContext(SavegameContext,0);
	};

	syscall() {
	    return this.getTypedRuleContext(SyscallContext,0);
	};

	syssetting() {
	    return this.getTypedRuleContext(SyssettingContext,0);
	};

	view() {
	    return this.getTypedRuleContext(ViewContext,0);
	};

	wait() {
	    return this.getTypedRuleContext(WaitContext,0);
	};

	commandAppended = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandAppendedContext);
	    } else {
	        return this.getTypedRuleContext(CommandAppendedContext,i);
	    }
	};

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	actInline() {
	    return this.getTypedRuleContext(ActInlineContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	ifInline() {
	    return this.getTypedRuleContext(IfInlineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCommand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandLineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_commandLine;
    }

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	NEWLINE() {
	    return this.getToken(qsrcParser.NEWLINE, 0);
	};

	commandAppended() {
	    return this.getTypedRuleContext(CommandAppendedContext,0);
	};

	commentAttached() {
	    return this.getTypedRuleContext(CommentAttachedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCommandLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCommandLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCommandLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandAppendedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_commandAppended;
    }

	CommandConnect = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.CommandConnect);
	    } else {
	        return this.getToken(qsrcParser.CommandConnect, i);
	    }
	};


	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCommandAppended(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCommandAppended(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCommandAppended(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddobjContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_addobj;
    }

	ADDOBJ() {
	    return this.getToken(qsrcParser.ADDOBJ, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAddobj(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAddobj(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAddobj(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddqstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_addqst;
    }

	ADDQST() {
	    return this.getToken(qsrcParser.ADDQST, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAddqst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAddqst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAddqst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_assignment;
    }

	assignmentNumber() {
	    return this.getTypedRuleContext(AssignmentNumberContext,0);
	};

	assignmentString() {
	    return this.getTypedRuleContext(AssignmentStringContext,0);
	};

	SET() {
	    return this.getToken(qsrcParser.SET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_assignmentNumber;
    }

	identifierNumber() {
	    return this.getTypedRuleContext(IdentifierNumberContext,0);
	};

	assignmentoperator() {
	    return this.getTypedRuleContext(AssignmentoperatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAssignmentNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAssignmentNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAssignmentNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_assignmentString;
    }

	identifierString() {
	    return this.getTypedRuleContext(IdentifierStringContext,0);
	};

	assignmentoperator() {
	    return this.getTypedRuleContext(AssignmentoperatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	multilineBlock() {
	    return this.getTypedRuleContext(MultilineBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAssignmentString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAssignmentString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAssignmentString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentoperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_assignmentoperator;
    }

	EqualOperator() {
	    return this.getToken(qsrcParser.EqualOperator, 0);
	};

	IncrementOperator() {
	    return this.getToken(qsrcParser.IncrementOperator, 0);
	};

	DecrementOperator() {
	    return this.getToken(qsrcParser.DecrementOperator, 0);
	};

	SetToOperator() {
	    return this.getToken(qsrcParser.SetToOperator, 0);
	};

	MultSelfOperator() {
	    return this.getToken(qsrcParser.MultSelfOperator, 0);
	};

	DivideSelfOperator() {
	    return this.getToken(qsrcParser.DivideSelfOperator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAssignmentoperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAssignmentoperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAssignmentoperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CloseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_close;
    }

	CLOSE() {
	    return this.getToken(qsrcParser.CLOSE, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterClose(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitClose(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitClose(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_comment;
    }

	EXCLAMATIONMARK() {
	    return this.getToken(qsrcParser.EXCLAMATIONMARK, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	CommentStart() {
	    return this.getToken(qsrcParser.CommentStart, 0);
	};

	InComment = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.InComment);
	    } else {
	        return this.getToken(qsrcParser.InComment, i);
	    }
	};


	Multilinecomment() {
	    return this.getToken(qsrcParser.Multilinecomment, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentAttachedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_commentAttached;
    }

	AttachedComment() {
	    return this.getToken(qsrcParser.AttachedComment, 0);
	};

	InComment = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.InComment);
	    } else {
	        return this.getToken(qsrcParser.InComment, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCommentAttached(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCommentAttached(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCommentAttached(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CopyarrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_copyarr;
    }

	COPYARR() {
	    return this.getToken(qsrcParser.COPYARR, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCopyarr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCopyarr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCopyarr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DelactContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_delact;
    }

	DELACT() {
	    return this.getToken(qsrcParser.DELACT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterDelact(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitDelact(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitDelact(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DynamicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_dynamic;
    }

	DYNAMIC() {
	    return this.getToken(qsrcParser.DYNAMIC, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterDynamic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitDynamic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitDynamic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GosubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_gosub;
    }

	GOSUB() {
	    return this.getToken(qsrcParser.GOSUB, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterGosub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitGosub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitGosub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_gt;
    }

	GOTO() {
	    return this.getToken(qsrcParser.GOTO, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterGt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitGt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitGt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class XgtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_xgt;
    }

	XGOTO() {
	    return this.getToken(qsrcParser.XGOTO, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterXgt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitXgt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitXgt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InclibContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_inclib;
    }

	INCLIB() {
	    return this.getToken(qsrcParser.INCLIB, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterInclib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitInclib(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitInclib(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_inp;
    }

	INPUT() {
	    return this.getToken(qsrcParser.INPUT, 0);
	};

	sum() {
	    return this.getTypedRuleContext(SumContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterInp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitInp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitInp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JumpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_jump;
    }

	JUMP() {
	    return this.getToken(qsrcParser.JUMP, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterJump(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitJump(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitJump(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class JumpmarkerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_jumpmarker;
    }

	DPOINT() {
	    return this.getToken(qsrcParser.DPOINT, 0);
	};

	WORD() {
	    return this.getToken(qsrcParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterJumpmarker(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitJumpmarker(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitJumpmarker(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KillvarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_killvar;
    }

	KILLVAR() {
	    return this.getToken(qsrcParser.KILLVAR, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	Comma() {
	    return this.getToken(qsrcParser.Comma, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterKillvar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitKillvar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitKillvar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MsgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_msg;
    }

	MSG() {
	    return this.getToken(qsrcParser.MSG, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterMsg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitMsg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitMsg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultilineBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_multilineBlock;
    }

	BRACK_OPEN() {
	    return this.getToken(qsrcParser.BRACK_OPEN, 0);
	};

	BRACK_CLOSE() {
	    return this.getToken(qsrcParser.BRACK_CLOSE, 0);
	};

	multilineContents = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultilineContentsContext);
	    } else {
	        return this.getTypedRuleContext(MultilineContentsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterMultilineBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitMultilineBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitMultilineBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultilineContentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_multilineContents;
    }

	AnythingElseInMultiLine() {
	    return this.getToken(qsrcParser.AnythingElseInMultiLine, 0);
	};

	multilineBlockTemplateVar() {
	    return this.getTypedRuleContext(MultilineBlockTemplateVarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterMultilineContents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitMultilineContents(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitMultilineContents(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultilineBlockTemplateVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_multilineBlockTemplateVar;
    }

	MultilineTemplateStringStartExpression() {
	    return this.getToken(qsrcParser.MultilineTemplateStringStartExpression, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(qsrcParser.TemplateStringEndExpression, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterMultilineBlockTemplateVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitMultilineBlockTemplateVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitMultilineBlockTemplateVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OpengameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_opengame;
    }

	OPENGAME() {
	    return this.getToken(qsrcParser.OPENGAME, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterOpengame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitOpengame(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitOpengame(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PlayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_play;
    }

	PLAY() {
	    return this.getToken(qsrcParser.PLAY, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPlay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPlay(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPlay(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_print;
    }

	printMain() {
	    return this.getTypedRuleContext(PrintMainContext,0);
	};

	printNewlineMain() {
	    return this.getTypedRuleContext(PrintNewlineMainContext,0);
	};

	printNewlinepreMain() {
	    return this.getTypedRuleContext(PrintNewlinepreMainContext,0);
	};

	printEmptyLineMain() {
	    return this.getTypedRuleContext(PrintEmptyLineMainContext,0);
	};

	printSide() {
	    return this.getTypedRuleContext(PrintSideContext,0);
	};

	printNewlineSide() {
	    return this.getTypedRuleContext(PrintNewlineSideContext,0);
	};

	printNewlinepreSide() {
	    return this.getTypedRuleContext(PrintNewlinepreSideContext,0);
	};

	printEmptyLineSide() {
	    return this.getTypedRuleContext(PrintEmptyLineSideContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrint(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintMainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printMain;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	Print() {
	    return this.getToken(qsrcParser.Print, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintMain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintMain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintNewlineMainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printNewlineMain;
    }

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	PrintNewline() {
	    return this.getToken(qsrcParser.PrintNewline, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintNewlineMain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintNewlineMain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintNewlineMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintNewlinepreMainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printNewlinepreMain;
    }

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	PrintNewlinepre() {
	    return this.getToken(qsrcParser.PrintNewlinepre, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintNewlinepreMain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintNewlinepreMain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintNewlinepreMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintEmptyLineMainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printEmptyLineMain;
    }

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	PrintNewline() {
	    return this.getToken(qsrcParser.PrintNewline, 0);
	};

	PrintNewlinepre() {
	    return this.getToken(qsrcParser.PrintNewlinepre, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintEmptyLineMain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintEmptyLineMain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintEmptyLineMain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintSideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printSide;
    }

	Print() {
	    return this.getToken(qsrcParser.Print, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintSide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintSide(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintSide(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintNewlineSideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printNewlineSide;
    }

	PrintNewline() {
	    return this.getToken(qsrcParser.PrintNewline, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintNewlineSide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintNewlineSide(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintNewlineSide(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintNewlinepreSideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printNewlinepreSide;
    }

	PrintNewlinepre() {
	    return this.getToken(qsrcParser.PrintNewlinepre, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintNewlinepreSide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintNewlinepreSide(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintNewlinepreSide(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintEmptyLineSideContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_printEmptyLineSide;
    }

	PrintNewline() {
	    return this.getToken(qsrcParser.PrintNewline, 0);
	};

	PrintNewlinepre() {
	    return this.getToken(qsrcParser.PrintNewlinepre, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterPrintEmptyLineSide(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitPrintEmptyLineSide(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitPrintEmptyLineSide(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SavegameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_savegame;
    }

	SAVEGAME() {
	    return this.getToken(qsrcParser.SAVEGAME, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterSavegame(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitSavegame(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitSavegame(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SyscallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_syscall;
    }

	SYSCALL() {
	    return this.getToken(qsrcParser.SYSCALL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterSyscall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitSyscall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitSyscall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SyssettingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_syssetting;
    }

	SYSSETTING() {
	    return this.getToken(qsrcParser.SYSSETTING, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterSyssetting(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitSyssetting(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitSyssetting(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ViewContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_view;
    }

	VIEW() {
	    return this.getToken(qsrcParser.VIEW, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterView(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitView(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitView(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WaitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_wait;
    }

	WAIT() {
	    return this.getToken(qsrcParser.WAIT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterWait(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitWait(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitWait(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_identifier;
    }

	identifierString() {
	    return this.getTypedRuleContext(IdentifierStringContext,0);
	};

	identifierNumber() {
	    return this.getTypedRuleContext(IdentifierNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_identifierNumber;
    }

	WORD() {
	    return this.getToken(qsrcParser.WORD, 0);
	};

	arrayIndex() {
	    return this.getTypedRuleContext(ArrayIndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterIdentifierNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitIdentifierNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitIdentifierNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_identifierString;
    }

	DOLLAR() {
	    return this.getToken(qsrcParser.DOLLAR, 0);
	};

	WORD() {
	    return this.getToken(qsrcParser.WORD, 0);
	};

	arrayIndex() {
	    return this.getTypedRuleContext(ArrayIndexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterIdentifierString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitIdentifierString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitIdentifierString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayIndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_arrayIndex;
    }

	ARRAYBRACKOPEN() {
	    return this.getToken(qsrcParser.ARRAYBRACKOPEN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	ARRAYBRACKCLOSE() {
	    return this.getToken(qsrcParser.ARRAYBRACKCLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterArrayIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitArrayIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitArrayIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompareOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_compareOperator;
    }

	GREAT_EQUAL_THAN() {
	    return this.getToken(qsrcParser.GREAT_EQUAL_THAN, 0);
	};

	GREATER_THAN() {
	    return this.getToken(qsrcParser.GREATER_THAN, 0);
	};

	LOWER_EQUAL_THAN() {
	    return this.getToken(qsrcParser.LOWER_EQUAL_THAN, 0);
	};

	LOWER_THAN() {
	    return this.getToken(qsrcParser.LOWER_THAN, 0);
	};

	EqualOperator() {
	    return this.getToken(qsrcParser.EqualOperator, 0);
	};

	notEqual() {
	    return this.getTypedRuleContext(NotEqualContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterCompareOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitCompareOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitCompareOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NotEqualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_notEqual;
    }

	NEQ() {
	    return this.getToken(qsrcParser.NEQ, 0);
	};

	EXCLAMATIONMARK() {
	    return this.getToken(qsrcParser.EXCLAMATIONMARK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterNotEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitNotEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitNotEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_value;
    }

	comparee() {
	    return this.getTypedRuleContext(CompareeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	logicOp() {
	    return this.getTypedRuleContext(LogicOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CompareeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_comparee;
    }

	sum() {
	    return this.getTypedRuleContext(SumContext,0);
	};

	comparee() {
	    return this.getTypedRuleContext(CompareeContext,0);
	};

	compareOperator() {
	    return this.getTypedRuleContext(CompareOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterComparee(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitComparee(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitComparee(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_sum;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	sum() {
	    return this.getTypedRuleContext(SumContext,0);
	};

	addOp() {
	    return this.getTypedRuleContext(AddOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterSum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitSum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitSum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_term;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	mulOp() {
	    return this.getTypedRuleContext(MulOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AddOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_addOp;
    }

	PLUS() {
	    return this.getToken(qsrcParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(qsrcParser.MINUS, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterAddOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitAddOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitAddOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_logicOp;
    }

	AND() {
	    return this.getToken(qsrcParser.AND, 0);
	};

	OR() {
	    return this.getToken(qsrcParser.OR, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterLogicOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitLogicOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitLogicOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MulOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_mulOp;
    }

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	MOD() {
	    return this.getToken(qsrcParser.MOD, 0);
	};

	DIVIDE() {
	    return this.getToken(qsrcParser.DIVIDE, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterMulOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitMulOp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitMulOp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_factor;
    }

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	numberLiteralWithOptionalSign() {
	    return this.getTypedRuleContext(NumberLiteralWithOptionalSignContext,0);
	};

	identifierNumber() {
	    return this.getTypedRuleContext(IdentifierNumberContext,0);
	};

	invert() {
	    return this.getTypedRuleContext(InvertContext,0);
	};

	functionWithNumberReturn() {
	    return this.getTypedRuleContext(FunctionWithNumberReturnContext,0);
	};

	escapedString() {
	    return this.getTypedRuleContext(EscapedStringContext,0);
	};

	identifierString() {
	    return this.getTypedRuleContext(IdentifierStringContext,0);
	};

	functionWithStringReturn() {
	    return this.getTypedRuleContext(FunctionWithStringReturnContext,0);
	};

	multilineBlock() {
	    return this.getTypedRuleContext(MultilineBlockContext,0);
	};

	MINUS() {
	    return this.getToken(qsrcParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberLiteralWithOptionalSignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_numberLiteralWithOptionalSign;
    }

	NumberLiteral() {
	    return this.getToken(qsrcParser.NumberLiteral, 0);
	};

	PLUS() {
	    return this.getToken(qsrcParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(qsrcParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterNumberLiteralWithOptionalSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitNumberLiteralWithOptionalSign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitNumberLiteralWithOptionalSign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionWithNumberReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_functionWithNumberReturn;
    }

	WORD() {
	    return this.getToken(qsrcParser.WORD, 0);
	};

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterFunctionWithNumberReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitFunctionWithNumberReturn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitFunctionWithNumberReturn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InvertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_invert;
    }

	INVERT() {
	    return this.getToken(qsrcParser.INVERT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterInvert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitInvert(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitInvert(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_numberOperator;
    }

	PLUS() {
	    return this.getToken(qsrcParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(qsrcParser.MINUS, 0);
	};

	STAR() {
	    return this.getToken(qsrcParser.STAR, 0);
	};

	MOD() {
	    return this.getToken(qsrcParser.MOD, 0);
	};

	DIVIDE() {
	    return this.getToken(qsrcParser.DIVIDE, 0);
	};

	AND() {
	    return this.getToken(qsrcParser.AND, 0);
	};

	OR() {
	    return this.getToken(qsrcParser.OR, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.NEWLINE);
	    } else {
	        return this.getToken(qsrcParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterNumberOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitNumberOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitNumberOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionWithStringReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_functionWithStringReturn;
    }

	DOLLAR() {
	    return this.getToken(qsrcParser.DOLLAR, 0);
	};

	WORD() {
	    return this.getToken(qsrcParser.WORD, 0);
	};

	ParenthesisLeft() {
	    return this.getToken(qsrcParser.ParenthesisLeft, 0);
	};

	functionArguments() {
	    return this.getTypedRuleContext(FunctionArgumentsContext,0);
	};

	ParenthesisRight() {
	    return this.getToken(qsrcParser.ParenthesisRight, 0);
	};

	inp() {
	    return this.getTypedRuleContext(InpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterFunctionWithStringReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitFunctionWithStringReturn(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitFunctionWithStringReturn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_functionArguments;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.Comma);
	    } else {
	        return this.getToken(qsrcParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterFunctionArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitFunctionArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitFunctionArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscapedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_escapedString;
    }

	TemplateDoubleSingleQuote = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.TemplateDoubleSingleQuote);
	    } else {
	        return this.getToken(qsrcParser.TemplateDoubleSingleQuote, i);
	    }
	};


	escapedStringContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EscapedStringContentContext);
	    } else {
	        return this.getTypedRuleContext(EscapedStringContentContext,i);
	    }
	};

	SINGLEQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.SINGLEQUOTE);
	    } else {
	        return this.getToken(qsrcParser.SINGLEQUOTE, i);
	    }
	};


	stringAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringAtomContext);
	    } else {
	        return this.getTypedRuleContext(StringAtomContext,i);
	    }
	};

	stringTemplateVarSuffix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringTemplateVarSuffixContext);
	    } else {
	        return this.getTypedRuleContext(StringTemplateVarSuffixContext,i);
	    }
	};

	DOUBLEQUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.DOUBLEQUOTE);
	    } else {
	        return this.getToken(qsrcParser.DOUBLEQUOTE, i);
	    }
	};


	doubleQuoteAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DoubleQuoteAtomContext);
	    } else {
	        return this.getTypedRuleContext(DoubleQuoteAtomContext,i);
	    }
	};

	stringDQTemplateVarSuffix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringDQTemplateVarSuffixContext);
	    } else {
	        return this.getTypedRuleContext(StringDQTemplateVarSuffixContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterEscapedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitEscapedString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitEscapedString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscapedStringContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_escapedStringContent;
    }

	InEscapedStringAtom() {
	    return this.getToken(qsrcParser.InEscapedStringAtom, 0);
	};

	escapedStringTemplateVar() {
	    return this.getTypedRuleContext(EscapedStringTemplateVarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterEscapedStringContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitEscapedStringContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitEscapedStringContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EscapedStringTemplateVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_escapedStringTemplateVar;
    }

	EscapedStringTemplateStart() {
	    return this.getToken(qsrcParser.EscapedStringTemplateStart, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(qsrcParser.TemplateStringEndExpression, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterEscapedStringTemplateVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitEscapedStringTemplateVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitEscapedStringTemplateVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_stringAtom;
    }

	StringAtom() {
	    return this.getToken(qsrcParser.StringAtom, 0);
	};

	EscapedSingleQuote() {
	    return this.getToken(qsrcParser.EscapedSingleQuote, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStringAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStringAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStringAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringTemplateVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_stringTemplateVar;
    }

	TemplateStringStartExpression() {
	    return this.getToken(qsrcParser.TemplateStringStartExpression, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(qsrcParser.TemplateStringEndExpression, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStringTemplateVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStringTemplateVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStringTemplateVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringTemplateVarSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_stringTemplateVarSuffix;
    }

	stringTemplateVar() {
	    return this.getTypedRuleContext(StringTemplateVarContext,0);
	};

	stringAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringAtomContext);
	    } else {
	        return this.getTypedRuleContext(StringAtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStringTemplateVarSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStringTemplateVarSuffix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStringTemplateVarSuffix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoubleQuoteAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_doubleQuoteAtom;
    }

	DQStringAtom() {
	    return this.getToken(qsrcParser.DQStringAtom, 0);
	};

	EscapedDoubleQuote() {
	    return this.getToken(qsrcParser.EscapedDoubleQuote, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterDoubleQuoteAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitDoubleQuoteAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitDoubleQuoteAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringTemplateVarDQContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_stringTemplateVarDQ;
    }

	DQTemplateStringStartExpression() {
	    return this.getToken(qsrcParser.DQTemplateStringStartExpression, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	TemplateStringEndExpression() {
	    return this.getToken(qsrcParser.TemplateStringEndExpression, 0);
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStringTemplateVarDQ(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStringTemplateVarDQ(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStringTemplateVarDQ(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringDQTemplateVarSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = qsrcParser.RULE_stringDQTemplateVarSuffix;
    }

	stringTemplateVarDQ() {
	    return this.getTypedRuleContext(StringTemplateVarDQContext,0);
	};

	doubleQuoteAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DoubleQuoteAtomContext);
	    } else {
	        return this.getTypedRuleContext(DoubleQuoteAtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.enterStringDQTemplateVarSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof qsrcParserListener ) {
	        listener.exitStringDQTemplateVarSuffix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof qsrcParserVisitor ) {
	        return visitor.visitStringDQTemplateVarSuffix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




qsrcParser.PassageContext = PassageContext; 
qsrcParser.BlockContext = BlockContext; 
qsrcParser.StatementLineContext = StatementLineContext; 
qsrcParser.EmptyLineContext = EmptyLineContext; 
qsrcParser.ActBlockContext = ActBlockContext; 
qsrcParser.ActInlineContext = ActInlineContext; 
qsrcParser.ActPictureContext = ActPictureContext; 
qsrcParser.IfInlineContext = IfInlineContext; 
qsrcParser.IfBlockContext = IfBlockContext; 
qsrcParser.ElseIfBlockContext = ElseIfBlockContext; 
qsrcParser.ElseBlockContext = ElseBlockContext; 
qsrcParser.CommandContext = CommandContext; 
qsrcParser.CommandLineContext = CommandLineContext; 
qsrcParser.CommandAppendedContext = CommandAppendedContext; 
qsrcParser.AddobjContext = AddobjContext; 
qsrcParser.AddqstContext = AddqstContext; 
qsrcParser.AssignmentContext = AssignmentContext; 
qsrcParser.AssignmentNumberContext = AssignmentNumberContext; 
qsrcParser.AssignmentStringContext = AssignmentStringContext; 
qsrcParser.AssignmentoperatorContext = AssignmentoperatorContext; 
qsrcParser.CloseContext = CloseContext; 
qsrcParser.CommentContext = CommentContext; 
qsrcParser.CommentAttachedContext = CommentAttachedContext; 
qsrcParser.CopyarrContext = CopyarrContext; 
qsrcParser.DelactContext = DelactContext; 
qsrcParser.DynamicContext = DynamicContext; 
qsrcParser.GosubContext = GosubContext; 
qsrcParser.GtContext = GtContext; 
qsrcParser.XgtContext = XgtContext; 
qsrcParser.InclibContext = InclibContext; 
qsrcParser.InpContext = InpContext; 
qsrcParser.JumpContext = JumpContext; 
qsrcParser.JumpmarkerContext = JumpmarkerContext; 
qsrcParser.KillvarContext = KillvarContext; 
qsrcParser.MsgContext = MsgContext; 
qsrcParser.MultilineBlockContext = MultilineBlockContext; 
qsrcParser.MultilineContentsContext = MultilineContentsContext; 
qsrcParser.MultilineBlockTemplateVarContext = MultilineBlockTemplateVarContext; 
qsrcParser.OpengameContext = OpengameContext; 
qsrcParser.PlayContext = PlayContext; 
qsrcParser.PrintContext = PrintContext; 
qsrcParser.PrintMainContext = PrintMainContext; 
qsrcParser.PrintNewlineMainContext = PrintNewlineMainContext; 
qsrcParser.PrintNewlinepreMainContext = PrintNewlinepreMainContext; 
qsrcParser.PrintEmptyLineMainContext = PrintEmptyLineMainContext; 
qsrcParser.PrintSideContext = PrintSideContext; 
qsrcParser.PrintNewlineSideContext = PrintNewlineSideContext; 
qsrcParser.PrintNewlinepreSideContext = PrintNewlinepreSideContext; 
qsrcParser.PrintEmptyLineSideContext = PrintEmptyLineSideContext; 
qsrcParser.SavegameContext = SavegameContext; 
qsrcParser.SyscallContext = SyscallContext; 
qsrcParser.SyssettingContext = SyssettingContext; 
qsrcParser.ViewContext = ViewContext; 
qsrcParser.WaitContext = WaitContext; 
qsrcParser.IdentifierContext = IdentifierContext; 
qsrcParser.IdentifierNumberContext = IdentifierNumberContext; 
qsrcParser.IdentifierStringContext = IdentifierStringContext; 
qsrcParser.ArrayIndexContext = ArrayIndexContext; 
qsrcParser.CompareOperatorContext = CompareOperatorContext; 
qsrcParser.NotEqualContext = NotEqualContext; 
qsrcParser.ValueContext = ValueContext; 
qsrcParser.CompareeContext = CompareeContext; 
qsrcParser.SumContext = SumContext; 
qsrcParser.TermContext = TermContext; 
qsrcParser.AddOpContext = AddOpContext; 
qsrcParser.LogicOpContext = LogicOpContext; 
qsrcParser.MulOpContext = MulOpContext; 
qsrcParser.FactorContext = FactorContext; 
qsrcParser.NumberLiteralWithOptionalSignContext = NumberLiteralWithOptionalSignContext; 
qsrcParser.FunctionWithNumberReturnContext = FunctionWithNumberReturnContext; 
qsrcParser.InvertContext = InvertContext; 
qsrcParser.NumberOperatorContext = NumberOperatorContext; 
qsrcParser.FunctionWithStringReturnContext = FunctionWithStringReturnContext; 
qsrcParser.FunctionArgumentsContext = FunctionArgumentsContext; 
qsrcParser.EscapedStringContext = EscapedStringContext; 
qsrcParser.EscapedStringContentContext = EscapedStringContentContext; 
qsrcParser.EscapedStringTemplateVarContext = EscapedStringTemplateVarContext; 
qsrcParser.StringAtomContext = StringAtomContext; 
qsrcParser.StringTemplateVarContext = StringTemplateVarContext; 
qsrcParser.StringTemplateVarSuffixContext = StringTemplateVarSuffixContext; 
qsrcParser.DoubleQuoteAtomContext = DoubleQuoteAtomContext; 
qsrcParser.StringTemplateVarDQContext = StringTemplateVarDQContext; 
qsrcParser.StringDQTemplateVarSuffixContext = StringDQTemplateVarSuffixContext; 
