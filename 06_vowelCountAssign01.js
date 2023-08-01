
var vowelCount= function(str){
let count=0;
let index=0;
var result= " ";
while (index <= str.length) {
  let char= str. charAt(index);
  if(char=="a" || char=="A" || char=="E" || char=="e" || char=="i" || char=="I" || char=="o" || char=="O" || char=="u" || char=="U"){
    result= result.concat(char).concat(",");
    // console.log(`Vowels present in string are ${result}`);
    count=count+1;
    
    } 
    index++;
    // console.log(count); 
}
console.log(`Given string is ${str}`);
console.log(`Vowels present in string are ${result}`);
console.log(`Total Count of vowel is ${count}`);
}
vowelCount("I am vey good IT Developer");
console.log(`===============================================`);


var cube= function(arg){
let totalSum=0;
let index=1;
while(index<=5){
    totalSum= totalSum+index*index*index;
    index++;
}
console.log(`Sum of cube of no from 1 to 5 is ${totalSum}`);
}
cube();
console.log(`===============================================`);

var string= function(str){
    let index=1;
    let char=0;
    var result="";
    while(index<=str.length){
        let char= str.charAt(index);
        if(index%2!=0 && char!==(" ")){
            result= result.concat(char).concat(",");
            
        }
        index++;
    }
    console.log(`Given string:- ${str}`);
    console.log(`Odd positioned characters are:- ${result}`);
    console.log(`---------------------------------------`);

}
string("Hard work always pays back");
string("Soon I will be React IT champ");