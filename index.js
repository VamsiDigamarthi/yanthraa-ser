import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";

import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";

const app = express();
app.use(express.json());

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://vamsi:vamsi@sandbox.n7xt48j.mongodb.net/yanthraa?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(process.env.PORT || 5001, () => console.log("listening at 5001"))
  )
  .catch((erroe) => console.log(erroe));

app.use("/auth", AuthRoute);

app.use("/user", UserRoute);
