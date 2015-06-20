var fs=require('fs');
var getContactFileName = function(id) {

  // We assume contacts are stored under data sub-folder
  return "data\\" + id + "-Contact.json";
}

var express = require('express');
var arr=new Array(),index=0;
var router = express.Router();

/* GET contacts */
router.get('/:id', function(req, res, next) {
  id=req.params.id;
  res.send(arr[+req.params.id]);
});

router.post('/', function(req, res, next) {
  fs.writeFileSync(getContactFileName(index),JSON.stringify(req.body));
  index++;
  res.send(""+(index-1));
  //console.log(req.body);
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  var a1=req.body;
  var id=+req.params.id
  var a2=fs.readFileSync(getContactFileName(id));
  console.log(getContactFileName(+req.params.id));
  console.log(a2);

  a2=JSON.parse(a2);
  
  for(var i in a1)
  {
    a2[i]=a1[i];
     console.log(a1[i]);
     console.log(a2[i]);
  }
  console.log(id);
  fs.writeFileSync(getContactFileName(id),JSON.stringify(a2));

console.log(a2);

  res.send(a2);
});

module.exports = router;
