const mongoose = require("mongoose");

// schema for the contact information
const cartSchema = new mongoose.Schema(
  {
    // menuId: {
    //   type: String,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

// model for using the schema
const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
