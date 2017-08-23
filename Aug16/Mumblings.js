/**
 * Created by john on 8/16/17.
 */
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd");    ==>  "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); ==>  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    ==>  "C-Ww-Aaa-Tttt"

function accum(str){
 return str.split('').map((ch,index)=>{
     newch = ch.toUpperCase();
     for (let i=1;i<=index;i++) newch+=ch.toLowerCase();
     return newch;


 }).join('-');
}

var ans=accum("RqaExty");
console.log(ans);Array(11).join("a")