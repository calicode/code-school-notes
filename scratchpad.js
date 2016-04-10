/*for (var i = 1 ; i <101; i++){
// what am i missing here, why is this an inteview question. I think theres a way to omit some of this code 
if (i %5 === 0 && i %3 === 0) {console.log("FizzBuzz");}
else if (i % 5 === 0) {console.log("Fizz");} 
else if (i % 3 ===0) {console.log("Buzz");}
else {console.log(i);}

}*/

'use strict'

var chessBoard = function  (size){

var board = "";

for ( var i = 1, rowNum = 1 ,charPos = 1; i <= size; i++)
	{
	
	while (charPos <= (size/2)) {

		if (i % 2 === 0) { board +=" #"; charPos++;}
		else { board +="# "; charPos++;}
 		}
	
	board +="\n";
	charPos = 1;
	}
	
console.log (board);
};


chessBoard(16);