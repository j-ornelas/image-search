const express = require('express');
const app = express();
const port = 4200;
const title =  `Image Search App`;
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const helpers = require('./../helpers/helpers.js')
const dictionary = require('./words_dictionary')

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/', bodyParser.json());


app.get('/images', function(req, res){
  let originalQuery = JSON.stringify(req.query.q)
  let spellCheckedQuery = helpers.formatQuery(originalQuery, dictionary)
  let toSearch;
  if (JSON.parse(req.query.autoCorrectOverride)){
    toSearch = originalQuery
  } else {
    toSearch = spellCheckedQuery
  }
  let urlBase = `https://api.gettyimages.com/v3/search/images`;
  let urlQuery = `?fields=title,preview,comp&sort_order=best&phrase=${toSearch}&page=1&page_size=${req.query.imagesNum}`;
  axios.get(urlBase + urlQuery, {
    headers: {
      'Api-Key': req.query.api
    }
  })
  .then((response) => {
    let queryResponse = {
      images: response.data.images,
      query: originalQuery,
      spellCheckedQuery: spellCheckedQuery.split('%20').join(" ")
    }
    res.send(queryResponse)
  })
  .catch((error) => {
    console.log(error)
  })
});

app.listen(port, () => console.log(`${title} listening on port ${port}!`));
