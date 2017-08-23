/**
 * Created by john on 8/14/17.
 */
// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
//
// Examples:
//     validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
//
// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParens(str){

let validArray=str.split('');
let stack=[];
for (let i=0;i<validArray.length;i++){

    switch(validArray[i]) {
        case '(':
            stack.push('(');
            break;
        case ')':
            if (stack.length < 1) {
                return false;
            }
            stack.pop();
    }


    }
    return stack.length===0;
    
}
console.log(

validParens( ")(" )

)