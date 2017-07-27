/**
 * Created by john on 7/27/17.
 */
// Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str){
    return str.replace(/(WUB)+/g," ").trim();
}
var ans= songDecoder("WUBWUBIWUBAMWUBWUBX");
console.log("[" + ans + "]");
ans =songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB");
console.log("[" + ans+ "]");