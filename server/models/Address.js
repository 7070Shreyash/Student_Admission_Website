import mongoose from "mongoose";

const addressSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    cAddress : {
      address : String,
      country : String,
      district : String,
      state : String,
      city : String ,
      zip : String,
    },
    pAddress : {
      address : String,
      country : String,
      district : String,
      state : String,
      city : String ,
      zip : String,
    }
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

export default Address;