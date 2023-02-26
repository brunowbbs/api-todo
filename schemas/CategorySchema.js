const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  icon: String,
});

module.exports = model("Category", CategorySchema);
