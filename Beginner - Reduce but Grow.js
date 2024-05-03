/**********  INSTRUCTION ************/ 
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

/*************** SOLUTION  ***************/
function grow(x){
  
  return x.reduce(function(acc, curr) {
        return acc * curr;
    }, 1);
}

 /************** Solution 2 ***********/

 function grow(x){
 var result = 1;
   for (var i = 0; i < x.length; i++) {
        result *= x[i];
    }
    return result;
    }
   
