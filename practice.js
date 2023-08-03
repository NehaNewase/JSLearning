function unique(arr) {
    const result = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      let noRepeat = true;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (i === j) {
          noRepeat = false;
          break;
        }
      }
  
      if (noRepeat) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // 🎉  [ 1, 3, 2 ]
  console.log(unique([4,5,4,5,8,5,7,8,9,7,8]));
  