'use strict';

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var express = require('express');

module.exports = function (app) {
var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//app.use(express.json());     
//app.use(express.urlencoded());

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  })
  
app.post('/', upload.single('upl'), function(req,res){
  	console.log(req.file.size);//form file size
  	res.json("File size is: " + req.file.size + "bytes");
	  res.status(204).end();
  });


};
