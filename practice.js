// const array = [2,7,10,4,2,8,6];
// // let start=array[index];
// // let end=array.length-1;
// let newArray = [];
// let reverse = function(array){
//  for(let i = array.length-1;i>=0;i--){
//     newArray += array[i];  
 
// }
// return newArray;
// }
// reverse(array);
// console.log(array);

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');