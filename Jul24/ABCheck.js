/**
 * Created by john on 7/24/17.
 */

// Write a function called ABCheck that takes in a string parameter and returns true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).

// Otherwise return false.

// For a greater challenge, try to solve this problem using an array method like .forEach or .map

// //version1
// function ABCheck(str){
//     return str.search(/a...b/)!==-1;
// }
//
//
// var ans = ABCheck("lane corrowed");
// console.log(ans);

// version2 useing foreach

function ABCheck(str){
    var lastA=-1;
    var found=false;
    str.split('').map(
        (val,index,arr)=>{
            if (val==='a'){ lastA=index;}
            if (val==='b'){

                if(lastA!==-1 && (index - lastA )===4);
                found=true;
            }

    }

    );

    return found;
}

var ans = ABCheck("lane borrowed");
console.log(ans);