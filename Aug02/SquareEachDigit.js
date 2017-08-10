/**
 * Created by john on 8/2/17.
 */


function squareEachDigit(num){
    return Number(num.toString().split('').map((x)=>{return Number(x) *Number(x);}).join(''));
}
var ans = squareEachDigit();
console.log(ans);