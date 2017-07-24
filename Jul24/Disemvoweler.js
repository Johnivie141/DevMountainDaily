/**
 * Created by john on 7/24/17.
 */


function Disemvoweler(str){
return str.replace(/[aeiouAEIOU]/g,"");


}

//expected "Ths wbst s fr lsrs LL!".
var ans=Disemvoweler("This website is for losers LOL!");
console.log(ans);