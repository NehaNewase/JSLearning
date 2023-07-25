

var square= function(num1){
    var result= num1*num1;
    console.log(`Square of ${num1} is ${result}`);
}
square(5);
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(`==============================================`);
console.log("Type of square variable is", typeof square);
console.log(`==============================================`);

var rectangleArea= function(num1, num2){
    var area= num1*num2;
    console.log(`Area of rectangle for length ${num1} and width ${num2} is ${area}`);
}
 rectangleArea(499, 917);
 console.log(`==============================================`);

 var swapValues= function(arg1, arg2){
    console.log("Before Swap value1=", arg1, "& value2=", arg2);
    var temp= arg1;
    arg1= arg2;
    arg2=temp;
    console.log("After Swap value1=", arg1, "& value2=", arg2);
}
swapValues("Mahi", "Raina");
console.log("----------------------------------");
swapValues(55, 77);
console.log(`==============================================`);


var mainString = "JS the most popular language of internet";
var string= function(arg){
    return arg.length;
}

 var count = string(mainString);
console.log(`Total no of character available in string are ${count}`);
console.log("----------------------------------");

var charIndex= mainString.charAt(6);
console.log(`Character at index 6 is ${charIndex}`);
console.log("----------------------------------");

var charIndex= mainString.charAt(11);
console.log(`Character at index 11 is ${charIndex}`);
console.log("----------------------------------");

var lastChar= mainString.charAt(mainString.length-1);
console.log(`Last character of string is ${lastChar}`);
console.log("----------------------------------");

var firstChar= mainString.charAt(0);
console.log(`First character of string is ${firstChar}`);
console.log("----------------------------------");

var thirdLastChar= mainString.charAt(mainString.length-3);
console.log(`Third last character of string is ${thirdLastChar}`);
console.log("----------------------------------");

var result= mainString.split(" ");
var totalWords= result.length;
console.log(`Total no of words in given string are ${totalWords} and their square is ${totalWords*totalWords}`);
console.log("----------------------------------");








      