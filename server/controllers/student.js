import Student from "../models/Student.js";
import Address from "../models/Address.js";
import Testscore from "../models/Testscore.js";
import Branch from "../models/Branch.js";

/* REGISTER USER */
export const submitOrChangeInfo = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      picturePath,
      mode,
      dob,
      mothersName,
      fathersName,
      mobileNumber,
      nationality,
      gender,
      altMoblileNumber,
      category,
      income,
      disability,
    } = req.body;

    const { userId } = req.params;

    let user = await Student.findById(userId);
    const password = user.password;
    const status = user.verificationStatus;

    const newData = {
        firstName,
        middleName,
        lastName,
        email,
        password,
        picturePath,
        mode,
        dateOfBirth : dob,
        mothersName,
        fathersName,
        mobileNumber,
        nationality,
        gender,
        altMoblileNumber,
        category,
        income,
        disability,
        verificationStatus : status,
    }

    user.set(newData);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const submitOrChangeAddress = async (req, res) => {
  try {
    const {
        address,
        country,
        district,
        state,
        city,
        zip,
    } = req.body ;
    const { userId } = req.params;

    let updatedAddress = await Address.find({ userId });
    const newData = {
        address,
        country,
        district,
        state,
        city,
        zip,
    };

    if(!updatedAddress) {
        updatedAddress = new Address(newData);
    } else {
        updatedAddress.set(newData);
    }
    await updatedAddress.save();
    res.status(201).json(updatedAddress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const submitOrChangeMarks = async (req,res) => {
  try {
    const { 
        jee,
        tenth,
        twelth,
    } = req.body;
    const { userId } = req.params;

    const newData = {
        userId,
        jee,
        tenth,
        twelth
        }

    let updatedResponse = Testscore.find({ userId });
    if(!updatedResponse) {
        updatedResponse = new Testscore(newData);
    } else {
        updatedResponse.set(newData);
    }

    await updatedResponse.save();
    res.status(201).json(updatedResponse);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const submitOrChangePreference = async (req,res) => {
    try {
      const { 
        
      } = req.body;
      const { userId } = req.params;
  
      const newData = {
        
          }
  
      let updatedResponse = Testscore.find({ userId });
      if(!updatedResponse) {
          updatedResponse = new Testscore(newData);
      } else {
          updatedResponse.set(newData);
      }
  
      await updatedResponse.save();
      res.status(201).json(updatedResponse);
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  