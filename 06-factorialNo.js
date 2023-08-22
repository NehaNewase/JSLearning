// 5! = 1 * 2 * 3 * 4 * 5

let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);


console.log("----------------------------------------");
var fact = 1;
function factorial(num){
    // 5 * 4 * 3 * 2 * 1
   if(num==1) {
    return fact;
   } else {
    fact = num * factorial(num-1); //5 * 4 * 3 * 2 * 1
   } 
}
factorial(5);
console.log(`Factorial using recursion is: ${fact}`);