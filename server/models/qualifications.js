import mongoose from "mongoose";

const qualificationSchema = new mongoose.Schema({
  institution_name: {
    type: String,
  },
  course: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  start_date: {
    type: String,
  },
  end_date: {
    type: String,
  },
  result_type: {
    type: String,
  },
  result_scale: {
    type: Number,
  },
  result: {
    type: Number,
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

export const Qualifications = mongoose.model(
  "Qualifications",
  qualificationSchema
);
