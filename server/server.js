const express = require('express');
const app = express();
const port = 4200;
const title =  `Image Search App`;
const path = require('path');
const bodyParser = require('body-parser');


app.use('/', express.static(path.join(__dirname, '../client/public')))
app.use('/', bodyParser.json())


app.listen(port, () => console.log(`${title} listening on port ${port}!`))
