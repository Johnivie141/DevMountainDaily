/**
 * Created by john on 8/10/17.
 */
function myFunc(x ='Defaultx',y='yDefault'){

console.log(x);
console.log(y);
}

myFunc(null,13);

// setTimeout will get a closure of the particular instance of the loop

function cycle(){
    for (let i=0;i<5;i++){
        console.log(i);
        setTimeout(function(){
            console.log(i)},500*i)

    }
}

cycle();

const myconst='test';

function constFunc(){
    var myconst='test2';
}
let one =()=>console.log('hey');
one();
// multiple declarations do not use last line as a return value;
let two =(a)=>{
    console.log(1);
    console.log(2);
    return 0;
}

// Multi line
var multi1 = 'line 1' /
        +'line 2';
console.log(multi1);
 var multi2 =`line 1
line 2`;

console.log(multi2);
function restFunc(...arg){

    console.log(arg);
}
restFunc(1,2,3);


let arg4 = (dog,cat,...arg) =>{
    console.log(dog,cat,arg);
}
arg4(1,2,3,4,5);

var arr=[1,2,3,4];
var newArr=[5,6,7,8,9];
newArr.push(...arr);
console.log(newArr);