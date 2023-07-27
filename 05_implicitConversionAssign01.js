
var result= 0=='';
console.log(`Result of 0=='' is ${result}, because ' ' string is converted to number which is 0 `);

var result= 0=='0';
console.log(`Result of 0=='0' is ${result}, because '0' string is converted to number which is 0`);

var result= 0==false;
console.log(`Result of 0==false is ${result}, because false is converted to number which is 0`);

var result= null==undefined;
console.log(`Result of null==undefined is ${result}, because undefined doesn't hold any value which equals to null`);

var result= 1==[1];
console.log(`Result of 1==[1] is ${result}, because [1] is an array containing 1 value`);

var result= 1==true;
console.log(`Result of 1==true is ${result}, because true is converted to number which is 1`);

var result= 1=='1';
console.log(`Result of 1=='1' is ${result}, because '1' is converted from string to 1`);