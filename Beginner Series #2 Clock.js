/******************* INSTRUCTION *****************************/ 

/************** Instructions

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds. **************************/


/**************** SOLUTION *********************/ 

function past(h, m, s){
  const millisecondsPerHour = 3600 * 1000;
  const millisecondsPerMinute = 60 * 1000;
  const millisecondsPerSecond = 1000;

  // Convert each unit of time into milliseconds and sum them up
  return (h * millisecondsPerHour) + (m * millisecondsPerMinute) + (s * millisecondsPerSecond);
}