# Image-Search
A minimalist React/Express image search application using Getty Images feat: spellcheck & infinite scroll.
![alt text](https://i.imgur.com/DIpu9fo.jpg)

## To run locally:
> npm install

> npm start

App will be live at localhost:4200

## To run test suite:
> npm test

## Dev Notes:

### Punctuation Removal
The spellchecker will remove non-letter characters from a string before searching the image bank. It checks against all letters of the alphabet, which is better than removing specific types of punctuation, as it is less prone to error. 

### Checking Vowel Variations
In order to spellcheck a word, an array is created that contains all variations of the vowels in a word. For example: 'ceku' would be ['caka', 'cake, 'caki', 'cako', 'caku', ..., 'cuku']. In order to save time, This function is only called if the searched word is not in the dictionary. 

### Dictionary Object
In order to implement a spell check, I created a dictionary object that contains a massive list of English words. It uses key/value pairs and lives in the server's memory, so lookup is instant. Performing the spellcheck on the server rather than the client keeps the client from needing to downloading the relatively large dictionary file. 

### Infinite Scroll vs Pagination
Pagination is a more traditional way to see more photos on a page, however, I felt that the design of the page leaned itself to an infinite scroll more. It allows the page to maintain a minimalist aesthetic, and it's more mobile friendly. The server only requests images from the server that it needs to display, it does not download them all and show only a set amount at a time.

### Did you mean...?
A user has an option to override the spellcheck and search for their original search input.
