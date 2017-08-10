/**
 * Created by john on 8/7/17.
 */
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.
function humanTime(seconds){

    let hours = Math.floor(seconds/(60*60));
    let minutes = Math.floor( (seconds - hours*60*60)/60);

    let nSeconds = seconds - hours * 60*60 - minutes *60;

    let hourStr = hours<10?'0' + hours.toString() : hours.toString();
    let minuteStr = minutes<10? '0'+minutes.toString() : minutes.toString();
    let secondStr = seconds <10? '0' + nSeconds.toString() : nSeconds.toString();
    
    return `${hourStr}:${minuteStr}:${secondStr}`;
}

var ans = humanTime(8000);
console.log(ans);