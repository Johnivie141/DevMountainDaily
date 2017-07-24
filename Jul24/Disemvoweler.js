/**
 * Created by john on 7/24/17.
 */


function Disemvoweler(str){
return str.replace(/[aeiouAEIOU]/g,"");


}

/* Tutor
function remVowel(str){
var out=[];
var vowels=[aeiuoAEIOU];
for (var i=0;i< str.length;i++)
{
   if (vowels.indexOf(str[i])==-1){
    out.push(str[i]);
   }


 */

//expected "Ths wbst s fr lsrs LL!".
var ans=Disemvoweler("This website is for losers LOL!");
console.log(ans);