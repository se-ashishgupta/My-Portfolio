import ErrorHandler from "../middlewares/error.js";
import { Projects } from "../models/projects.js";
import { User } from "../models/user.js";
import cloundinary from "cloudinary";

export const addProject = async (req, res, next) => {
  try {
    const {
      title,
      description,
      tech_stack,
      start_date,
      end_date,
      repository_url,
      live_url,
      image,
    } = req.body;

    let project = await Projects.findOne({ title });

    if (project) {
      return next(new ErrorHandler("Project Already Exists", 400));
    }

    const myCloud = await cloundinary.v2.uploader.upload(image, {
      folder: "portfolio/projects",
    });

    project = await Projects.create({
      title,
      description,
      tech_stack,
      start_date,
      end_date,
      repository_url,
      live_url,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      user: req.user._id,
    });

    const user = await User.findById(req.user._id);
    user.projects.unshift(project._id);
    await user.save();

    res.status(201).json({
      success: true,
      message: "Project Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);
    const {
      title,
      description,
      tech_stack,
      start_date,
      end_date,
      repository_url,
      live_url,
      image,
    } = req.body;

    if (title) project.title = title;
    if (description) project.description = description;
    if (tech_stack) project.tech_stack = tech_stack;
    if (start_date) project.start_date = start_date;
    if (end_date) project.end_date = end_date;
    if (repository_url) project.repository_url = repository_url;
    if (live_url) project.live_url = live_url;

    if (image) {
      await cloundinary.v2.uploader.destroy(project.image.public_id);

      const myCloud = await cloundinary.v2.uploader.upload(image, {
        folder: "portfolio/projects",
      });

      project.image.public_id = myCloud.public_id;
      project.image.url = myCloud.secure_url;
    }

    await project.save();

    res.status(200).json({
      success: true,
      message: "Project Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    const project = await Projects.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    await cloundinary.v2.uploader.destroy(project.image.public_id);

    const user = await User.findById(req.user._id);
    const index = user.projects.indexOf(project._id);
    user.projects.splice(index, 1);
    await Projects.findByIdAndDelete(project);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Project Deleted Succesfully",
    });
  } catch (error) {
    next(error);
  }
};
