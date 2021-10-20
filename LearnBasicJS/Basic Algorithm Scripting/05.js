// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let resultMassiv = [];

  for (let i = 0; i < arr.length; i++) {
    let largNumber = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largNumber) {
        largNumber = arr[i][j];
      }
    }
    resultMassiv[i] = largNumber;
  }

  return resultMassiv;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
