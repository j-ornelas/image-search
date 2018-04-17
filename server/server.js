const express = require('express');
const app = express();
const port = 4200;
const title =  `Image Search App`;
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const helpers = require('./../helpers/helpers.js')

app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/', bodyParser.json());


app.get('/images', function(req, res){
  let query = req.query.q
  let spellChecked = helpers.spellCheck(query)
  let toSearch;
  if (JSON.parse(req.query.autoCorrectOverride)){
    toSearch = query
  } else {
    toSearch = spellChecked
  }
  // console.log(req.query.autoCorrectOverride)
  // console.log('toSearch', toSearch)
  // console.log('query', query)
  // console.log('spellChecked', spellChecked)
  console.log(req.query.imagesNum)
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
      query: query,
      spellCheckedQuery: spellChecked
    }
    res.send(queryResponse)
  })
  .catch((error) => {
    console.log(error)
  })
});


app.listen(port, () => console.log(`${title} listening on port ${port}!`));
