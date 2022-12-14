const mongoose = require("mongoose");

const ngoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    area:{
      type: String,
      required: true,

    },
    contact:{
      type: String,
      required: true,

    },

    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ngo", ngoSchema);
