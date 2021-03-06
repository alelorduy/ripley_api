const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const transferSchema = new Schema(
  {
    recipient: { type: Schema.Types.ObjectId, ref: "Recipient" },
    amount: {
      type: Number,
      required: [true, "amount is required"],
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Transfer", transferSchema);
