const arrayNumbers = [1,-7,40,502,-77,91,0,108, 89,-601];

arrayNumbers.forEach((value,index) => {
    console.log(`Value: ${value}, Index: ${index}`);
});

console.log(`+++++++++++++++++++++++++++++++++++++++++`);

arrayNumbers.forEach((value) =>{
    if(value>0){
        console.log(`The positive no from array are:: ${value}`);
    }
});

console.log(`+++++++++++++++++++++++++++++++++++++++++`);

let negativeArray = [];
arrayNumbers.forEach((value) =>{
    if(value<0){
        negativeArray.push(value);
    }
     });
     console.log(`The negative no array: ${negativeArray}`);
     
console.log(`+++++++++++++++++++++++++++++++++++++++++`);

arrayNumbers.forEach((value) =>{
    if(value%2==0){
        console.log(`The even no from array are:: ${value}`);
    }
} );

console.log(`+++++++++++++++++++++++++++++++++++++++++`);
let sum = 0;
arrayNumbers.forEach((Value) =>{
    sum += Value;

});
console.log(`The addition of all no in array is:: ${sum}`);

console.log(`+++++++++++++++++++++++++++++++++++++++++`);

arrayNumbers.forEach((value, index) =>{
    if(index%2==0){
        console.log(`At ${index} index value is ${value}`);
    }
}); 





