/**
 * Interpret dice notation and generate result.
 *
 * @param {String} input Dice notation
 * @param {Boolean} verbose Determines verbose output
 * @returns {Number|Object} Returns an object if `verbose` is true,
 * otherwise returns integer.
 */
var roll = function (str, verbose) {
    // Good luck fellow warrior!
    console.log('str ' + str);
    console.log("verbose " +verbose);

    if (typeof str !=="string") return  false;
    dice=[];

    str=str.replace(/(\d+) *d *(\d+)/g,function(match,diecount,dietype){
        for (let i=0;i<diecount;i++) dice.push(Math.floor(Math.random()*dietype) +1);
        return "";
    });
    str=str.replace(/d *(\d+)/g,function(match,dietype){
        dice.push(Math.floor(Math.random()*dietype) +1);
        return "";
    });
    let modifier=0;
    console.log("debug1");
    str=str.replace(/([\+\-]) *(\d+)/g,function(match,sign,number){
        number=Number(number);
        modifier +=(sign==="-")?-number:number;
        return "";
    });
    str =str.replace(/ /g,"");
    console.log(`str \[${str}\]`);
    console.log("len" +str.length);
    if (str.length >0) return false;
    let sum = dice.reduce((count,value)=>{return count+value},0);

    let ans="";
    if (!verbose) ans= sum + modifier;
    else ans= {dice:dice,modifier:modifier};

    return ans;
}

