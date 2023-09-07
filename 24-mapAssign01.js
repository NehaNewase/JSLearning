
const array = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

const newArray = array.map((currentValue)=>{
    return currentValue + 10;
});
console.log(`Array after adding 10 to each element ${newArray}`);
console.log(`-------------------------------------------`);

const cubeArray = array.map((currentValue)=>{
    return currentValue * currentValue * currentValue;
});
console.log(`Cube of each array element: ${cubeArray}`);
console.log(`-------------------------------------------`);

const indexArray = array.map((currentValue, index)=>{
    return currentValue + index; 
});
console.log(`Array after adding index value: ${indexArray}`);
console.log(`-------------------------------------------`);