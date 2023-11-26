import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fees : Boolean
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;