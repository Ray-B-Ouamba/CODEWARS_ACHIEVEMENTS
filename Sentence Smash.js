/**********  INSTRUCTION ************/ 

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

/*************** SOLUTION  ***************/

function smash (words) {
  let array =['I','love','you','Ray-B.Ouamba']
   return words.join(" ");
//join() is a method in JavaScript that is used to join all elements of an array into a single string.
};