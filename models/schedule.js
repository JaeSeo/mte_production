const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  sa: {
    type: String,
    required: true
  },
  sales: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  start_time: {
    type: String,
    required: true
  },
  end_time: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  }  
});

module.exports = mongoose.model('Schedule', scheduleSchema);