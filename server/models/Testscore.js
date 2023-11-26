import mongoose from "mongoose";

const testscoreSchema = mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    jee : {
      applicationNumber : {
        type : String,
        unique : true,
      },
      rollNumber : {
        type : String,
        unique : true,
      },
      maths : Number,
      chemistry : Number,
      physics : Number,
      finalScore : Number,
    },
    tenth : {
        board : {
            type : String ,
            enum : ["CBSE","ICSE","Other"],
        },
        schoolName : String,
        schoolAddress : String,
        country : String,
        district : String,
        state : String,
        city : String,
        zip : String,
        gpa : {
            type : Number,
            min : 0,
            max : 10
        },
        maxMarks : Number,
    },
    twelth : {
        board : {
            type : String ,
            enum : ["CBSE","ICSE","Other"],
        },
        schoolName : String,
        schoolAddress : String,
        country : String,
        district : String,
        state : String,
        city : String,
        zip : String,
        physics : Number ,
        physicsMax : Number,
        chemistry : Number ,
        chemistryMax : Number,
        maths : Number ,
        mathsMax : Number,
        finalScore : Number,
        total : Number,
    },
  },
  { timestamps: true }
);

const Testscore = mongoose.model("Testscore", testscoreSchema);

export default Testscore;