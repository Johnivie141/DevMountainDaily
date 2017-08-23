/**
 * Created by john on 8/16/17.
 */
// Given a two-dimensional array representation of a glass of mixed liquids,
// sort the array such that the liquids appear in the glass based on their density.
// (Lower density floats to the top) The width of the glass will not change from top to bottom

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// [                            [
// ['H', 'H', 'W', 'O'],        ['O','O','O','O']
// ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
// ['H', 'H', 'O', 'O']         ['H','H','H','H']
// ]                           ]
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.


function flatten(array){
    return array.reduce((newArray,element)=> {
        let items = Array.isArray(element) ? flatten(element) : [element];
        return newArray.concat(items);
    },[]);
}
function unFlatten(arr,flatArray,posObject){
    return arr.map((element,index)=>{
        return Array.isArray(element) ?unFlatten(element,flatArray,posObject) : flatArray[posObject["pos"]++];

    });

}


function liquidDensity(glass){
    // Flatten array Assuming Only 2 dimensions
var flatArray = flatten(glass);

let sortOrder=["O","W","H"];

flatArray = flatArray.sort(function(x,y){return sortOrder.indexOf(x) - sortOrder.indexOf(y);});

let posObject ={
    pos:0
}

//function unFlatten(array,flatArray,posObject){
glass = unFlatten(glass,flatArray,posObject);

return glass;
}


var ans = liquidDensity(  [['H', ['H'], 'W'], ['W', 'W'],  ['H', 'H', 'O', 'O']] );
console.log(ans);