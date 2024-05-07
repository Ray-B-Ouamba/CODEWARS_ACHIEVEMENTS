/********************  **********************
INSTRUCTON:

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.*/ 

/******************** SOLUTION ***********************/ 
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
  }

  /* EXPLANATION :
  
  n.toString(): This part converts the number n to a string. This is necessary because JavaScript's split() and reverse() methods work with strings and arrays, not directly with numbers. By converting n to a string, we can treat it as an array of characters.
.split(''): This method splits the string representation of the number into an array of individual characters. For example, if n is 123, after the split() operation, we get ['1', '2', '3']. This prepares the digits of the number to be reversed.
.reverse(): This method reverses the order of elements in the array. So, if the array is ['1', '2', '3'], after the reverse() operation, it becomes ['3', '2', '1'].
.map(Number): This part maps each character in the array back to a number using the Number function. By default, when you split a string, you get an array of strings. But since we want the array to contain numbers, we use map(Number) to convert each string element back to a number. For example, ['3', '2', '1'] becomes [3, 2, 1].
Finally, the array [3, 2, 1] (or whatever the reversed digits are) is returned as the result.

This function is concise and efficient, using method chaining to perform the necessary operations on the number. It's a common pattern in JavaScript to chain multiple array/string manipulation methods together like this.