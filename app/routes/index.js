'use strict';

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

module.exports = function (app) {
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
});
//Base case user visits home screen

};
