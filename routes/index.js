var express = require('express');
var router = express.Router();
var request = require("request");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/book',(req,res,next)=>{
  var options = { method: 'POST',
  url: 'https://fcm.googleapis.com/fcm/send',
  headers: 
   { 'Postman-Token': '329bf948-fa3d-4f15-8fcc-af6ab44edfcd',
     'Cache-Control': 'no-cache',
     'Content-Type': 'application/json',
     Authorization: 'key=AAAAS8JNs-k:APA91bEtT1vRS1RDIb08l3SuEoEqeZLcI4tjNstYIEO613gSFv1nOATa2jWm4nLCPcDVPwwn8io6co7Ss81--kRyj4adhivlXzwekxUeXi1c2UgJ63yMxv8lueIw9RMcLHmRsXvm81aW' },
  body: 
   { notification: 
      { title: 'Firebase',
        body: 'Firebase is awesome',
        click_action: 'http://localhost:8081/',
        icon: 'http://url-to-an-icon/icon.png' },
     to: 'dDpKv5b9jQM:APA91bGXq9ziiLYXAPE-mYjKYmyzGxnocOxCOQjuri3XI3nW4gVwNdUhs9jUwf3jnm9M0_4lzlSB2vlC_nVMvaw9gpfrgSbkdbD-DSq1NHOxMhm2moYJkdHQ5KaIxr4QxQQS2aB1N2iE' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.status(200).send(body);
});
})
module.exports = router;
