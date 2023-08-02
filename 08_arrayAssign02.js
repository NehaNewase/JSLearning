const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11]
console.log(arrayNumbers);
const element= arrayNumbers.length;
console.log(`array length is ${element}`);
console.log(`Lenght of given array is: ${element}`);

let element1= arrayNumbers[0];
console.log(`First positioned number is: ${element1}`);

let element2= arrayNumbers[element-1];
console.log(`Last positioned number is: ${element2}`);

let element3= arrayNumbers[element-3];
console.log(`Third last positioned number is: ${element3}`);


let result="";

for (let index = 0; index <= element-1; index++) {
    let no= arrayNumbers[index];
    if(no%2==0){
        result= result.concat(no).concat(",");
    }

}
console.log(`Even Numbers present in array are: ${result}`);

let result1="";
let result5="";
for (let index = 0; index <= element-1; index++) {
    let no= arrayNumbers[index];
    
    if(no%2!==0){
        result1= result1.concat(no).concat(",");
        
    }

    if (no%5==0) {
        result5=result5.concat(no).concat(",");
    }

}
console.log(`Odd Numbers present in array are: ${result1}`);



let sum=0;
let sum1=0;
let total=0;
for (let index = 0; index <= arrayNumbers.length-1; index++) {
    let add= arrayNumbers[index];
    total=total+add;
    if (index%2==0) {
           let char= arrayNumbers[index];
        sum=sum+char;
        
    }
    if (index%2!==0) {
        let char= arrayNumbers[index];
     sum1=sum1+char;
     
 }

 
 
  
}
console.log(`Sum of all even positioned numbers is ${sum}`);
console.log(`Sum of all odd positioned numbers is ${sum1}`);
console.log(`Sum of all numbers is ${total}`);
console.log(`No multiples of 5 are: ${result5}`);
console.log(`Multiples of 5: ${result5}`);

let isAvailable = arrayNumbers.includes(115);
console.log(`Is 115 available : ${isAvailable}`);

let isAvailable1 = arrayNumbers.includes(23);
console.log(`Is 23 available : ${isAvailable1}`);

arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);


arrayNumbers.splice(4,3);
console.log(arrayNumbers);