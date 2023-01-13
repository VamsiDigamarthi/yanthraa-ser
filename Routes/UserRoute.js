import express from "express";
import {
  deleteUser,
  getbyid,
  getlist,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/list", getlist);

router.get("/:id", getbyid);

export default router;
