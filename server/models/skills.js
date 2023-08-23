import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  about: {
    type: String,
  },
  rating: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  icon: {
    public_id: String,
    url: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Skills = mongoose.model("Skills", skillSchema);
