var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    number: {
        type: Number, 
        required: true
    }
  }
);

//Export model
module.exports = mongoose.model('User', UserSchema);
