const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({

  name: String,

  ram: String,

  cpu: String,

  storage: String,

  price: Number

});

module.exports = mongoose.model(
  'Plan',
  planSchema
);
