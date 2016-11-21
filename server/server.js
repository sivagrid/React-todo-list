var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

app = express();

var complier = webpack(config);

app.use(webpackDevMiddleware(complier, {noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(complier));

app.use(express.static('./dist'));

app.use('/', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
})

var port = 3000;

app.listen(port, function(err) {
  if(err) throw err;
  console.log('Express server listening on port', port);
})
