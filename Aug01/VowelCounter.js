// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

function vowelCounter(str){
    return str.split('').reduce((acc,c)=>{
    return (/[aeio]/gi.exec(c))?  acc +1: acc;
        },0);

}


console.log(vowelCounter("john Ivie"));