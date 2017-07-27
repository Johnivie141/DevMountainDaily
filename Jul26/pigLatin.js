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
// step 1 find words \b[a-z]+\b  IS wordbreak followed by letters followed by a wordbreak
// replace allows you to write a function to calculate the replacement text it takes multiple parameters which are the matched text values
// match allows us to match on a regular expression
// [^aeiou] means not a vowel
// if so we replace all the non vowel letters up to the first vowel.
//

function pigLatin(str){
    return str.replace(/\b([a-z]+)\b/gi,function(word){
      if (word.match(/^[^aeiou]/))
      {
         return word.replace(/^([^aeiou][^aeiouy]*)(.*$)/, "$2$1ay");
      }
      else
      {
        return word + "way";
      }





    });

}


var ans=pigLatin("i live in your igloo sky.");
console.log(ans);
