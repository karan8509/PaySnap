import { model, now, Schema } from "mongoose";
import { Model } from "mongoose";
// import Razorpay from "razorpay";

const PaymentSchema = new Schema({
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  razorpay_signature: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default Model("payment", PaymentSchema);
