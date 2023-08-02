const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
 let element= arrayFruits[0];
 const arrayLength= arrayFruits.length;   
 let element1= arrayFruits[arrayLength-1];
 console.log(`Element stored at first position is: ${element}`);
 console.log(`Element stored at last position is: ${element1}`);

 arrayFruits.unshift("Papaya");
 console.log(arrayFruits);

 let removedElement = arrayFruits.splice(4, 1);
 console.log(arrayFruits);
 console.log(`Removed element from array is: ${removedElement}`);

 arrayFruits.push("Pineapple");
 console.log(arrayFruits);

 let insertElement= arrayFruits.splice(4, 0, "Dragon Fruit");
 console.log(arrayFruits);

 let replaceElement= arrayFruits.splice(2, 1, "Kiwi");
 console.log(arrayFruits);

 for (let index = 1; index <= 4 ; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
 }
console.log(`___________________________________________________`);
console.log(arrayFruits);
 
for (let index = 4; index <= arrayFruits.length-1; index++){
    const element = arrayFruits[index];
    console.log(element);
    
 }




