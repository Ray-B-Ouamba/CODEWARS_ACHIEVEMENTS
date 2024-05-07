/*
INSTRUCTIION :

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

*/ 

/***************** SOLUTION *****************/ 

function findNeedle(haystack) {
  // Loop through each element of the haystack array
  for (var i = 0; i < haystack.length; i++) {
    // Check if the current element is equal to "needle"
    if (haystack[i] === "needle") {
      // If found, return a message indicating the position where the "needle" was found
      return "found the needle at position " + i;
    }
  }
  // If "needle" was not found in the haystack array, return a message indicating its absence
  return "needle not found in haystack";
}