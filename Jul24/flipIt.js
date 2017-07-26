/**
 * Created by john on 7/24/17.
 */

function flipIt(array){
var out=[];
for (var i=array.length -1;i>=0;i--) out.push(array[i]);

return out;
}





var numbers={
    age:30,
    score:100,
    length:12,
    year:2015
};

function objectLooper(obj){
    for(var prop in obj){
        if (obj.hasOwnProperty(prop))
            obj[prop]=20;
    }

    return obj;
}

objectLooper(numbers);
console.log(JSON.stringify(numbers))