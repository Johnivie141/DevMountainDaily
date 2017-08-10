// Write a function which will take an array of strings and return an array of strings with the needless directions removed (WEST and EAST, NORTH and SOUTH cancel each other out).
// If everything cancels out, return an empty array (stay in place);

// For example:
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []

const opposites={
    'NORTH':'SOUTH',
    'SOUTH':'NORTH',
    'EAST':'WEST',
    'WEST':'EAST'
};


function directionReducer(directions){
    newDirections=[];

    for (let i=0;i<directions.length;i++)
    {
        if (newDirections[newDirections.length - 1]===opposites[directions[i]])  newDirections.pop();
        else newDirections.push(currentdirection);
    }
    return newDirections;
}

var ans = directionReducer(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
console.log(ans);

var ans = directionReducer([["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]);
console.log(ans);