var express = require('express');
const path = require('path');
var app = express();
const port = 8080;

app.use('/', express.static(path.join(__dirname, 'build')));

app.listen(port, () => console.log(`App Running ${port}`))