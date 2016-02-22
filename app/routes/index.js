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
	  console.log("code reached")
	  console.log(req.body); //form fields
  	/* example output:
  	{ title: 'abc' }
  	 */
  	console.log(req.file); //form files
  	/* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
	 */
	  res.status(204).end();
  });


};
