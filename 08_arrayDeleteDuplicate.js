function unique(arr) {
    const result = [];
  
    for (const i of arr) {
      let noRepeat = true;
  
      for (const j of result) {
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
  
  console.log(unique([4,5,4,5,8,5,7,8,9,7,8]));
  