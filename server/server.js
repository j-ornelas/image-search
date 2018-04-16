const express = require('express');
const app = express();
const port = 4200;
const title =  `Image Search App`;
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');


app.use('/', express.static(path.join(__dirname, '../client/public')));
app.use('/', bodyParser.json());

app.get('/images', function(req, res){
  axios(`https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,comp,referral_destinations&sort_order=best&phrase=cat
`, {
    headers: {
      'Api-Key': req.query.api
    }
  })
  .then((response) => {
    console.log(response.data.images)
    res.send(response.data.images)
  })
  .catch((error) => {
    console.log(error)
  })
});


app.listen(port, () => console.log(`${title} listening on port ${port}!`));
