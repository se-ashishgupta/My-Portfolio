import { catchAsyncErorr } from "../middlewares/catchAsyncErorr.js";
import ErrorHandler from "../middlewares/error.js";
import { Messages } from "../models/messages.js";
import { User } from "../models/user.js";

export const sendMessage = catchAsyncErorr(async (req, res, next) => {
  const { name, email, subject, message, toMessage } = req.body;

  if (!name || !email || !subject || !message)
    return next(new ErrorHandler("Please enter all fields", 400));

  let msg = await Messages.create({
    name,
    email,
    subject,
    message,
  });

  const user = await User.findOne({ email: toMessage });
  user.messages.unshift(msg._id);
  await user.save();

  res.status(200).json({
    success: true,
    message: "Message Send Sucessfully",
  });
});
