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
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//task 03

/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.*/

function destroyer(arr, ...values) {
  return arr.filter((elem) => !values.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//task 04

/*Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    let flag = true;
    for (let j = 0; j < srcKeys.length; j++) {
      if (!(collection[i][srcKeys[j]] === source[srcKeys[j]])) {
        flag = false;
      }
    }
    if (flag) {
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

//task 05

/*Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

//task 06

/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
  let constRegex = /^[^aeiou]+/;
  let myConst = str.match(constRegex);
  return myConst !== null
    ? str.replace(constRegex, "").concat(myConst).concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
