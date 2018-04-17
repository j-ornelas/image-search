const dictionary = require('./../server/words_dictionary.js');

const spellCheck = (word) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // let wordToCheck = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let wordToCheck = '';
  for (var i = 0; i < word.length; i ++){
    if (alphabet.includes(word[i].toLowerCase())){
      wordToCheck += word[i].toLowerCase();
    }
  }

  return inDictionary(wordToCheck);
}

var avi = function(word) {
  const vowels = 'aeiou';
  let iterations = [];
  const maxLength = word.length


  const recurse = (strSoFar, index) => {
    if (strSoFar.length === maxLength){
      iterations.push(strSoFar)
      return;
    }

    for (var i = index; i < word.length; i++){
      if (vowels.includes(word[i])){
        for (var j = 0; j < vowels.length; j++){
          recurse(strSoFar + vowels[j], index + 1)
        }
      } else {
        strSoFar += word[i]
        recurse(strSoFar, ++index)
      }
    }
  }

  recurse("", 0)
  return iterations
}




const inDictionary = (word) => {
  // return dictionary.dictionary[word];
  // returns the word immediately if it's found in the dictionary
  if (dictionary.dictionary[word]){
    console.log('found in dictionary', word)
    return word;
  }

  const allIterations = avi(word);
  for (var i = 0; i < allIterations.length; i++){
    if (dictionary.dictionary[allIterations[i]]){
      console.log('found in spellcheck', allIterations[i]);
      return allIterations[i];
    }
  }
  console.log('NOT FOUND IN DICTIONARY')
}


module.exports.spellCheck = spellCheck;
