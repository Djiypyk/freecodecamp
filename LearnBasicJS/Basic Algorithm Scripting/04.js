// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  let massiv = str.split(" ");
  let result = 0;
  for (let i = 0; i < massiv.length; i++) {
    if (massiv[i].length > result) {
      result = massiv[i].length;
    }
  }

  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
