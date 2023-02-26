const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: false,
  },
  maker: {
    type: String,
    required: true,
  },
  maker: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = model("Product", ProductSchema);
