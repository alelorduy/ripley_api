const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const recipientSchema = new Schema(
  {
    name: String,
    rut: String,
    email: String,
    phone: String,
    bank: String,
    accountType: String,
    accountNumber: String,
    transfers: [{ type: Schema.Types.ObjectId, ref: "Transfer" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Recipient", recipientSchema);
