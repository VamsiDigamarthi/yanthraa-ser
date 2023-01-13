import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

export const getlist = async (req, res) => {
  UserModel.find((err, val) => {
    if (err) {
      console.log("err");
    } else {
      res.status(200).json(val);
    }
  });
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  // const authHeader = req.headers["authorization"];
  // const jwtToken = authHeader.split(" ")[1];
  // console.log(jwtToken);
  // const use = await UserModel.findById(jwtToken);
  // console.log(use);
  try {
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json("update succes");
  } catch (e) {
    res.status(500).json(e);
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  //console.log(`ksks ${id}`);
  const authHeader = req.headers["authorization"];
  const jwtToken = authHeader.split(" ")[1];
  //console.log(jwtToken);
  if (id === jwtToken) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("delete successfully");
    } catch (e) {
      res.status(400).json(e);
    }
  } else {
    res.status(400).json("delete your data only");
  }
  //const { email } = req.query.params;
  //const us = await UserModel.findById({ _id: id });
  //console.log(us);
  //console.log(email);
  // try {
  //   await UserModel.findByIdAndDelete(id);
  //   res.status(200).json("delete successfully");
  // } catch (e) {
  //   res.status(400).json(e);
  // }
};

export const getbyid = async (req, res) => {
  const id = req.params.id;
  try {
    const d = await UserModel.findById({ _id: id });
    res.status(200).json(d);
  } catch (e) {
    res.status(500).json(e);
  }
};
