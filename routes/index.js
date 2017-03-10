var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest: 'uploads/', limits:{ fileSize:100000 }, });
var fs = require('fs-extra');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*fs.remove('./uploads/', err => {
  });*/
  return res.render('index');

});

router.post('/', upload.single('file'), function(req, res, next) {
  const { size } = req.file;
  res.json({ size });
  if(file){
      fs.remove('./uploads/', err => {
        if(err) { console.log("Errore"); }
        else { console.log("succesfully deleted. "); }
      });
  }
  return;
});

module.exports = router;
