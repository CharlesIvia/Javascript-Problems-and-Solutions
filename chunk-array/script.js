let chunkedArray = (arr, size) => {
  let chunkyArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkyArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkyArray;
};

console.log(chunkedArray(["a", "b", "c", "d"], 2));
