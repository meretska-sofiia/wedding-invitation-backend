const { Schema, model } = require("mongoose");

const guestSchema = new Schema(
  {
    guest1: { type: String, required: true },
    willCome1: { type: Boolean, dafault: false },
    guest2: { type: String, required: true },
    willCome2: { type: Boolean, dafault: false },
    guest3: { type: String, required: true },
    willCome3: { type: Boolean, dafault: false },
    guest4: { type: String, required: true },
    willCome4: { type: Boolean, dafault: false },
  },
  { versionKey: false, timestamps: true }
);

const Guest = model("guest", guestSchema);

module.exports = { Guest };
