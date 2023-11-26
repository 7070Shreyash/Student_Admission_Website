import Student from "../models/Student.js";
import Address from "../models/Address.js";
import Testscore from "../models/Testscore.js";
import Branch from "../models/Branch.js";
import Payment from "../models/Payment.js";
/* READ */

export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    delete student.password;
    res.status(200).json(student);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const submitInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      picturePath,
      altEmail,
      mothersName ,
      fathersName ,
      dateOfBirth ,
      mobileNumber,
      altMobileNumber,
      nationality,
      income ,
      disability,
     } = req.body;address
     
     const student = await Student.findById(id);
     student.picturePath = picturePath;
     student.altEmail = altEmail;
     student.mothersName = mothersName;
     student.fathersName = fathersName;
     student.dateOfBirth = dateOfBirth;
     student.mobileNumber = mobileNumber;
     student.altMobileNumber = altMobileNumber;
     student.nationality = nationality;
     student.income = income;
     student.disability = disability;
     const updatedStudent =  await student.save();
     delete student.password;
     res.status(200).json(updatedStudent);
  } catch (err) {
    res.status(404).json({ message : err.message });
  }
};

  
export const submitAddrController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      cAddress,
      pAddress
    } = req.body;
    let temp = await Address.findOne({ studentId : id });
    if(!temp) {
      temp = new Address({
        studentId : id,
        cAddress,
        pAddress
      });

    } else {
      temp.cAddress = cAddress;
      temp.pAddress = pAddress;
    }
    const savedAddress = await temp.save();
    res.status(200).json(savedAddress);

  } catch (err) {
    res.status(404).json({ message : err.message });
  }
};

  
export const submitExamController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
        jee,
        tenth,
        twelth,
    } = req.body;
    let temp = await Testscore.findOne({ studentId : id });
    if(!temp) {
      temp = new Testscore({
        studentId : id,
        jee,
        tenth,
        twelth
      });
     
    } else {
      temp.jee = jee;
      temp.tenth = tenth;
      temp.twelth = twelth;
    }
    const savedExam =  await temp.save();
    res.status(200).json(savedExam);
  } catch (err) {
    res.status(404).json({ message : err.message });
  }

};

  
export const submitBranchController = async (req, res) => {
  try {
    const { id } = req.params;
    const {
        category
    } = req.body;
    let temp = await Branch.findOne({ studentId : id });
    if(!temp) {
      temp = new Branch({
        studentId : id,
        alotted : "",
        category,
        waitlist : [],
      });
     
    } else {
      temp.category = category;
    }
    const savedBranch =  await temp.save();
    res.status(200).json(savedBranch);
  } catch (err) {
    res.status(404).json({ message : err.message });
  }

};

  
export const submitFeesController = async (req, res) => {
  try {
    const { id } = req.params;
    let temp = await Payment.findOne({ studentId : id });
    if(!temp) {
      temp = new Payment({
        studentId : id,
        fees : true,
      });
     
    } else {
      res.status(404).json({message : "Sorry , you have already paid the fees"});
    }
    const savedFees =  await temp.save();
    const student = Student.findById(id);
    student.verificationStatus = "Pending"
    await student.save();
    res.status(200).json(savedFees);
  } catch (err) {
    res.status(404).json({ message : err.message });
  }
};

export const trackStudent = async (req,res) => {
  try{
    const { id } = req.body;
    const address = await Address.findOne({studentId : id});
    const branch = await Branch.findOne({studentId : id});
    const payment = await Payment.findOne({studentId : id});
    const testScore = await Testscore.findOne({studentId : id});

    if(!address || !branch || !payment || !testScore) {
      res.status(404).json({message : "Sorry , the following request cannot be processed"});
    } else {
      res.status(200).json({ address , branch , payment , testScore });
    }

  } catch (err) {
    res.status(404).json({message : err.message});
  }
};