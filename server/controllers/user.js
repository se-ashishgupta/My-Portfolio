import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookies } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";
import cloudinary from "cloudinary";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookies(user, res, `Welcome Back Admin`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));

    const hasedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      name,
      email,
      password: hasedPassword,
    });

    sendCookies(user, res, `Register Successfully`, 201);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne()
      .populate("qualfications skills projects")
      .select("-messages");
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
export const getmyProfile = async (req, res) => {
  const user = await User.findById(req.user._id).populate(
    "qualfications skills projects messages"
  );
  res.status(200).json({
    success: true,
    user,
  });
};
export const logout = (req, res) => {
  const { serial_key } = req.body;

  if (serial_key) {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Developemnt" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Developemnt" ? false : true,
      })
      .json({
        success: true,
        message: "Logout SuccessFully",
      });
  }

};

export const updateProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const {
      fname,
      lname,
      phone,
      email,
      gender,
      experiance,
      dob,
      address,
      country,
      state,
      city,
      zipcode,
      about,
      avatar,
    } = req.body;
    if (fname) user.fname = fname;
    if (lname) user.lname = lname;
    if (phone) user.phone = phone;
    if (email) user.email = email;
    if (gender) user.gender = gender;
    if (experiance) user.experiance = experiance;
    if (dob) user.dob = dob;
    if (address) user.address = address;
    if (country) user.country = country;
    if (state) user.state = state;
    if (city) user.city = city;
    if (zipcode) user.zipcode = zipcode;
    if (about) user.about = about;

    //user Avatar
    if (avatar) {
      await cloudinary.v2.uploader.destroy(user.avatar.public_id);

      const myCloud = await cloudinary.v2.uploader.upload(avatar, {
        folder: "portfolio/avatars",
      });
      user.avatar.public_id = myCloud.public_id;
      user.avatar.url = myCloud.secure_url;
    }

    await user.save();

    res.status(200).json({
      sucess: true,
      message: "Profile Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};
