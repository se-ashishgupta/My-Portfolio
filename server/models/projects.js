import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tech_stack: {
    type: String,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  repository_url: {
    type: String,
  },
  live_url: {
    type: String,
  },
  image: {
    public_id: String,
    url: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Projects = mongoose.model("Projects", projectSchema);
