/**
 * Created by john on 8/15/17.
 */

// You will be given a series of fractions in the form of nested arrays.
// E.G. an example argument would be [ [1, 2], [1, 3], [1, 4] ]
// Which would equate to 1/2, 1/3, and 1/4.

// Your job is to write a function that finds the lowest common denominator across all passed-in fractions.
// Then, convert all the fractions to the lowest common denominator, and return them as a string of parentheticals.
// For example, the above argument would return: "(6,12)(4,12)(3,12)"

// Do not assume there will be only 3 fractions.  Your function will need to account for an unknown number of nested arrays.

function LowestCommon(array) {
    let factor = 1;

// create array of just denominators
    denomArray = array.map((e) => {return e[1];}).sort((x, y) => {return x < y});


// phase 0 getting commonfactor
    for (let i = 2; i * i <= denomArray[0]; i++) {
        // if current denom %i==0 while current denom %1==0 inc max power;
        let maxpower = 0;

       for (let j = 0; j < denomArray.length; j++) {
            let power = 0;

            while (denomArray[j] % i === 0) {
                denomArray[j] /= i;
                power++;
            }
            if (power > maxpower) maxpower = power;

        }

        //commonfactor *= pow(i,max power);
        factor *= Math.pow(i, maxpower);

    }
    console.log("factor1 " +factor);
    let commons=[];
    //phase 2 get remaining common factors
  // loop through and get remaining primes
    for (let j=0;j<denomArray.length;j++){
        if (commons.indexOf(denomArray[j])===-1) {

             commons.push(denomArray[j]);
            console.log("multiply factor by " + denomArray[j])
            factor *= denomArray[j];
        }
    }

console.log("factor " +factor);
  // foreach factor find its relationship to commonfactor
    // multiple both top and bottom
    return array.map((e)=> {
        let number = factor;
        if (number % e[1] == 0) {
            number /= e[1];
        }
        return [e[0] * number, e[1] * number];
    });



}
ans= LowestCommon([ [1,256],[1,64] ]);

console.log(ans);