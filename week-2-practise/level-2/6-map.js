// You have been given an array of percentages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function
function per(num){
  return num *0.1 +"%";
}
var percentages = [1, 23, 92, 18];
var percentagesFormatted=percentages.map(per);
console.log(percentagesFormatted);

/* 
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
