var express = require('express');
var app = express();
var multer = require('multer');
app.use('/',express.static('task-III'));

var name;
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'task-III/images/')
  },
  filename: function (req, file, cb) {
     var  extArray = file.mimetype.split("/");
     var  extension = extArray[extArray.length - 1];
    cb(null,req.body.fname)
  }
})
 
var upload = multer({ storage: storage });
 
app.post('/uploadFile', upload.single('file'), function (req, res, next) {
    
    console.log("success"); 
    name=req.body.fname;
    console.log(name);
    console.log(req.file); // form files
    res.end("success");
});

app.listen(8082,function(){
console.log("server is listening at port 8082");
});
