
function printerError(str)
{
 var errors=str.replace(/[a-m]/g,"");
return errors.length + "/" + str.length;
}

var ans=printerError("aaaxbbbyyhwawiwjjjwwm");

