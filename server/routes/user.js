import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";

import {
  getmyProfile,
  register,
  login,
  logout,
  getUser,
  updateProfile,
} from "../controllers/user.js";

import {
  addQualification,
  deleteQualification,
  updateQualification,
} from "../controllers/qualifications.js";

import { addSkill, deleteSkill, updateSkill } from "../controllers/skills.js";

import {
  addProject,
  deleteProject,
  updateProject,
} from "../controllers/projects.js";
import { sendMessage } from "../controllers/messages.js";

const router = express.Router();

router.get("/me", getUser);

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.get("/profile", isAuthenticated, getmyProfile);
router.put("/updatedetails", isAuthenticated, updateProfile);

router.post("/addqualification", isAuthenticated, addQualification);
router.delete("/deletequalification/:id", isAuthenticated, deleteQualification);
router.put("/updatequalification/:id", isAuthenticated, updateQualification);

router.post("/addskill", isAuthenticated, addSkill);
router.delete("/deleteskill/:id", isAuthenticated, deleteSkill);
router.put("/updateskill/:id", isAuthenticated, updateSkill);

router.post("/addproject", isAuthenticated, addProject);
router.delete("/deleteproject/:id", isAuthenticated, deleteProject);
router.put("/updateproject/:id", isAuthenticated, updateProject);

router.post("/sendmessage", sendMessage);

export default router;
