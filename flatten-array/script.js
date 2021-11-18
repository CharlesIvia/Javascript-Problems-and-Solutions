//WANT: FLATTEN 2D ARRAYS
//Using a for loop

let flatten2DArray = (twoDArray) => {
  let flatArray = [];
  for (let arr of twoDArray) {
    for (let item of arr) {
      flatArray.push(item);
    }
  }

  return flatArray;
};

//Using spread operator

let flatten2DArr = (twoDArray) => {
  let flatArray = [];
  return flatArray.concat(...twoDArray);
};

//Using Array.prototype.flat

let flattenArray = (array, depth) => {
  let flatArray = array.flat(depth);
  return flatArray;
};

//Testing

let twoDArray = [[1, 2, 3], [4, 5, 6], [7]];
console.log(flatten2DArray(twoDArray));
console.log(flatten2DArr(twoDArray));
console.log(flattenArray(twoDArray));
