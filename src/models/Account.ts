import { Schema, model } from "mongoose";

const accountSchema = new Schema(
  {
    username: { type: String, required: true },
    funds: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Account = model("Account", accountSchema);

export default Account;
