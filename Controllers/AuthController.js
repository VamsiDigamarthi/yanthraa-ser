import UserModel from "../Models/userModel.js";

export const registerUser = async (req, res) => {
  const { username, password, phone, email } = req.body;

  const newUser = new UserModel({ username, password, email, phone });

  const usera = await UserModel.findOne({ email: email });

  //console.log(usera);

  if (usera === null) {
    try {
      await newUser.save();
      res.status(200).json(newUser);
    } catch (e) {
      res.status(500).json({ message: e.message });
      //res.status(500).json("hi");
    }
  } else {
    res.status(500).json("user already exist");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.status(200).json(user);
      } else {
        res.status(400).json("wrong password");
      }
    } else {
      res.status(404).json("user does not exists");
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
