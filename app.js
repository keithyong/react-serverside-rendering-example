require('babel/register');
var express = require('express');
var React = require('react');
var ReactApp = React.createFactory(require('./ReactApp.jsx'));
var ReactDOMServer = require('react-dom/server');
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res) {
    var reactHtml = ReactDOMServer.renderToString(ReactApp({}));

    res.render('index.jade', {reactOutput: reactHtml});
});

app.listen(7749);
