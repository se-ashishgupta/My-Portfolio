import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import iconBack from "../../../assets/images/skillBack.png";
import { MdDelete, MdUpdate } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {
  addProject,
  deleteProject,
  updateProject,
} from "../../../redux/actions/user";

const Projects = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [fromPopUp, setFromPopPup] = useState(false);
  const [updatePopPup, setUpdatePopPup] = useState(false);

  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech_stack, setTechStack] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [repository_url, setRepoUrl] = useState("");
  const [live_url, setLiveUrl] = useState("");

  const [newimage, setNewImage] = useState("");
  const [newimagePrev, setNewImagePrev] = useState("");
  const [newtitle, setNewTitle] = useState("");
  const [newdescription, setNewDescription] = useState("");
  const [newtech_stack, setNewTechStack] = useState("");
  const [newstart_date, setNewStartDate] = useState("");
  const [newend_date, setNewEndDate] = useState("");
  const [newrepository_url, setNewRepoUrl] = useState("");
  const [newlive_url, setNewLiveUrl] = useState("");
  const [id, setId] = useState("");

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
        setImagePrev(Reader.result);
      }
    };
  };

  const updateHandleIconChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setNewImage(Reader.result);
        setNewImagePrev(Reader.result);
      }
    };
  };

  const addProjectHandler = (e) => {
    e.preventDefault();
    dispatch(
      addProject(
        title,
        description,
        tech_stack,
        start_date,
        end_date,
        repository_url,
        live_url,
        image
      )
    );
  };

  const deletSkill = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProject(id));
      }
    });
  };

  const openUpdateForm = (item) => {
    setNewImagePrev(item.image.url);
    setNewTitle(item.title);
    setNewDescription(item.description);
    setNewTechStack(item.tech_stack);
    setNewStartDate(item.start_date);
    setNewEndDate(item.end_date);
    setNewRepoUrl(item.repository_url);
    setNewLiveUrl(item.live_url);
    setUpdatePopPup(true);
    setId(item._id);
  };

  const updateProjectHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProject(
        newtitle,
        newdescription,
        newtech_stack,
        newstart_date,
        newend_date,
        newrepository_url,
        newlive_url,
        newimage,
        id
      )
    );
  };

  return (
    <div className="editproject_deatils">
      <p>{`Projects ->`}</p>
      <div className="content">
        <div className="add_project_btn">
          <button onClick={() => setFromPopPup(true)}>Add Projects</button>
        </div>

        {/* Add Project form */}
        <form
          method="POST"
          onSubmit={addProjectHandler}
          className={`add_project_form ${
            fromPopUp ? "add_project_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Add Project</p>
            <IoMdCloseCircle onClick={() => setFromPopPup(false)} />
          </div>
          <hr />
          <div className="file_section">
            <div className="form-group">
              <img
                src={`${imagePrev ? imagePrev : iconBack}`}
                alt="demoimage"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleIconChange}
                name="image"
                id="image"
                required
              />
            </div>
          </div>
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="title">Project Title*</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="Your Project Name"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startdate">Project Start Date*</label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={start_date}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enddate">Project End Date*</label>
              <input
                type="date"
                name="enddate"
                id="enddate"
                value={end_date}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="repositoryurl">Project Repository Url*</label>
              <input
                type="text"
                name="repositoryurl"
                id="repositoryurl"
                value={repository_url}
                placeholder="Your Project Repository Url"
                onChange={(e) => {
                  setRepoUrl(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="liveurl">Project Live Url*</label>
              <input
                type="text"
                name="liveurl"
                id="liveurl"
                value={live_url}
                placeholder="Your Project Live Url"
                onChange={(e) => {
                  setLiveUrl(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectdescription">Project Decsription *</label>
              <textarea
                type="text"
                name="projectdescription"
                id="projectdescription"
                value={description}
                placeholder="Your Project Decsription"
                rows={3}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="techstack">Project Tech Stack*</label>
              <textarea
                type="text"
                name="techstack"
                id="techstack"
                value={tech_stack}
                rows={3}
                placeholder="Your About Skill"
                onChange={(e) => {
                  setTechStack(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="button_section">
            <button type="submit">Click to Add</button>
          </div>
        </form>
        <hr />

        {/* Skill Item */}
        <div className="projectItem">
          {user.projects && user.projects.length > 0 ? (
            user.projects.map((item, index) => (
              <div className="item" key={index}>
                <article>
                  <img
                    src={`${item.image?.url ? item.image?.url : iconBack}`}
                    alt="icon"
                  />
                  <div>
                    <div>
                      <h1>{`${item.title} `}</h1>
                      <div>
                        <a href={item.repository_url} target="blank">
                          Repo
                        </a>
                        <a href={item.live_url} target="blank">
                          Live
                        </a>
                      </div>
                    </div>

                    <p>{`${new Date(item.start_date).toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })} - ${
                      item.end_date
                        ? new Date(item.start_date).toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                          })
                        : "Present"
                    }`}</p>
                    <p>{`${item.description} `}</p>
                    <p>{`${item.tech_stack}`}</p>
                  </div>
                </article>
                <article>
                  <MdDelete
                    className="projectDelete"
                    onClick={() => deletSkill(item._id)}
                  />
                  <FiEdit
                    className="projectUpdate"
                    onClick={() => openUpdateForm(item)}
                  />
                </article>
              </div>
            ))
          ) : (
            <p> No Projects Yet</p>
          )}
        </div>

        {/* Update Project form */}
        <form
          method="POST"
          onSubmit={updateProjectHandler}
          className={`add_project_form ${
            updatePopPup ? "add_project_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Update Project</p>
            <IoMdCloseCircle onClick={() => setUpdatePopPup(false)} />
          </div>
          <hr />
          <div className="file_section">
            <div className="form-group">
              <img
                src={`${newimagePrev ? newimagePrev : iconBack}`}
                alt="demoimage"
              />
              <input
                type="file"
                accept="image/*"
                onChange={updateHandleIconChange}
                name="image"
                id="image"
              />
            </div>
          </div>
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="title">Project Title*</label>
              <input
                type="text"
                name="title"
                id="title"
                value={newtitle}
                placeholder="Your Project Name"
                onChange={(e) => {
                  setNewTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startdate">Project Start Date*</label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={newstart_date}
                onChange={(e) => {
                  setNewStartDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enddate">Project End Date*</label>
              <input
                type="date"
                name="enddate"
                id="enddate"
                value={newend_date}
                onChange={(e) => {
                  setNewEndDate(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="repositoryurl">Project Repository Url*</label>
              <input
                type="text"
                name="repositoryurl"
                id="repositoryurl"
                value={newrepository_url}
                placeholder="Your Project Repository Url"
                onChange={(e) => {
                  setNewRepoUrl(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="liveurl">Project Live Url*</label>
              <input
                type="text"
                name="liveurl"
                id="liveurl"
                value={newlive_url}
                placeholder="Your Project Live Url"
                onChange={(e) => {
                  setNewLiveUrl(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectdescription">Project Decsription *</label>
              <textarea
                type="text"
                name="projectdescription"
                id="projectdescription"
                value={newdescription}
                placeholder="Your Project Decsription"
                rows={3}
                onChange={(e) => {
                  setNewDescription(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="techstack">Project Tech Stack*</label>
              <textarea
                type="text"
                name="techstack"
                id="techstack"
                value={newtech_stack}
                rows={3}
                placeholder="Your About Skill"
                onChange={(e) => {
                  setNewTechStack(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="button_section">
            <button type="submit">Click to Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Projects;
