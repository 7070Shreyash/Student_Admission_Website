import mongoose from "mongoose";

const branchSchema = mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    alotted : {
        type : String,
        default : "",
    },
    category : {
        name : {
            type : String,
            required : true,
        },
        preferences : [
            {
                type : String,
            }
        ],
    },
    waitlist : [
        {
            type : Number,
        }
    ],
  },
  { timestamps: true }
);

const Branch = mongoose.model("Branch", branchSchema);

export default Branch;