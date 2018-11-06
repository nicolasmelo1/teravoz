var mongo = require('./mongoose')

const ItemSchema = new mongo.Schema({
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });