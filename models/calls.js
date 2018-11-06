var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CallSchema = new Schema(
  {
    type: {
        type: String, 
        required: true, 
        max: 200
    },
    callId: {
        type: String, 
        required: true, 
        max: 100
    },
    direction: {
        type: String,
        enum: ['inbound', 'outbound', 'internal'],
        required: true
    },
    code: {
        type: Number
    },
    ourNumber:{
        type: Number
    },
    theirNumber:{
        type: Number
    },
    theirNumberType:{
        type: String,
        enum: ['free', 'landline', 'mobile', 'internal', 'anonymous', 'command']
    }
  }
);

//Export model
module.exports = mongoose.model('Call', CallSchema);