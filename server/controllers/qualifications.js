import { User } from "../models/user.js";
import { Qualifications } from "../models/qualifications.js";

export const addQualification = async (req, res, next) => {
  try {
    const {
      institution_name,
      course,
      state,
      city,
      country,
      start_date,
      end_date,
      result_type,
      result_scale,
      result,
    } = req.body;
    const qualfication = await Qualifications.create({
      institution_name,
      course,
      state,
      city,
      country,
      start_date,
      end_date,
      result_type,
      result_scale,
      result,
      user: req.user._id,
    });

    const user = await User.findById(req.user._id);
    user.qualfications.unshift(qualfication._id);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Qualification Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteQualification = async (req, res, next) => {
  try {
    const quali = await Qualifications.findById(req.params.id);
    if (!quali) {
      return res.status(404).json({
        success: false,
        message: "Qualification Not Found",
      });
    }

    const user = await User.findById(req.user._id);
    const index = user.qualfications.indexOf(quali._id);
    user.qualfications.splice(index, 1);
    await Qualifications.findByIdAndDelete(quali);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Qualification Deleted Succesfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateQualification = async (req, res, next) => {
  try {
    const quali = await Qualifications.findById(req.params.id);
    const {
      institution_name,
      course,
      state,
      city,
      country,
      start_date,
      end_date,
      result_type,
      result_scale,
      result,
    } = req.body;

    if (institution_name) quali.institution_name = institution_name;
    if (course) quali.course = course;
    if (state) quali.state = state;
    if (city) quali.city = city;
    if (country) quali.country = country;
    if (start_date) quali.start_date = start_date;
    if (end_date) quali.end_date = end_date;
    if (result_type) quali.result_type = result_type;
    if (result_scale) quali.result_scale = result_scale;
    if (result) quali.result = result;

    await quali.save();

    res.status(200).json({
      success: true,
      message: "Qualification Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};
