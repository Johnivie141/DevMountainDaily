/**
 * Created by john on 7/26/17.
 */
// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

// for a more advanced problem write a function that works with multiple words in a string:
// 'hello friend' would be 'ellohay iendfray'
// 'i live in the igloo' would be 'iway ivelay inway hetay iglooway'


// using replace allow me to account for punctuation.
// split and map would not work with varied punctuation.

function pigLatin(str){
    return str.replace(/\b([a-z]+)\b/gi,function(word){
      if (word.match(/^[^aeiou]/))
      {
         return word.replace(/^([^aeiou]+)(.*$)/, "$2$1ay");
      }
      else
      {
        return word + "way";
      }





    });

}


var ans=pigLatin("i live in the igloo.");
console.log(ans);
