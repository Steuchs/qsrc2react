// Generated from qsrcParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import qsrcParserListener from './qsrcParserListener.js';
import qsrcParserVisitor from './qsrcParserVisitor.js';

const serializedATN = [4,1,83,696,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,1,
0,1,0,1,0,1,0,1,0,5,0,162,8,0,10,0,12,0,165,9,0,1,0,1,0,1,1,5,1,170,8,1,
10,1,12,1,173,9,1,1,2,1,2,1,2,1,2,3,2,179,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,3,4,190,8,4,1,4,3,4,193,8,4,1,4,1,4,1,5,1,5,1,5,3,5,200,8,5,1,
5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,214,8,7,1,8,1,8,1,8,1,
8,1,8,1,8,5,8,222,8,8,10,8,12,8,225,9,8,1,8,3,8,228,8,8,1,8,1,8,3,8,232,
8,8,1,8,3,8,235,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,273,8,11,1,11,5,11,
276,8,11,10,11,12,11,279,9,11,1,11,1,11,1,11,3,11,284,8,11,1,12,1,12,3,12,
288,8,12,1,12,3,12,291,8,12,1,12,1,12,1,13,1,13,3,13,297,8,13,1,13,1,13,
1,14,1,14,1,14,1,15,3,15,305,8,15,1,15,1,15,3,15,309,8,15,1,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,3,17,319,8,17,1,18,1,18,1,19,1,19,5,19,325,8,19,
10,19,12,19,328,9,19,1,19,1,19,5,19,332,8,19,10,19,12,19,335,9,19,1,19,3,
19,338,8,19,1,20,1,20,5,20,342,8,20,10,20,12,20,345,9,20,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,3,21,354,8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,3,23,366,8,23,1,24,1,24,1,24,1,25,1,25,1,25,1,26,1,26,1,26,1,27,
1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,30,1,30,3,30,390,8,30,
3,30,392,8,30,1,31,1,31,1,31,1,32,1,32,5,32,399,8,32,10,32,12,32,402,9,32,
1,32,1,32,1,33,1,33,3,33,408,8,33,1,34,1,34,1,34,1,34,1,35,1,35,3,35,416,
8,35,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,429,8,37,
1,38,1,38,1,38,1,38,3,38,435,8,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,
1,41,1,41,1,41,1,42,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,44,1,45,1,45,1,
46,1,46,1,46,1,47,1,47,1,48,1,48,1,48,1,49,1,49,3,49,469,8,49,1,50,1,50,
1,50,1,51,1,51,3,51,476,8,51,1,52,1,52,3,52,480,8,52,1,53,1,53,1,53,3,53,
485,8,53,1,54,1,54,1,54,1,54,1,54,1,54,3,54,493,8,54,1,55,1,55,1,55,1,55,
1,55,1,55,3,55,501,8,55,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,5,57,
512,8,57,10,57,12,57,515,9,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,5,58,524,
8,58,10,58,12,58,527,9,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,5,59,536,8,
59,10,59,12,59,539,9,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,5,60,548,8,60,
10,60,12,60,551,9,60,1,61,5,61,554,8,61,10,61,12,61,557,9,61,1,61,1,61,1,
62,5,62,562,8,62,10,62,12,62,565,9,62,1,62,1,62,1,63,5,63,570,8,63,10,63,
12,63,573,9,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
64,1,64,1,64,1,64,1,64,1,64,1,64,3,64,593,8,64,1,65,3,65,596,8,65,1,65,1,
65,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,68,5,68,608,8,68,10,68,12,68,611,
9,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,3,69,622,8,69,1,70,1,70,
1,70,5,70,627,8,70,10,70,12,70,630,9,70,1,71,1,71,5,71,634,8,71,10,71,12,
71,637,9,71,1,71,1,71,1,71,5,71,642,8,71,10,71,12,71,645,9,71,1,71,5,71,
648,8,71,10,71,12,71,651,9,71,1,71,1,71,1,71,5,71,656,8,71,10,71,12,71,659,
9,71,1,71,5,71,662,8,71,10,71,12,71,665,9,71,1,71,3,71,668,8,71,1,72,1,72,
1,73,1,73,1,73,1,73,1,74,1,74,5,74,678,8,74,10,74,12,74,681,9,74,1,75,1,
75,1,76,1,76,1,76,1,76,1,77,1,77,5,77,691,8,77,10,77,12,77,694,9,77,1,77,
0,4,114,116,118,120,78,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,
124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,0,10,1,0,
35,40,1,0,69,69,1,0,19,20,2,0,56,56,58,58,1,0,49,50,1,0,30,31,3,0,45,45,
47,47,51,51,4,0,30,31,45,45,47,47,49,51,2,0,73,73,75,75,2,0,76,76,78,78,
720,0,156,1,0,0,0,2,171,1,0,0,0,4,178,1,0,0,0,6,180,1,0,0,0,8,182,1,0,0,
0,10,196,1,0,0,0,12,204,1,0,0,0,14,207,1,0,0,0,16,215,1,0,0,0,18,238,1,0,
0,0,20,244,1,0,0,0,22,283,1,0,0,0,24,285,1,0,0,0,26,294,1,0,0,0,28,300,1,
0,0,0,30,304,1,0,0,0,32,310,1,0,0,0,34,314,1,0,0,0,36,320,1,0,0,0,38,337,
1,0,0,0,40,339,1,0,0,0,42,353,1,0,0,0,44,355,1,0,0,0,46,365,1,0,0,0,48,367,
1,0,0,0,50,370,1,0,0,0,52,373,1,0,0,0,54,376,1,0,0,0,56,379,1,0,0,0,58,382,
1,0,0,0,60,385,1,0,0,0,62,393,1,0,0,0,64,396,1,0,0,0,66,407,1,0,0,0,68,409,
1,0,0,0,70,413,1,0,0,0,72,417,1,0,0,0,74,428,1,0,0,0,76,434,1,0,0,0,78,436,
1,0,0,0,80,440,1,0,0,0,82,444,1,0,0,0,84,447,1,0,0,0,86,450,1,0,0,0,88,453,
1,0,0,0,90,456,1,0,0,0,92,458,1,0,0,0,94,461,1,0,0,0,96,463,1,0,0,0,98,466,
1,0,0,0,100,470,1,0,0,0,102,475,1,0,0,0,104,477,1,0,0,0,106,481,1,0,0,0,
108,492,1,0,0,0,110,500,1,0,0,0,112,502,1,0,0,0,114,504,1,0,0,0,116,516,
1,0,0,0,118,528,1,0,0,0,120,540,1,0,0,0,122,555,1,0,0,0,124,563,1,0,0,0,
126,571,1,0,0,0,128,592,1,0,0,0,130,595,1,0,0,0,132,599,1,0,0,0,134,604,
1,0,0,0,136,609,1,0,0,0,138,621,1,0,0,0,140,623,1,0,0,0,142,667,1,0,0,0,
144,669,1,0,0,0,146,671,1,0,0,0,148,675,1,0,0,0,150,682,1,0,0,0,152,684,
1,0,0,0,154,688,1,0,0,0,156,157,5,1,0,0,157,158,3,2,1,0,158,163,5,2,0,0,
159,162,5,69,0,0,160,162,3,38,19,0,161,159,1,0,0,0,161,160,1,0,0,0,162,165,
1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,
166,167,5,0,0,1,167,1,1,0,0,0,168,170,3,4,2,0,169,168,1,0,0,0,170,173,1,
0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,3,1,0,0,0,173,171,1,0,0,0,174,
179,3,8,4,0,175,179,3,24,12,0,176,179,3,16,8,0,177,179,3,6,3,0,178,174,1,
0,0,0,178,175,1,0,0,0,178,176,1,0,0,0,178,177,1,0,0,0,179,5,1,0,0,0,180,
181,5,69,0,0,181,7,1,0,0,0,182,183,5,24,0,0,183,184,3,114,57,0,184,185,5,
48,0,0,185,186,5,69,0,0,186,187,3,2,1,0,187,189,5,28,0,0,188,190,3,26,13,
0,189,188,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,193,3,40,20,0,192,
191,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,195,5,69,0,0,195,9,1,0,0,
0,196,197,5,24,0,0,197,199,3,114,57,0,198,200,3,12,6,0,199,198,1,0,0,0,199,
200,1,0,0,0,200,201,1,0,0,0,201,202,5,48,0,0,202,203,3,22,11,0,203,11,1,
0,0,0,204,205,5,67,0,0,205,206,3,114,57,0,206,13,1,0,0,0,207,208,5,25,0,
0,208,209,3,114,57,0,209,210,5,48,0,0,210,213,3,22,11,0,211,212,5,27,0,0,
212,214,3,22,11,0,213,211,1,0,0,0,213,214,1,0,0,0,214,15,1,0,0,0,215,216,
5,25,0,0,216,217,3,114,57,0,217,218,5,48,0,0,218,219,5,69,0,0,219,223,3,
2,1,0,220,222,3,18,9,0,221,220,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,
224,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,226,228,3,20,10,0,227,226,1,
0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,231,5,28,0,0,230,232,3,26,13,0,
231,230,1,0,0,0,231,232,1,0,0,0,232,234,1,0,0,0,233,235,3,40,20,0,234,233,
1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,69,0,0,237,17,1,0,0,0,
238,239,5,26,0,0,239,240,3,114,57,0,240,241,5,48,0,0,241,242,5,69,0,0,242,
243,3,2,1,0,243,19,1,0,0,0,244,245,5,27,0,0,245,246,5,69,0,0,246,247,3,2,
1,0,247,21,1,0,0,0,248,249,5,65,0,0,249,250,3,22,11,0,250,251,5,66,0,0,251,
273,1,0,0,0,252,273,3,28,14,0,253,273,3,30,15,0,254,273,3,42,21,0,255,273,
3,44,22,0,256,273,3,46,23,0,257,273,3,48,24,0,258,273,3,50,25,0,259,273,
3,52,26,0,260,273,3,56,28,0,261,273,3,58,29,0,262,273,3,60,30,0,263,273,
3,62,31,0,264,273,3,70,35,0,265,273,3,72,36,0,266,273,3,74,37,0,267,273,
3,92,46,0,268,273,3,94,47,0,269,273,3,96,48,0,270,273,3,98,49,0,271,273,
3,100,50,0,272,248,1,0,0,0,272,252,1,0,0,0,272,253,1,0,0,0,272,254,1,0,0,
0,272,255,1,0,0,0,272,256,1,0,0,0,272,257,1,0,0,0,272,258,1,0,0,0,272,259,
1,0,0,0,272,260,1,0,0,0,272,261,1,0,0,0,272,262,1,0,0,0,272,263,1,0,0,0,
272,264,1,0,0,0,272,265,1,0,0,0,272,266,1,0,0,0,272,267,1,0,0,0,272,268,
1,0,0,0,272,269,1,0,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,277,1,0,0,0,
274,276,3,26,13,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,
1,0,0,0,278,284,1,0,0,0,279,277,1,0,0,0,280,284,3,10,5,0,281,284,3,38,19,
0,282,284,3,14,7,0,283,272,1,0,0,0,283,280,1,0,0,0,283,281,1,0,0,0,283,282,
1,0,0,0,284,23,1,0,0,0,285,287,3,22,11,0,286,288,3,26,13,0,287,286,1,0,0,
0,287,288,1,0,0,0,288,290,1,0,0,0,289,291,3,40,20,0,290,289,1,0,0,0,290,
291,1,0,0,0,291,292,1,0,0,0,292,293,5,69,0,0,293,25,1,0,0,0,294,296,5,32,
0,0,295,297,5,32,0,0,296,295,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,
299,3,22,11,0,299,27,1,0,0,0,300,301,5,5,0,0,301,302,3,114,57,0,302,29,1,
0,0,0,303,305,5,34,0,0,304,303,1,0,0,0,304,305,1,0,0,0,305,308,1,0,0,0,306,
309,3,32,16,0,307,309,3,34,17,0,308,306,1,0,0,0,308,307,1,0,0,0,309,31,1,
0,0,0,310,311,3,104,52,0,311,312,3,36,18,0,312,313,3,114,57,0,313,33,1,0,
0,0,314,315,3,106,53,0,315,318,3,36,18,0,316,319,3,114,57,0,317,319,3,64,
32,0,318,316,1,0,0,0,318,317,1,0,0,0,319,35,1,0,0,0,320,321,7,0,0,0,321,
37,1,0,0,0,322,326,5,58,0,0,323,325,8,1,0,0,324,323,1,0,0,0,325,328,1,0,
0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,338,1,0,0,0,328,326,1,0,0,0,329,
333,5,59,0,0,330,332,5,83,0,0,331,330,1,0,0,0,332,335,1,0,0,0,333,331,1,
0,0,0,333,334,1,0,0,0,334,338,1,0,0,0,335,333,1,0,0,0,336,338,5,61,0,0,337,
322,1,0,0,0,337,329,1,0,0,0,337,336,1,0,0,0,338,39,1,0,0,0,339,343,5,60,
0,0,340,342,5,83,0,0,341,340,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,
344,1,0,0,0,344,41,1,0,0,0,345,343,1,0,0,0,346,347,5,6,0,0,347,354,3,140,
70,0,348,349,5,6,0,0,349,350,5,65,0,0,350,351,3,140,70,0,351,352,5,66,0,
0,352,354,1,0,0,0,353,346,1,0,0,0,353,348,1,0,0,0,354,43,1,0,0,0,355,356,
5,7,0,0,356,357,3,114,57,0,357,45,1,0,0,0,358,359,5,8,0,0,359,366,3,140,
70,0,360,361,5,8,0,0,361,362,5,65,0,0,362,363,3,140,70,0,363,364,5,66,0,
0,364,366,1,0,0,0,365,358,1,0,0,0,365,360,1,0,0,0,366,47,1,0,0,0,367,368,
5,9,0,0,368,369,3,140,70,0,369,49,1,0,0,0,370,371,5,10,0,0,371,372,3,140,
70,0,372,51,1,0,0,0,373,374,5,11,0,0,374,375,3,140,70,0,375,53,1,0,0,0,376,
377,5,12,0,0,377,378,3,118,59,0,378,55,1,0,0,0,379,380,5,13,0,0,380,381,
3,114,57,0,381,57,1,0,0,0,382,383,5,48,0,0,383,384,5,46,0,0,384,59,1,0,0,
0,385,391,5,14,0,0,386,389,3,114,57,0,387,388,5,67,0,0,388,390,3,114,57,
0,389,387,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,0,391,386,1,0,0,0,391,392,
1,0,0,0,392,61,1,0,0,0,393,394,5,15,0,0,394,395,3,114,57,0,395,63,1,0,0,
0,396,400,5,64,0,0,397,399,3,66,33,0,398,397,1,0,0,0,399,402,1,0,0,0,400,
398,1,0,0,0,400,401,1,0,0,0,401,403,1,0,0,0,402,400,1,0,0,0,403,404,5,80,
0,0,404,65,1,0,0,0,405,408,5,82,0,0,406,408,3,68,34,0,407,405,1,0,0,0,407,
406,1,0,0,0,408,67,1,0,0,0,409,410,5,81,0,0,410,411,3,114,57,0,411,412,5,
41,0,0,412,69,1,0,0,0,413,415,5,16,0,0,414,416,3,114,57,0,415,414,1,0,0,
0,415,416,1,0,0,0,416,71,1,0,0,0,417,418,5,17,0,0,418,419,3,140,70,0,419,
73,1,0,0,0,420,429,3,76,38,0,421,429,3,78,39,0,422,429,3,80,40,0,423,429,
3,82,41,0,424,429,3,84,42,0,425,429,3,86,43,0,426,429,3,88,44,0,427,429,
3,90,45,0,428,420,1,0,0,0,428,421,1,0,0,0,428,422,1,0,0,0,428,423,1,0,0,
0,428,424,1,0,0,0,428,425,1,0,0,0,428,426,1,0,0,0,428,427,1,0,0,0,429,75,
1,0,0,0,430,435,3,114,57,0,431,432,5,47,0,0,432,433,5,18,0,0,433,435,3,114,
57,0,434,430,1,0,0,0,434,431,1,0,0,0,435,77,1,0,0,0,436,437,5,47,0,0,437,
438,5,19,0,0,438,439,3,114,57,0,439,79,1,0,0,0,440,441,5,47,0,0,441,442,
5,20,0,0,442,443,3,114,57,0,443,81,1,0,0,0,444,445,5,47,0,0,445,446,7,2,
0,0,446,83,1,0,0,0,447,448,5,18,0,0,448,449,3,114,57,0,449,85,1,0,0,0,450,
451,5,19,0,0,451,452,3,114,57,0,452,87,1,0,0,0,453,454,5,20,0,0,454,455,
3,114,57,0,455,89,1,0,0,0,456,457,7,2,0,0,457,91,1,0,0,0,458,459,5,21,0,
0,459,460,3,114,57,0,460,93,1,0,0,0,461,462,5,3,0,0,462,95,1,0,0,0,463,464,
5,4,0,0,464,465,3,114,57,0,465,97,1,0,0,0,466,468,5,22,0,0,467,469,3,114,
57,0,468,467,1,0,0,0,468,469,1,0,0,0,469,99,1,0,0,0,470,471,5,23,0,0,471,
472,3,114,57,0,472,101,1,0,0,0,473,476,3,106,53,0,474,476,3,104,52,0,475,
473,1,0,0,0,475,474,1,0,0,0,476,103,1,0,0,0,477,479,5,46,0,0,478,480,3,108,
54,0,479,478,1,0,0,0,479,480,1,0,0,0,480,105,1,0,0,0,481,482,5,57,0,0,482,
484,5,46,0,0,483,485,3,108,54,0,484,483,1,0,0,0,484,485,1,0,0,0,485,107,
1,0,0,0,486,487,5,62,0,0,487,488,3,114,57,0,488,489,5,63,0,0,489,493,1,0,
0,0,490,491,5,62,0,0,491,493,5,63,0,0,492,486,1,0,0,0,492,490,1,0,0,0,493,
109,1,0,0,0,494,501,5,53,0,0,495,501,5,52,0,0,496,501,5,55,0,0,497,501,5,
54,0,0,498,501,5,35,0,0,499,501,3,112,56,0,500,494,1,0,0,0,500,495,1,0,0,
0,500,496,1,0,0,0,500,497,1,0,0,0,500,498,1,0,0,0,500,499,1,0,0,0,501,111,
1,0,0,0,502,503,7,3,0,0,503,113,1,0,0,0,504,505,6,57,-1,0,505,506,3,116,
58,0,506,513,1,0,0,0,507,508,10,2,0,0,508,509,3,124,62,0,509,510,3,116,58,
0,510,512,1,0,0,0,511,507,1,0,0,0,512,515,1,0,0,0,513,511,1,0,0,0,513,514,
1,0,0,0,514,115,1,0,0,0,515,513,1,0,0,0,516,517,6,58,-1,0,517,518,3,118,
59,0,518,525,1,0,0,0,519,520,10,2,0,0,520,521,3,110,55,0,521,522,3,118,59,
0,522,524,1,0,0,0,523,519,1,0,0,0,524,527,1,0,0,0,525,523,1,0,0,0,525,526,
1,0,0,0,526,117,1,0,0,0,527,525,1,0,0,0,528,529,6,59,-1,0,529,530,3,120,
60,0,530,537,1,0,0,0,531,532,10,2,0,0,532,533,3,122,61,0,533,534,3,120,60,
0,534,536,1,0,0,0,535,531,1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,538,
1,0,0,0,538,119,1,0,0,0,539,537,1,0,0,0,540,541,6,60,-1,0,541,542,3,128,
64,0,542,549,1,0,0,0,543,544,10,2,0,0,544,545,3,126,63,0,545,546,3,128,64,
0,546,548,1,0,0,0,547,543,1,0,0,0,548,551,1,0,0,0,549,547,1,0,0,0,549,550,
1,0,0,0,550,121,1,0,0,0,551,549,1,0,0,0,552,554,5,69,0,0,553,552,1,0,0,0,
554,557,1,0,0,0,555,553,1,0,0,0,555,556,1,0,0,0,556,558,1,0,0,0,557,555,
1,0,0,0,558,559,7,4,0,0,559,123,1,0,0,0,560,562,5,69,0,0,561,560,1,0,0,0,
562,565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,564,566,1,0,0,0,565,563,
1,0,0,0,566,567,7,5,0,0,567,125,1,0,0,0,568,570,5,69,0,0,569,568,1,0,0,0,
570,573,1,0,0,0,571,569,1,0,0,0,571,572,1,0,0,0,572,574,1,0,0,0,573,571,
1,0,0,0,574,575,7,6,0,0,575,127,1,0,0,0,576,577,5,65,0,0,577,578,3,114,57,
0,578,579,5,66,0,0,579,593,1,0,0,0,580,593,3,130,65,0,581,593,3,104,52,0,
582,583,3,134,67,0,583,584,3,114,57,0,584,593,1,0,0,0,585,593,3,132,66,0,
586,593,3,142,71,0,587,593,3,106,53,0,588,593,3,138,69,0,589,593,3,64,32,
0,590,591,5,50,0,0,591,593,3,114,57,0,592,576,1,0,0,0,592,580,1,0,0,0,592,
581,1,0,0,0,592,582,1,0,0,0,592,585,1,0,0,0,592,586,1,0,0,0,592,587,1,0,
0,0,592,588,1,0,0,0,592,589,1,0,0,0,592,590,1,0,0,0,593,129,1,0,0,0,594,
596,7,4,0,0,595,594,1,0,0,0,595,596,1,0,0,0,596,597,1,0,0,0,597,598,5,33,
0,0,598,131,1,0,0,0,599,600,5,46,0,0,600,601,5,65,0,0,601,602,3,140,70,0,
602,603,5,66,0,0,603,133,1,0,0,0,604,605,5,29,0,0,605,135,1,0,0,0,606,608,
5,69,0,0,607,606,1,0,0,0,608,611,1,0,0,0,609,607,1,0,0,0,609,610,1,0,0,0,
610,612,1,0,0,0,611,609,1,0,0,0,612,613,7,7,0,0,613,137,1,0,0,0,614,615,
5,57,0,0,615,616,5,46,0,0,616,617,5,65,0,0,617,618,3,140,70,0,618,619,5,
66,0,0,619,622,1,0,0,0,620,622,3,54,27,0,621,614,1,0,0,0,621,620,1,0,0,0,
622,139,1,0,0,0,623,628,3,114,57,0,624,625,5,67,0,0,625,627,3,114,57,0,626,
624,1,0,0,0,627,630,1,0,0,0,628,626,1,0,0,0,628,629,1,0,0,0,629,141,1,0,
0,0,630,628,1,0,0,0,631,635,5,44,0,0,632,634,5,79,0,0,633,632,1,0,0,0,634,
637,1,0,0,0,635,633,1,0,0,0,635,636,1,0,0,0,636,638,1,0,0,0,637,635,1,0,
0,0,638,668,5,44,0,0,639,643,5,43,0,0,640,642,3,144,72,0,641,640,1,0,0,0,
642,645,1,0,0,0,643,641,1,0,0,0,643,644,1,0,0,0,644,649,1,0,0,0,645,643,
1,0,0,0,646,648,3,148,74,0,647,646,1,0,0,0,648,651,1,0,0,0,649,647,1,0,0,
0,649,650,1,0,0,0,650,652,1,0,0,0,651,649,1,0,0,0,652,668,5,43,0,0,653,657,
5,42,0,0,654,656,3,150,75,0,655,654,1,0,0,0,656,659,1,0,0,0,657,655,1,0,
0,0,657,658,1,0,0,0,658,663,1,0,0,0,659,657,1,0,0,0,660,662,3,154,77,0,661,
660,1,0,0,0,662,665,1,0,0,0,663,661,1,0,0,0,663,664,1,0,0,0,664,666,1,0,
0,0,665,663,1,0,0,0,666,668,5,42,0,0,667,631,1,0,0,0,667,639,1,0,0,0,667,
653,1,0,0,0,668,143,1,0,0,0,669,670,7,8,0,0,670,145,1,0,0,0,671,672,5,74,
0,0,672,673,3,114,57,0,673,674,5,41,0,0,674,147,1,0,0,0,675,679,3,146,73,
0,676,678,3,144,72,0,677,676,1,0,0,0,678,681,1,0,0,0,679,677,1,0,0,0,679,
680,1,0,0,0,680,149,1,0,0,0,681,679,1,0,0,0,682,683,7,9,0,0,683,151,1,0,
0,0,684,685,5,77,0,0,685,686,3,114,57,0,686,687,5,41,0,0,687,153,1,0,0,0,
688,692,3,152,76,0,689,691,3,150,75,0,690,689,1,0,0,0,691,694,1,0,0,0,692,
690,1,0,0,0,692,693,1,0,0,0,693,155,1,0,0,0,694,692,1,0,0,0,60,161,163,171,
178,189,192,199,213,223,227,231,234,272,277,283,287,290,296,304,308,318,
326,333,337,343,353,365,389,391,400,407,415,428,434,468,475,479,484,492,
500,513,525,537,549,555,563,571,592,595,609,621,628,635,643,649,657,663,
667,679,692];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class qsrcParser extends antlr4.Parser {

    static grammarFileName = "qsrcParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'&'", null, null, "'='", "'+='", "'-='", "'/='", 
                            "'*='", "'to'", null, null, null, null, null, 
                            null, "'*'", "':'", "'+'", "'-'", "'/'", "'>'", 
                            null, "'<'", null, "'<>'", "'$'", "'!'", "'!!'", 
                            null, null, "'['", "']'", "'{'", "'('", "')'", 
                            "','", "'?'", null, null, null, null, null, 
                            null, null, "'\"\"'", null, null, null, "'}'" ];
    static symbolicNames = [ null, "PassageIdentifier", "PassageEndMarker", 
                             "SYSCALL", "SYSSETTING", "ADDOBJ", "COPYARR", 
                             "DELACT", "DYNAMIC", "GOSUB", "GOTO", "XGOTO", 
                             "INPUT", "JUMP", "KILLVAR", "MSG", "OPENGAME", 
                             "PLAY", "Print", "PrintNewline", "PrintNewlinepre", 
                             "SAVEGAME", "VIEW", "WAIT", "ACT", "IF", "ELSEIF", 
                             "ELSE", "END", "INVERT", "AND", "OR", "CommandConnect", 
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
                             "DQStringAtom", "InEscapedStringAtom", "BRACK_CLOSE", 
                             "MultilineTemplateStringStartExpression", "AnythingElseInMultiLine", 
                             "InComment" ];
    static ruleNames = [ "passage", "block", "statementLine", "emptyLine", 
                         "actBlock", "actInline", "actPicture", "ifInline", 
                         "ifBlock", "elseIfBlock", "elseBlock", "command", 
                         "commandLine", "commandAppended", "addobj", "assignment", 
                         "assignmentNumber", "assignmentString", "assignmentoperator", 
                         "comment", "commentAttached", "copyarr", "delact", 
                         "dynamic", "gosub", "gt", "xgt", "inp", "jump", 
                         "jumpmarker", "killvar", "msg", "multilineBlock", 
                         "multilineContents", "multilineBlockTemplateVar", 
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
                         "escapedString", "stringAtom", "stringTemplateVar", 
                         "stringTemplateVarSuffix", "doubleQuoteAtom", "stringTemplateVarDQ", 
                         "stringDQTemplateVarSuffix" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = qsrcParser.ruleNames;
        this.literalNames = qsrcParser.literalNames;
        this.symbolicNames = qsrcParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 57:
    	    		return this.value_sempred(localctx, predIndex);
    	case 58:
    	    		return this.comparee_sempred(localctx, predIndex);
    	case 59:
    	    		return this.sum_sempred(localctx, predIndex);
    	case 60:
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
	        this.state = 156;
	        this.match(qsrcParser.PassageIdentifier);
	        this.state = 157;
	        this.block();
	        this.state = 158;
	        this.match(qsrcParser.PassageEndMarker);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 2059) !== 0)) {
	            this.state = 161;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	                this.state = 159;
	                this.match(qsrcParser.NEWLINE);
	                break;
	            case 58:
	            case 59:
	            case 61:
	                this.state = 160;
	                this.comment();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 166;
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
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 3)) & ~0x1f) === 0 && ((1 << (_la - 3)) & 3296722943) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 147554807) !== 0)) {
	            this.state = 168;
	            this.statementLine();
	            this.state = 173;
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
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.actBlock();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
	            this.commandLine();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.ifBlock();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 177;
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
	        this.state = 180;
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
	        this.state = 182;
	        this.match(qsrcParser.ACT);
	        this.state = 183;
	        this.value(0);
	        this.state = 184;
	        this.match(qsrcParser.DPOINT);
	        this.state = 185;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 186;
	        this.block();
	        this.state = 187;
	        this.match(qsrcParser.END);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 188;
	            this.commandAppended();
	        }

	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 191;
	            this.commentAttached();
	        }

	        this.state = 194;
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
	        this.state = 196;
	        this.match(qsrcParser.ACT);
	        this.state = 197;
	        this.value(0);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===67) {
	            this.state = 198;
	            this.actPicture();
	        }

	        this.state = 201;
	        this.match(qsrcParser.DPOINT);
	        this.state = 202;
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
	        this.state = 204;
	        this.match(qsrcParser.Comma);
	        this.state = 205;
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
	        this.state = 207;
	        this.match(qsrcParser.IF);
	        this.state = 208;
	        this.value(0);
	        this.state = 209;
	        this.match(qsrcParser.DPOINT);
	        this.state = 210;
	        this.command();
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 211;
	            this.match(qsrcParser.ELSE);
	            this.state = 212;
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
	        this.state = 215;
	        this.match(qsrcParser.IF);
	        this.state = 216;
	        this.value(0);
	        this.state = 217;
	        this.match(qsrcParser.DPOINT);
	        this.state = 218;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 219;
	        this.block();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 220;
	            this.elseIfBlock();
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 226;
	            this.elseBlock();
	        }

	        this.state = 229;
	        this.match(qsrcParser.END);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 230;
	            this.commandAppended();
	        }

	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 233;
	            this.commentAttached();
	        }

	        this.state = 236;
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
	        this.state = 238;
	        this.match(qsrcParser.ELSEIF);
	        this.state = 239;
	        this.value(0);
	        this.state = 240;
	        this.match(qsrcParser.DPOINT);
	        this.state = 241;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 242;
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
	        this.state = 244;
	        this.match(qsrcParser.ELSE);
	        this.state = 245;
	        this.match(qsrcParser.NEWLINE);
	        this.state = 246;
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
	        this.state = 283;
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
	        case 29:
	        case 33:
	        case 34:
	        case 42:
	        case 43:
	        case 44:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 57:
	        case 64:
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 272;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 248;
	                this.match(qsrcParser.ParenthesisLeft);
	                this.state = 249;
	                this.command();
	                this.state = 250;
	                this.match(qsrcParser.ParenthesisRight);
	                break;

	            case 2:
	                this.state = 252;
	                this.addobj();
	                break;

	            case 3:
	                this.state = 253;
	                this.assignment();
	                break;

	            case 4:
	                this.state = 254;
	                this.copyarr();
	                break;

	            case 5:
	                this.state = 255;
	                this.delact();
	                break;

	            case 6:
	                this.state = 256;
	                this.dynamic();
	                break;

	            case 7:
	                this.state = 257;
	                this.gosub();
	                break;

	            case 8:
	                this.state = 258;
	                this.gt();
	                break;

	            case 9:
	                this.state = 259;
	                this.xgt();
	                break;

	            case 10:
	                this.state = 260;
	                this.jump();
	                break;

	            case 11:
	                this.state = 261;
	                this.jumpmarker();
	                break;

	            case 12:
	                this.state = 262;
	                this.killvar();
	                break;

	            case 13:
	                this.state = 263;
	                this.msg();
	                break;

	            case 14:
	                this.state = 264;
	                this.opengame();
	                break;

	            case 15:
	                this.state = 265;
	                this.play();
	                break;

	            case 16:
	                this.state = 266;
	                this.print();
	                break;

	            case 17:
	                this.state = 267;
	                this.savegame();
	                break;

	            case 18:
	                this.state = 268;
	                this.syscall();
	                break;

	            case 19:
	                this.state = 269;
	                this.syssetting();
	                break;

	            case 20:
	                this.state = 270;
	                this.view();
	                break;

	            case 21:
	                this.state = 271;
	                this.wait();
	                break;

	            }
	            this.state = 277;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 274;
	                    this.commandAppended(); 
	                }
	                this.state = 279;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.actInline();
	            break;
	        case 58:
	        case 59:
	        case 61:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 281;
	            this.comment();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 282;
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
	        this.state = 285;
	        this.command();
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 286;
	            this.commandAppended();
	        }

	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 289;
	            this.commentAttached();
	        }

	        this.state = 292;
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
	        this.state = 294;
	        this.match(qsrcParser.CommandConnect);
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 295;
	            this.match(qsrcParser.CommandConnect);
	        }

	        this.state = 298;
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
	        this.state = 300;
	        this.match(qsrcParser.ADDOBJ);
	        this.state = 301;
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
	    this.enterRule(localctx, 30, qsrcParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 303;
	            this.match(qsrcParser.SET);
	        }

	        this.state = 308;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	            this.state = 306;
	            this.assignmentNumber();
	            break;
	        case 57:
	            this.state = 307;
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
	    this.enterRule(localctx, 32, qsrcParser.RULE_assignmentNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.identifierNumber();
	        this.state = 311;
	        this.assignmentoperator();
	        this.state = 312;
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
	    this.enterRule(localctx, 34, qsrcParser.RULE_assignmentString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.identifierString();
	        this.state = 315;
	        this.assignmentoperator();
	        this.state = 318;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 316;
	            this.value(0);
	            break;

	        case 2:
	            this.state = 317;
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
	    this.enterRule(localctx, 36, qsrcParser.RULE_assignmentoperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 63) !== 0))) {
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



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, qsrcParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.state = 337;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.match(qsrcParser.EXCLAMATIONMARK);
	            this.state = 326;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 323;
	                    _la = this._input.LA(1);
	                    if(_la<=0 || _la===69) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    } 
	                }
	                this.state = 328;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	            }

	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(qsrcParser.CommentStart);
	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===83) {
	                this.state = 330;
	                this.match(qsrcParser.InComment);
	                this.state = 335;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
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
	    this.enterRule(localctx, 40, qsrcParser.RULE_commentAttached);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.match(qsrcParser.AttachedComment);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===83) {
	            this.state = 340;
	            this.match(qsrcParser.InComment);
	            this.state = 345;
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
	    this.enterRule(localctx, 42, qsrcParser.RULE_copyarr);
	    try {
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 346;
	            this.match(qsrcParser.COPYARR);
	            this.state = 347;
	            this.functionArguments();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 348;
	            this.match(qsrcParser.COPYARR);
	            this.state = 349;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 350;
	            this.functionArguments();
	            this.state = 351;
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
	    this.enterRule(localctx, 44, qsrcParser.RULE_delact);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(qsrcParser.DELACT);
	        this.state = 356;
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
	    this.enterRule(localctx, 46, qsrcParser.RULE_dynamic);
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 358;
	            this.match(qsrcParser.DYNAMIC);
	            this.state = 359;
	            this.functionArguments();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 360;
	            this.match(qsrcParser.DYNAMIC);
	            this.state = 361;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 362;
	            this.functionArguments();
	            this.state = 363;
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
	    this.enterRule(localctx, 48, qsrcParser.RULE_gosub);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(qsrcParser.GOSUB);
	        this.state = 368;
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
	    this.enterRule(localctx, 50, qsrcParser.RULE_gt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.match(qsrcParser.GOTO);
	        this.state = 371;
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
	    this.enterRule(localctx, 52, qsrcParser.RULE_xgt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(qsrcParser.XGOTO);
	        this.state = 374;
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



	inp() {
	    let localctx = new InpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, qsrcParser.RULE_inp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(qsrcParser.INPUT);
	        this.state = 377;
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
	    this.enterRule(localctx, 56, qsrcParser.RULE_jump);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(qsrcParser.JUMP);
	        this.state = 380;
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
	    this.enterRule(localctx, 58, qsrcParser.RULE_jumpmarker);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(qsrcParser.DPOINT);
	        this.state = 383;
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
	    this.enterRule(localctx, 60, qsrcParser.RULE_killvar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.match(qsrcParser.KILLVAR);
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 12)) & ~0x1f) === 0 && ((1 << (_la - 12)) & 3223453697) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 3154021) !== 0)) {
	            this.state = 386;
	            this.value(0);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===67) {
	                this.state = 387;
	                this.match(qsrcParser.Comma);
	                this.state = 388;
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
	    this.enterRule(localctx, 62, qsrcParser.RULE_msg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(qsrcParser.MSG);
	        this.state = 394;
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
	    this.enterRule(localctx, 64, qsrcParser.RULE_multilineBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(qsrcParser.BRACK_OPEN);

	        this.state = 400;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===81 || _la===82) {
	            this.state = 397;
	            this.multilineContents();
	            this.state = 402;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 403;
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
	    this.enterRule(localctx, 66, qsrcParser.RULE_multilineContents);
	    try {
	        this.state = 407;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 405;
	            this.match(qsrcParser.AnythingElseInMultiLine);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 406;
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
	    this.enterRule(localctx, 68, qsrcParser.RULE_multilineBlockTemplateVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(qsrcParser.MultilineTemplateStringStartExpression);
	        this.state = 410;
	        this.value(0);
	        this.state = 411;
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
	    this.enterRule(localctx, 70, qsrcParser.RULE_opengame);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(qsrcParser.OPENGAME);
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 12)) & ~0x1f) === 0 && ((1 << (_la - 12)) & 3223453697) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 3154021) !== 0)) {
	            this.state = 414;
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
	    this.enterRule(localctx, 72, qsrcParser.RULE_play);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.match(qsrcParser.PLAY);
	        this.state = 418;
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
	    this.enterRule(localctx, 74, qsrcParser.RULE_print);
	    try {
	        this.state = 428;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.printMain();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 421;
	            this.printNewlineMain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 422;
	            this.printNewlinepreMain();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 423;
	            this.printEmptyLineMain();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 424;
	            this.printSide();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 425;
	            this.printNewlineSide();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 426;
	            this.printNewlinepreSide();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 427;
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
	    this.enterRule(localctx, 76, qsrcParser.RULE_printMain);
	    try {
	        this.state = 434;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 29:
	        case 33:
	        case 42:
	        case 43:
	        case 44:
	        case 46:
	        case 49:
	        case 50:
	        case 57:
	        case 64:
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 430;
	            this.value(0);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 431;
	            this.match(qsrcParser.STAR);
	            this.state = 432;
	            this.match(qsrcParser.Print);
	            this.state = 433;
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
	    this.enterRule(localctx, 78, qsrcParser.RULE_printNewlineMain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        this.match(qsrcParser.STAR);
	        this.state = 437;
	        this.match(qsrcParser.PrintNewline);
	        this.state = 438;
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
	    this.enterRule(localctx, 80, qsrcParser.RULE_printNewlinepreMain);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(qsrcParser.STAR);
	        this.state = 441;
	        this.match(qsrcParser.PrintNewlinepre);
	        this.state = 442;
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
	    this.enterRule(localctx, 82, qsrcParser.RULE_printEmptyLineMain);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(qsrcParser.STAR);
	        this.state = 445;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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
	    this.enterRule(localctx, 84, qsrcParser.RULE_printSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(qsrcParser.Print);
	        this.state = 448;
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
	    this.enterRule(localctx, 86, qsrcParser.RULE_printNewlineSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 450;
	        this.match(qsrcParser.PrintNewline);
	        this.state = 451;
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
	    this.enterRule(localctx, 88, qsrcParser.RULE_printNewlinepreSide);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this.match(qsrcParser.PrintNewlinepre);
	        this.state = 454;
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
	    this.enterRule(localctx, 90, qsrcParser.RULE_printEmptyLineSide);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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
	    this.enterRule(localctx, 92, qsrcParser.RULE_savegame);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.match(qsrcParser.SAVEGAME);
	        this.state = 459;
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
	    this.enterRule(localctx, 94, qsrcParser.RULE_syscall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
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
	    this.enterRule(localctx, 96, qsrcParser.RULE_syssetting);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(qsrcParser.SYSSETTING);
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



	view() {
	    let localctx = new ViewContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, qsrcParser.RULE_view);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.match(qsrcParser.VIEW);
	        this.state = 468;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 12)) & ~0x1f) === 0 && ((1 << (_la - 12)) & 3223453697) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 3154021) !== 0)) {
	            this.state = 467;
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
	    this.enterRule(localctx, 100, qsrcParser.RULE_wait);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 470;
	        this.match(qsrcParser.WAIT);
	        this.state = 471;
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
	    this.enterRule(localctx, 102, qsrcParser.RULE_identifier);
	    try {
	        this.state = 475;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 473;
	            this.identifierString();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 474;
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
	    this.enterRule(localctx, 104, qsrcParser.RULE_identifierNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(qsrcParser.WORD);
	        this.state = 479;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 478;
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
	    this.enterRule(localctx, 106, qsrcParser.RULE_identifierString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(qsrcParser.DOLLAR);
	        this.state = 482;
	        this.match(qsrcParser.WORD);
	        this.state = 484;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        if(la_===1) {
	            this.state = 483;
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
	    this.enterRule(localctx, 108, qsrcParser.RULE_arrayIndex);
	    try {
	        this.state = 492;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 486;
	            this.match(qsrcParser.ARRAYBRACKOPEN);
	            this.state = 487;
	            this.value(0);
	            this.state = 488;
	            this.match(qsrcParser.ARRAYBRACKCLOSE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.match(qsrcParser.ARRAYBRACKOPEN);
	            this.state = 491;
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
	    this.enterRule(localctx, 110, qsrcParser.RULE_compareOperator);
	    try {
	        this.state = 500;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 494;
	            this.match(qsrcParser.GREAT_EQUAL_THAN);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 495;
	            this.match(qsrcParser.GREATER_THAN);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 496;
	            this.match(qsrcParser.LOWER_EQUAL_THAN);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 497;
	            this.match(qsrcParser.LOWER_THAN);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 498;
	            this.match(qsrcParser.EqualOperator);
	            break;
	        case 56:
	        case 58:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 499;
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
	    this.enterRule(localctx, 112, qsrcParser.RULE_notEqual);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 502;
	        _la = this._input.LA(1);
	        if(!(_la===56 || _la===58)) {
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
	    const _startState = 114;
	    this.enterRecursionRule(localctx, 114, qsrcParser.RULE_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.comparee(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 513;
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
	                this.state = 507;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 508;
	                this.logicOp();
	                this.state = 509;
	                this.comparee(0); 
	            }
	            this.state = 515;
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
	    const _startState = 116;
	    this.enterRecursionRule(localctx, 116, qsrcParser.RULE_comparee, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.sum(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 525;
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
	                this.state = 519;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 520;
	                this.compareOperator();
	                this.state = 521;
	                this.sum(0); 
	            }
	            this.state = 527;
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
	    const _startState = 118;
	    this.enterRecursionRule(localctx, 118, qsrcParser.RULE_sum, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 529;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 537;
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
	                this.state = 531;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 532;
	                this.addOp();
	                this.state = 533;
	                this.term(0); 
	            }
	            this.state = 539;
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
	    const _startState = 120;
	    this.enterRecursionRule(localctx, 120, qsrcParser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 541;
	        this.factor();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 549;
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
	                this.state = 543;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 544;
	                this.mulOp();
	                this.state = 545;
	                this.factor(); 
	            }
	            this.state = 551;
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
	    this.enterRule(localctx, 122, qsrcParser.RULE_addOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 555;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===69) {
	            this.state = 552;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 557;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 558;
	        _la = this._input.LA(1);
	        if(!(_la===49 || _la===50)) {
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
	    this.enterRule(localctx, 124, qsrcParser.RULE_logicOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===69) {
	            this.state = 560;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 565;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 566;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===31)) {
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
	    this.enterRule(localctx, 126, qsrcParser.RULE_mulOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===69) {
	            this.state = 568;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 573;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 574;
	        _la = this._input.LA(1);
	        if(!(((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 69) !== 0))) {
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
	    this.enterRule(localctx, 128, qsrcParser.RULE_factor);
	    try {
	        this.state = 592;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 576;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 577;
	            this.value(0);
	            this.state = 578;
	            this.match(qsrcParser.ParenthesisRight);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 580;
	            this.numberLiteralWithOptionalSign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 581;
	            this.identifierNumber();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 582;
	            this.invert();
	            this.state = 583;
	            this.value(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 585;
	            this.functionWithNumberReturn();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 586;
	            this.escapedString();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 587;
	            this.identifierString();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 588;
	            this.functionWithStringReturn();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 589;
	            this.multilineBlock();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 590;
	            this.match(qsrcParser.MINUS);
	            this.state = 591;
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
	    this.enterRule(localctx, 130, qsrcParser.RULE_numberLiteralWithOptionalSign);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 595;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49 || _la===50) {
	            this.state = 594;
	            _la = this._input.LA(1);
	            if(!(_la===49 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 597;
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
	    this.enterRule(localctx, 132, qsrcParser.RULE_functionWithNumberReturn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this.match(qsrcParser.WORD);
	        this.state = 600;
	        this.match(qsrcParser.ParenthesisLeft);
	        this.state = 601;
	        this.functionArguments();
	        this.state = 602;
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
	    this.enterRule(localctx, 134, qsrcParser.RULE_invert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 604;
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
	    this.enterRule(localctx, 136, qsrcParser.RULE_numberOperator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 609;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===69) {
	            this.state = 606;
	            this.match(qsrcParser.NEWLINE);
	            this.state = 611;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 612;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 3833859) !== 0))) {
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
	    this.enterRule(localctx, 138, qsrcParser.RULE_functionWithStringReturn);
	    try {
	        this.state = 621;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 614;
	            this.match(qsrcParser.DOLLAR);
	            this.state = 615;
	            this.match(qsrcParser.WORD);
	            this.state = 616;
	            this.match(qsrcParser.ParenthesisLeft);
	            this.state = 617;
	            this.functionArguments();
	            this.state = 618;
	            this.match(qsrcParser.ParenthesisRight);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 620;
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
	    this.enterRule(localctx, 140, qsrcParser.RULE_functionArguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 623;
	        this.value(0);
	        this.state = 628;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===67) {
	            this.state = 624;
	            this.match(qsrcParser.Comma);
	            this.state = 625;
	            this.value(0);
	            this.state = 630;
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
	    this.enterRule(localctx, 142, qsrcParser.RULE_escapedString);
	    var _la = 0;
	    try {
	        this.state = 667;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 631;
	            this.match(qsrcParser.TemplateDoubleSingleQuote);
	            this.state = 635;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===79) {
	                this.state = 632;
	                this.match(qsrcParser.InEscapedStringAtom);
	                this.state = 637;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 638;
	            this.match(qsrcParser.TemplateDoubleSingleQuote);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 639;
	            this.match(qsrcParser.SINGLEQUOTE);
	            this.state = 643;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73 || _la===75) {
	                this.state = 640;
	                this.stringAtom();
	                this.state = 645;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 649;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 646;
	                this.stringTemplateVarSuffix();
	                this.state = 651;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 652;
	            this.match(qsrcParser.SINGLEQUOTE);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 653;
	            this.match(qsrcParser.DOUBLEQUOTE);
	            this.state = 657;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76 || _la===78) {
	                this.state = 654;
	                this.doubleQuoteAtom();
	                this.state = 659;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 663;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===77) {
	                this.state = 660;
	                this.stringDQTemplateVarSuffix();
	                this.state = 665;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 666;
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



	stringAtom() {
	    let localctx = new StringAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, qsrcParser.RULE_stringAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 669;
	        _la = this._input.LA(1);
	        if(!(_la===73 || _la===75)) {
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
	    this.enterRule(localctx, 146, qsrcParser.RULE_stringTemplateVar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 671;
	        this.match(qsrcParser.TemplateStringStartExpression);
	        this.state = 672;
	        this.value(0);
	        this.state = 673;
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
	    this.enterRule(localctx, 148, qsrcParser.RULE_stringTemplateVarSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 675;
	        this.stringTemplateVar();
	        this.state = 679;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73 || _la===75) {
	            this.state = 676;
	            this.stringAtom();
	            this.state = 681;
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
	    this.enterRule(localctx, 150, qsrcParser.RULE_doubleQuoteAtom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 682;
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



	stringTemplateVarDQ() {
	    let localctx = new StringTemplateVarDQContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 152, qsrcParser.RULE_stringTemplateVarDQ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 684;
	        this.match(qsrcParser.DQTemplateStringStartExpression);
	        this.state = 685;
	        this.value(0);
	        this.state = 686;
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
	    this.enterRule(localctx, 154, qsrcParser.RULE_stringDQTemplateVarSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 688;
	        this.stringTemplateVarDQ();
	        this.state = 692;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76 || _la===78) {
	            this.state = 689;
	            this.doubleQuoteAtom();
	            this.state = 694;
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
qsrcParser.COPYARR = 6;
qsrcParser.DELACT = 7;
qsrcParser.DYNAMIC = 8;
qsrcParser.GOSUB = 9;
qsrcParser.GOTO = 10;
qsrcParser.XGOTO = 11;
qsrcParser.INPUT = 12;
qsrcParser.JUMP = 13;
qsrcParser.KILLVAR = 14;
qsrcParser.MSG = 15;
qsrcParser.OPENGAME = 16;
qsrcParser.PLAY = 17;
qsrcParser.Print = 18;
qsrcParser.PrintNewline = 19;
qsrcParser.PrintNewlinepre = 20;
qsrcParser.SAVEGAME = 21;
qsrcParser.VIEW = 22;
qsrcParser.WAIT = 23;
qsrcParser.ACT = 24;
qsrcParser.IF = 25;
qsrcParser.ELSEIF = 26;
qsrcParser.ELSE = 27;
qsrcParser.END = 28;
qsrcParser.INVERT = 29;
qsrcParser.AND = 30;
qsrcParser.OR = 31;
qsrcParser.CommandConnect = 32;
qsrcParser.NumberLiteral = 33;
qsrcParser.SET = 34;
qsrcParser.EqualOperator = 35;
qsrcParser.IncrementOperator = 36;
qsrcParser.DecrementOperator = 37;
qsrcParser.DivideSelfOperator = 38;
qsrcParser.MultSelfOperator = 39;
qsrcParser.SetToOperator = 40;
qsrcParser.TemplateStringEndExpression = 41;
qsrcParser.DOUBLEQUOTE = 42;
qsrcParser.SINGLEQUOTE = 43;
qsrcParser.TemplateDoubleSingleQuote = 44;
qsrcParser.MOD = 45;
qsrcParser.WORD = 46;
qsrcParser.STAR = 47;
qsrcParser.DPOINT = 48;
qsrcParser.PLUS = 49;
qsrcParser.MINUS = 50;
qsrcParser.DIVIDE = 51;
qsrcParser.GREATER_THAN = 52;
qsrcParser.GREAT_EQUAL_THAN = 53;
qsrcParser.LOWER_THAN = 54;
qsrcParser.LOWER_EQUAL_THAN = 55;
qsrcParser.NEQ = 56;
qsrcParser.DOLLAR = 57;
qsrcParser.EXCLAMATIONMARK = 58;
qsrcParser.CommentStart = 59;
qsrcParser.AttachedComment = 60;
qsrcParser.Multilinecomment = 61;
qsrcParser.ARRAYBRACKOPEN = 62;
qsrcParser.ARRAYBRACKCLOSE = 63;
qsrcParser.BRACK_OPEN = 64;
qsrcParser.ParenthesisLeft = 65;
qsrcParser.ParenthesisRight = 66;
qsrcParser.Comma = 67;
qsrcParser.Questionmark = 68;
qsrcParser.NEWLINE = 69;
qsrcParser.WHITESPACE = 70;
qsrcParser.LINEBREAK = 71;
qsrcParser.AnythingElse = 72;
qsrcParser.EscapedSingleQuote = 73;
qsrcParser.TemplateStringStartExpression = 74;
qsrcParser.StringAtom = 75;
qsrcParser.EscapedDoubleQuote = 76;
qsrcParser.DQTemplateStringStartExpression = 77;
qsrcParser.DQStringAtom = 78;
qsrcParser.InEscapedStringAtom = 79;
qsrcParser.BRACK_CLOSE = 80;
qsrcParser.MultilineTemplateStringStartExpression = 81;
qsrcParser.AnythingElseInMultiLine = 82;
qsrcParser.InComment = 83;

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
qsrcParser.RULE_assignment = 15;
qsrcParser.RULE_assignmentNumber = 16;
qsrcParser.RULE_assignmentString = 17;
qsrcParser.RULE_assignmentoperator = 18;
qsrcParser.RULE_comment = 19;
qsrcParser.RULE_commentAttached = 20;
qsrcParser.RULE_copyarr = 21;
qsrcParser.RULE_delact = 22;
qsrcParser.RULE_dynamic = 23;
qsrcParser.RULE_gosub = 24;
qsrcParser.RULE_gt = 25;
qsrcParser.RULE_xgt = 26;
qsrcParser.RULE_inp = 27;
qsrcParser.RULE_jump = 28;
qsrcParser.RULE_jumpmarker = 29;
qsrcParser.RULE_killvar = 30;
qsrcParser.RULE_msg = 31;
qsrcParser.RULE_multilineBlock = 32;
qsrcParser.RULE_multilineContents = 33;
qsrcParser.RULE_multilineBlockTemplateVar = 34;
qsrcParser.RULE_opengame = 35;
qsrcParser.RULE_play = 36;
qsrcParser.RULE_print = 37;
qsrcParser.RULE_printMain = 38;
qsrcParser.RULE_printNewlineMain = 39;
qsrcParser.RULE_printNewlinepreMain = 40;
qsrcParser.RULE_printEmptyLineMain = 41;
qsrcParser.RULE_printSide = 42;
qsrcParser.RULE_printNewlineSide = 43;
qsrcParser.RULE_printNewlinepreSide = 44;
qsrcParser.RULE_printEmptyLineSide = 45;
qsrcParser.RULE_savegame = 46;
qsrcParser.RULE_syscall = 47;
qsrcParser.RULE_syssetting = 48;
qsrcParser.RULE_view = 49;
qsrcParser.RULE_wait = 50;
qsrcParser.RULE_identifier = 51;
qsrcParser.RULE_identifierNumber = 52;
qsrcParser.RULE_identifierString = 53;
qsrcParser.RULE_arrayIndex = 54;
qsrcParser.RULE_compareOperator = 55;
qsrcParser.RULE_notEqual = 56;
qsrcParser.RULE_value = 57;
qsrcParser.RULE_comparee = 58;
qsrcParser.RULE_sum = 59;
qsrcParser.RULE_term = 60;
qsrcParser.RULE_addOp = 61;
qsrcParser.RULE_logicOp = 62;
qsrcParser.RULE_mulOp = 63;
qsrcParser.RULE_factor = 64;
qsrcParser.RULE_numberLiteralWithOptionalSign = 65;
qsrcParser.RULE_functionWithNumberReturn = 66;
qsrcParser.RULE_invert = 67;
qsrcParser.RULE_numberOperator = 68;
qsrcParser.RULE_functionWithStringReturn = 69;
qsrcParser.RULE_functionArguments = 70;
qsrcParser.RULE_escapedString = 71;
qsrcParser.RULE_stringAtom = 72;
qsrcParser.RULE_stringTemplateVar = 73;
qsrcParser.RULE_stringTemplateVarSuffix = 74;
qsrcParser.RULE_doubleQuoteAtom = 75;
qsrcParser.RULE_stringTemplateVarDQ = 76;
qsrcParser.RULE_stringDQTemplateVarSuffix = 77;

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

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
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


	InEscapedStringAtom = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(qsrcParser.InEscapedStringAtom);
	    } else {
	        return this.getToken(qsrcParser.InEscapedStringAtom, i);
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
qsrcParser.AssignmentContext = AssignmentContext; 
qsrcParser.AssignmentNumberContext = AssignmentNumberContext; 
qsrcParser.AssignmentStringContext = AssignmentStringContext; 
qsrcParser.AssignmentoperatorContext = AssignmentoperatorContext; 
qsrcParser.CommentContext = CommentContext; 
qsrcParser.CommentAttachedContext = CommentAttachedContext; 
qsrcParser.CopyarrContext = CopyarrContext; 
qsrcParser.DelactContext = DelactContext; 
qsrcParser.DynamicContext = DynamicContext; 
qsrcParser.GosubContext = GosubContext; 
qsrcParser.GtContext = GtContext; 
qsrcParser.XgtContext = XgtContext; 
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
qsrcParser.StringAtomContext = StringAtomContext; 
qsrcParser.StringTemplateVarContext = StringTemplateVarContext; 
qsrcParser.StringTemplateVarSuffixContext = StringTemplateVarSuffixContext; 
qsrcParser.DoubleQuoteAtomContext = DoubleQuoteAtomContext; 
qsrcParser.StringTemplateVarDQContext = StringTemplateVarDQContext; 
qsrcParser.StringDQTemplateVarSuffixContext = StringDQTemplateVarSuffixContext; 
