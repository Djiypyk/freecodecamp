//task 01

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let result = 0;
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);

  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]);

//task 02

/*Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/


function diffArray(arr1, arr2) {
  return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //task 03


  /*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.*/


function destroyer(arr,...values) {
  return arr.filter(elem => !values.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//task 04