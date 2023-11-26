import express from "express";
import {
  getStudent,
  submitInfoController,
  submitAddrController,
  submitExamController,
  submitBranchController,
  submitFeesController,
  trackStudent
} from "../controllers/student.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getStudent);
router.post("/:id/submitInfo",verifyToken,submitInfoController);
router.post("/:id/submitAddr",verifyToken,submitAddrController);
router.post("/:id/submitExam",verifyToken,submitExamController);
router.post("/:id/submitBranch",verifyToken,submitBranchController);
router.post("/:id/submitFees",verifyToken,submitFeesController);
router.get("/track",verifyToken,trackStudent);
// router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
// router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;


