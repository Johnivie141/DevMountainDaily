/**
 * Created by john on 8/15/17.
 */
https://repl.it/HUaY/1

// Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
function NextPerfectSquare(num){
    let sqrt = Math.sqrt(num);
    if (Math.floor(sqrt)!==sqrt) return -1;

    else return Math.pow(sqrt+1,1);
}
console.log(NextPerfectSquare(121));