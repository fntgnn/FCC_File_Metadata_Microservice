var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs-extra');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('file'), function(req, res, next) {
  console.log(req.file);
  res.json({ size: req.file.size });

  fs.remove('./uploads/', err => {
  if (err) return console.error(err)

  console.log('success!') // I just deleted my entire HOME directory.
})

});

module.exports = router;
