import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  subject: {
    type: String,
    required: [true, "Please Enter Your Subject"],
  },
  message: {
    type: String,
    required: [true, "Please Enter Your Message"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Messages = mongoose.model("Messages", messageSchema);
