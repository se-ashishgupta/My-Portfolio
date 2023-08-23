import { Skills } from "../models/skills.js";
import { User } from "../models/user.js";
import cloundinary from "cloudinary";

export const addSkill = async (req, res, next) => {
  try {
    const { icon, name, type, about, rating } = req.body;

    let skill = await Skills.findOne({ name });

    // if (skill) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Skill Already Exists",
    //   });
    // }

    const myCloud = await cloundinary.v2.uploader.upload(icon, {
      folder: "portfolio/skills",
    });

    skill = await Skills.create({
      icon: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      name,
      type,
      about,
      rating,
      user: req.user._id,
    });

    const user = await User.findById(req.user._id);
    user.skills.unshift(skill._id);
    await user.save();

    res.status(201).json({
      success: true,
      message: "Skill Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateSkill = async (req, res, next) => {
  try {
    const skill = await Skills.findById(req.params.id);
    const { icon, name, type, about, rating } = req.body;

    if (name) skill.name = name;
    if (type) skill.type = type;
    if (about) skill.about = about;
    if (rating) skill.rating = rating;

    if (icon) {
      await cloundinary.v2.uploader.destroy(skill.icon.public_id);

      const myCloud = await cloundinary.v2.uploader.upload(icon, {
        folder: "portfolio/skills",
      });

      skill.icon.public_id = myCloud.public_id;
      skill.icon.url = myCloud.secure_url;
    }

    await skill.save();

    res.status(200).json({
      success: true,
      message: "Skill Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skills.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill Not Found",
      });
    }

    await cloundinary.v2.uploader.destroy(skill.icon.public_id);

    const user = await User.findById(req.user._id);
    const index = user.skills.indexOf(skill._id);
    user.skills.splice(index, 1);
    await Skills.findByIdAndDelete(skill);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Skill Deleted Succesfully",
    });
  } catch (error) {
    next(error);
  }
};
