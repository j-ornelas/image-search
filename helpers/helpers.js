// see Tests/helpers.test.js

const formatQuery = (str, dictionary) => {
  let array = str.toString().split(' ');
  let newArray = [];
  array.forEach((element) => {
    newArray.push(spellCheck(element, dictionary));
  });
  return newArray.join('%20');
};

const spellCheck = (word, dictionary) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let wordToCheck = '';
  for (var i = 0; i < word.length; i ++){
    if (alphabet.includes(word[i].toLowerCase())){
      wordToCheck += word[i].toLowerCase();
    }
  }
  return inDictionary(wordToCheck, dictionary);
};

const inDictionary = (word, dictionary) => {
  // returns the word immediately if it's found in the dictionary
  if (dictionary.dictionary[word]){
    return word;
  }
  const allIterations = allVowelIterations(word);
  for (var i = 0; i < allIterations.length; i++){
    if (dictionary.dictionary[allIterations[i]]){
      return allIterations[i];
    }
  }
};

var allVowelIterations = function(word) {
  //recursive function to find all vowel iterations
  // ex: cake - '[caka, cake, caki, cako...cuku]'
  const vowels = 'aeiou';
  let iterations = [];
  const maxLength = word.length;
  const recurse = (strSoFar, length) => {
    if (strSoFar.length === maxLength && !iterations.includes(strSoFar)){
      iterations.push(strSoFar);
      return;
    }
    if (vowels.includes(word[length])){
      for (var j = 0; j < vowels.length; j++){
        recurse(strSoFar + vowels[j], strSoFar.length + 1);
      }
    } else {
      strSoFar += word[length];
      recurse(strSoFar, strSoFar.length);
    }
  };
  recurse("", 0);
  return iterations;
};

module.exports.formatQuery = formatQuery;
module.exports.spellCheck = spellCheck;
module.exports.allVowelIterations = allVowelIterations;
module.exports.inDictionary = inDictionary;
