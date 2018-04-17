const helpers = require('./../helpers/helpers.js');
const testDictionary = {dictionary:{'hello':1, 'cake':1, 'cat':1, 'ddd':1}}

test('expects formatQuery to format a query for the URL', () => {
  expect(helpers.formatQuery('cake cat', testDictionary)).toBe('cake%20cat');
});

test('expects formatQuery to find incorrect words and format them', () => {
  expect(helpers.formatQuery('ceku ca3t', testDictionary)).toBe('cake%20cat');
});

test('expects formatQuery to work with single words', () => {
  expect(helpers.formatQuery('cake', testDictionary)).toBe('cake');
});

test('expects allVowelIterations to give all variations of "ceku"', () => {
  expect(helpers.allVowelIterations('ceku', testDictionary)).toEqual(
    [ 'caka','cake','caki', 'cako','caku','ceka','ceke','ceki',
      'ceko','ceku','cika','cike','ciki','ciko','ciku','coka','coke',
      'coki','coko','coku','cuka','cuke','cuki','cuko','cuku' ]);
});

test('expects allVowelIterations to work with no vowels', () => {
  expect(helpers.allVowelIterations('ddd', testDictionary)).toEqual(['ddd']);
});

test('expects spellCheck to return a spellchecked word', () => {
  expect(helpers.spellCheck('ceku', testDictionary)).toBe('cake');
});
