import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    fees : {
        initial : {
            type : Number,
            default : 0,
        },
        semester : {
            registration : [
                {
                    type : Number,
                    default : 0,
                }
            ],
            sem : [
                {
                    type : Number,
                    default : 0,
                }
            ]
        }
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;