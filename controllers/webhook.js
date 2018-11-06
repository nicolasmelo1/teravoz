var express = require('express');
var router = express.Router();
var call = require('../models/calls.js');
/* POST webhook */
router.post('/', function(req, res, next) {
  const event = req.body
  console.info('[POST] Recieved Event:', event);

  call.create({
    type: req.body.type,
    callId: req.body.call_id,
    direction: req.body.direction,
    code: parseInt(req.body.code),
    ourNumber: parseInt(req.body.our_number),
    theirNumber: parseInt(req.body.their_number),
    theirNumberType: req.body.their_number_type}, function (err, small) {
      if (err) return handleError(err);
      console.log('Saved');
    });
  var teste = call.find({ callId: req.body.call_id }).exec(function(error, result){
    if(error){
      console.log(error);
    } else {
      console.log(result);
    }
  });
  console.log(teste);
  res.json({
    status: 'ok'
  });
  try {
    if(event.type === 'call.standby'){
      delegate(CREDENTIALS, event.call_id)
    }
  }
  catch(err) {
    res.statusCode(500)
  }
});


module.exports = router;
