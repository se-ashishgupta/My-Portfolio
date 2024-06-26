import jwt from "jsonwebtoken";

export const sendCookies = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Developemnt" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Developemnt" ? false : true,
    })
    .json({
      success: true,
      user,
      message,
    });
};
