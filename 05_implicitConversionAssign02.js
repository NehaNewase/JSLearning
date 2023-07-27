
console.log(`********************Implicit Conversion to String***********************`);
var result= '3' + 2;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from number value 2 to string '2'`);
console.log(`-----------------------------------------------------------`);

var result= '3' + true;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from boolean value true to string 'true'`);
console.log(`-----------------------------------------------------------`);

var result= '3' + undefined;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from undefined value to string 'undefined'`);
console.log(`-----------------------------------------------------------`);

var result= '3' + null;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from null value to string 'null'`);

console.log(`                                                                            `);
console.log(`*******************Implicit Boolean Conversion to Number************************`);
var result= '4' - true;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from boolean value true to number and in number true is 1`);
console.log(`-----------------------------------------------------------`);

var result= 4 + true;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from boolean value true to number and in number true is 1`);
console.log(`-----------------------------------------------------------`);

var result= 4 + false;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion from boolean value false to number and in number false is 0`);
console.log(`-----------------------------------------------------------`);

console.log(`                                                                            `);
console.log(`*******************Implicit String Conversion to Number************************`);
var result= '4' - '2';
console.log(result);
console.log(`The result is ${result} because their is implicit 
conversion from string value '4' to number 4 and '2' to number 2`);
console.log(`-----------------------------------------------------------`);

var result= '4' - 2;
console.log(result);
console.log(`The result is ${result} because their is implicit 
conversion from string value '4' to number 4`);
console.log(`-----------------------------------------------------------`);

var result= '4' * 2;
console.log(result);
console.log(`The result is ${result} because their is implicit 
conversion from string value '4' to number 4`);
console.log(`-----------------------------------------------------------`);

var result= '4' / 2;
console.log(result);
console.log(`The result is ${result} because their is implicit conversion 
from string value '4' to number 4`);
console.log(`-----------------------------------------------------------`);






