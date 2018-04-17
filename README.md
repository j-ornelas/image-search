# Image-Search
A minimalist React/Express image search application using Getty Images feat: spellcheck & infinite scroll.
![alt text](https://i.imgur.com/DIpu9fo.jpg)
## To run locally:
> npm install

> npm start

## To run test suite:
> npm test

App will be live at localhost:4200

## Dev Notes:

### Dictionary Object
In order to implement a spell check, I created a dictionary object that contains a massive list of english words. It uses key/value pairs and lives in the server's memory, so lookup is instant.

### Punctuation Removal
The spellchecker will remove non-letter characters from a string before searching the image bank. It checks against

