var evenOdd= function (num) {
    if(num%2==0){
        console.log(`${num} is Even No`);
    }else{
        console.log(`${num} is Odd No`);
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

var string= function(str){
    if(str.length>10){
        console.log(`String contains more than 10 character`);
    }else{
        console.log(`String contains less than 10 character`);
    }
    if(str.startsWith("Java")){
        console.log(`String starts with Java`);
    }else{
        console.log(`String doen't start with Java`);
    }
}
string('JavaScript - ES6');
string('Neha');

