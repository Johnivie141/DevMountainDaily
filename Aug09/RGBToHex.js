/**
 * Created by john on 8/9/17.
 */
// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3



function decRGB(r,g,b){
    let str="#";
    for (i=0;i<3;i++)
        str += (arguments[i] >255)?(255).toString(16):(arguments[i]<0)?(0).toString(16):arguments[i].toString(16);


   return str;
}
var ans = decRGB(255,255,255);
console.log(ans);