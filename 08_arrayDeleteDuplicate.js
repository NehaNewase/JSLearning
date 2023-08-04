let array = [4,5,4,5,8,5,7,8,9,7,8];
      let index = 0, newArr = [];
         for (let i = 0; i < array.length - 1; i++) {
            let isDuplicate = false;
            for (let j = i + 1; j < array.length - 1; j++) {
            if (array[i] === array[j]) {
                isDuplicate = true; 
                break;  
            } 
            }
            if(!isDuplicate){
                newArr.push(array[i]); 
                  //index++;
               }
         }
    console.log(newArr);