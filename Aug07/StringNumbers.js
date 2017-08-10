/**
 * Created by john on 8/7/17.
 */
// Write a function that takes in a string.  That string may or may not have a number at the end of it.

// If the string has a number at the end, increment that number by one, maintaining the same number of digits as the original number if possible.
// E.G.: Word001 becomes Word002.  Word099 becomes Word100. Word0099 becomes Word0100.

// You may increase the length of the original number only if necessary:
// E.G.: Word999 becomes Word1000.

// If the string has no number at the end, add the number 1 to the end of it.
// E.G. "Tacos" becomes "Tacos1"

// Return the result as a concatenated string.

function stringNumber(str){
    return str.replace(/(\d*)$/,function(match,number) {

        let newNumber='';
        if (number){
            let len=number.length;
             newNumber = (Number(number) +1).toString();
            while(newNumber.length <len) newNumber="0"+newNumber;

        }
        else newNumber='1';
        return newNumber;
    });

}

var ans = stringNumber("Word99");
console.log(ans);