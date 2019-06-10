var express = require('express');
const path = require('path');
var app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => console.log(`App Running ${port}`))
