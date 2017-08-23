/**
 * Created by john on 8/17/17.
 */
// Task

// N lamps are placed in a line, some are switched on and some are off. What is the smallest number of lamps that need to be switched so that on and off lamps will alternate with each other?

// You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

// Your task is to find the smallest number of lamps that need to be switched.

// Example

// For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3.


// a     --> 1 0 0 1 1 1 0
// swith --> 0 1     0
// became--> 0 1 0 1 0 1 0
// Input/Output

// [input] integer array a

// array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.

// 2 < a.length <= 1000
// [output] an integer

// minimum number of switches.

function minimalSwitches(array){
    let last=1;

    let ans1=array.reduce((count,current,index)=> {

         count+=  (current ===last)?1:0;
         last = last?0:1;
         return count;


    },0);


    last=0;
    let ans0=array.reduce((count,current,index)=> {
        count += (current ===last)? 1:0;
        last = last?0:1;
        return count;
    },0)
    return Math.min(ans0,ans1);



}

var ans =minimalSwitches([0,1,0,1])

console.log(ans);