'use strict'
const express = require ('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use('/a', express.static(path.join(__dirname, '../client')))
// app.use(bodyParser.json())

app.get('/a', function(req, res){
  res.sendFile(path.join(__dirname, '../client/locker.html'))
});

app.post('/b', function(req, res){
  console.log('REQUEST👹',req)
  res.send('Got a POST request')
});

app.listen(3000, function () {
  console.log('listening on port 3000')

});
