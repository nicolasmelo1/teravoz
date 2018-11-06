var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {
        type: String, 
        required: true, 
        max: 200
    },
    number: {
        type: Number, 
        required: true, 
        max: 100
    }
  }
);

//Export model
module.exports = mongoose.model('User', UserSchema);
