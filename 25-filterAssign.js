const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const greaterArray = arrayNumbers.filter((currentValue)=>{
    return currentValue>50;
});
console.log(`Greater than 50 elements in array: ${greaterArray}`);

console.log(`**************************************`);

const evenArray = arrayNumbers.filter((currentValue)=>{
    if(currentValue%2==0){
    return currentValue;
    }
});
console.log(`Even numbers in array: ${evenArray}`);
console.log(`**************************************`);

const oddArray = arrayNumbers.filter((currentValue)=>{
    if(currentValue%2==1){
    return currentValue;
    }
});
console.log(`Odd numbers in array: ${oddArray}`);
console.log(`**************************************`);

const multipleArray = arrayNumbers.filter((currentValue)=>{
    if(currentValue%5==0){
    return currentValue;
    }
});
console.log(`Array elements which are multiple of 5: ${multipleArray}`);
console.log(`**************************************`);

const betweenArray = arrayNumbers.filter((currentValue)=>{
    if(currentValue>20 && currentValue<50){
    return currentValue;
    }
});
console.log(`Array elements between 20 and 50 are: ${betweenArray}`);
console.log(`**************************************`);


