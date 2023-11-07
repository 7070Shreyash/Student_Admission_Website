import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      mode,
      gender,
      category,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new Student({
      firstName,
      middleName,
      lastName,
      email,
      password: passwordHash,
      picturePath : "",
      mode,
      dateOfBirth : new Date(1970,10,12),
      mothersName : "",
      fathersName : "",
      mobileNumber  : "",
      nationality : true,
      gender,
      altMobileNumber : "",
      category,
      income : 0,
      disability : false,
      verificationStatus : "Unverified",
    });
    const savedUser= await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "Student does not exist. " });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const adminLogin = async (req,res) => {
  try {
    const {email , password } = req.body;
    const user = await Admin.findOne({email : email});
    if(!user) return res.status(400).json({ msg: "Admin does not exist. " });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });
    const token = jwt.sign({ id: user._id , isAdmin : true }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

