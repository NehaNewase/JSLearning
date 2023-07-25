

console.log(`=================Assignment 2==================`);
console.log("                                                                                     ");

function stringHandsOn() {
    
    
}
stringHandsOn();
var string="     Hey you are doing good, keep it up     ";
console.log(string);
console.log(`------------------------------------`);
var lenghtOfString= string.length;
console.log(`Lenght of given string is ${lenghtOfString}`);
console.log(`------------------------------------`);
var lenghtAfterTrim= string.trim();
console.log(`String after trim is ${lenghtAfterTrim} and Lenght of string after trim is ${lenghtAfterTrim.length}`);
console.log(`------------------------------------`);
var resultTrimEnd = string.trimEnd();
var trimEndLength = resultTrimEnd.length;
var endSpaces = string.length - trimEndLength;
var resultTrimStart= string.trimStart();
var trimStartLength = resultTrimStart.length;
var startSpaces = string.length - trimStartLength;
var totalTrimSpaces= startSpaces + endSpaces;

console.log(`Trimed extra spaces at start are ${startSpaces}, Trimed extra spaces at end are ${endSpaces}`);
console.log(`Total no of extra spaces count that is removed is ${totalTrimSpaces} `);
console.log(`------------------------------------`);

var firstChar= lenghtAfterTrim.charAt(0);
var lastChar= lenghtAfterTrim.charAt(lenghtAfterTrim.length- 1);
console.log(`First character in string is ${firstChar}, and last character in string is ${lastChar}`);
console.log(`------------------------------------`);

var result= lenghtAfterTrim.split(" ");
var totalWords= result.length;
console.log(`Total no of words in string are ${totalWords}`);
console.log(`------------------------------------`);

var result= lenghtAfterTrim.indexOf("good");
console.log(`Index of good in string is ${result}`);
console.log(`------------------------------------`);

var result= lenghtAfterTrim.slice(22, lenghtAfterTrim.length- 1)
console.log(`Substring starting from index 22 is ${result}`);
console.log(`------------------------------------`);

console.log(`Is string ends with word up-`, lenghtAfterTrim.includes("up"));
console.log(`Is string starts with word hey-`, lenghtAfterTrim.includes("Hey"));

