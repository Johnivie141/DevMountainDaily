// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples:

// returns "theStealthWarrior"
function toCamelCase(str)
{
    return str.replace(/\b(\w)/g,(x)=>x.toUpperCase()).replace(/[^A-Za-z0-9]/g,"");
}

ans=toCamelCase("the-stealth-warrior");
console.log(ans);

// returns "TheStealthWarrior"
ans=toCamelCase("The_Stealth_Warrior")
console.log(ans);