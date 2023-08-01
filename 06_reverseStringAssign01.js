
var reverseString=function(str){
    let index= str.length;
    let result="";
    while(index>=0){
        let char= str.charAt(index);
        if(char!=(" ")){
        result= result+str.charAt(index);
        }
        index--;
    }
    console.log(`Reverse string is ${result}`);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be React IT champ");