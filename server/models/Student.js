import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: { //
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    middleName: { // 
      type: String,
      default : "",
      max: 50,
    },
    lastName: { // 
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: { //
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: { //
      type: String,
      required: true,
      min: 5,
    },
    mode : { //
        type : String ,
        enum : ["Regular","Dasa","Board","Lateral"],
        required : true,
    },
    gender: { //
      type: String,
      enum: ['Male', 'Female', 'Other'],
  },
  category : { //
    type : String,
    enum : ["General" , "Obc", "Sc/St", "Others"],
},
  picturePath: { 
    type: String,
    default: "",
  },
    altEmail : String,
    mothersName : {
        type: String,
        default : "",
    },
    fathersName : {
        type : String,
        default : "",
    },
    dateOfBirth : Date,
    mobileNumber : String,
    altMobileNumber : String,
    nationality : Boolean,
    income : Number,
    disability : Boolean,
    verificationStatus : { // very important
        type : String,
        enum : ["Verified","Unverified","Pending"],
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;