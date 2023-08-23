import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import iconBack from "../../../assets/images/skillBack.png";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {
  addSkill,
  deleteSkill,
  updateSkill,
} from "../../../redux/actions/user";
import Swal from "sweetalert2";
const Skills = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [fromPopUp, setFromPopPup] = useState(false);
  const [updatePopPup, setUpdatePopPup] = useState(false);

  const [icon, setIcon] = useState("");
  const [iconPrev, setIconPrev] = useState("");
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [type, setSkillType] = useState("");
  const [rating, setRating] = useState("");

  const [newicon, setNewIcon] = useState("");
  const [newiconPrev, setNewIconPrev] = useState("");
  const [newname, setNewName] = useState("");
  const [newabout, setNewAbout] = useState("");
  const [newtype, setNewSkillType] = useState("");
  const [newrating, setNewRating] = useState("");
  const [id, setId] = useState("");

  const handleIconChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setIcon(Reader.result);
        setIconPrev(Reader.result);
      }
    };
  };

  const updateHandleIconChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setNewIcon(Reader.result);
        setNewIconPrev(Reader.result);
      }
    };
  };

  const addSkillHandler = (e) => {
    e.preventDefault();
    dispatch(addSkill(icon, name, type, about, rating));
  };

  const deleteSkillHandler = (id) => {
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
        dispatch(deleteSkill(id));
      }
    });
  };

  const openUpdateForm = (item) => {
    setNewIconPrev(item.icon.url);
    setNewName(item.name);
    setNewAbout(item.about);
    setNewSkillType(item.type);
    setNewRating(item.rating);
    setUpdatePopPup(true);
    setId(item._id);
  };

  const updateSkillHandler = (e) => {
    e.preventDefault();
    dispatch(updateSkill(newicon, newname, newtype, newabout, newrating, id));
  };

  return (
    <div className="editskill_deatils">
      <p>{`Skills ->`}</p>
      <div className="content">
        <div className="add_skill_btn">
          <button onClick={() => setFromPopPup(true)}>Add Skill</button>
        </div>

        {/* Add Skill form */}
        <form
          method="POST"
          onSubmit={addSkillHandler}
          className={`add_skill_form ${
            fromPopUp ? "add_skill_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Add Skill</p>
            <IoMdCloseCircle onClick={() => setFromPopPup(!fromPopUp)} />
          </div>
          <hr />
          <div className="file_section">
            <div className="form-group">
              <img src={`${iconPrev ? iconPrev : iconBack}`} alt="icon" />
              <input
                type="file"
                accept="image/*"
                onChange={handleIconChange}
                name="profileimg"
                id="profileimg"
                required
              />
            </div>
          </div>
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="name">Skill Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Your Skill Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="skilltype">Skill Type *</label>
              <select
                name="skilltype"
                id="skilltype"
                value={type}
                onChange={(e) => setSkillType(e.target.value)}
              >
                <option value="">Select Skill Type</option>
                <option value="Programming Language">
                  Programming Language
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Database">Database</option>
                <option value="Soft Skill">Soft Skill</option>
                <option value="Course Work">Course Work</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating *</label>
              <input
                type="number"
                name="rating"
                id="rating"
                value={rating}
                placeholder="Your Rating Out of 10"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="about">About Skill*</label>
              <textarea
                type="text"
                name="about"
                id="about"
                value={about}
                rows={6}
                placeholder="Your About Skill"
                onChange={(e) => {
                  setAbout(e.target.value);
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
        <div className="skillItem">
          {user.skills && user.skills.length > 0 ? (
            user.skills.map((item, index) => (
              <div className="item" key={index}>
                <article>
                  <img
                    src={`${item.icon?.url ? item.icon?.url : iconBack}`}
                    alt="icon"
                  />
                  <div>
                    <h1>{`${item.name} `}</h1>
                    <p>{`${item.type} | ${item.rating}`}</p>
                    <p>{item.about}</p>
                  </div>
                </article>
                <article>
                  <MdDelete
                    className="skillDelete"
                    onClick={() => deleteSkillHandler(item._id)}
                  />
                  <FiEdit
                    className="skillUpdate"
                    onClick={() => openUpdateForm(item)}
                  />
                </article>
              </div>
            ))
          ) : (
            <p> No Skills Yet</p>
          )}
        </div>

        {/* Update Skill  */}
        <form
          method="POST"
          onSubmit={updateSkillHandler}
          className={`add_skill_form ${
            updatePopPup ? "add_skill_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Update Skill</p>
            <IoMdCloseCircle onClick={() => setUpdatePopPup(false)} />
          </div>
          <hr />
          <div className="file_section">
            <div className="form-group">
              <img src={`${newiconPrev ? newiconPrev : iconBack}`} alt="icon" />
              <input
                type="file"
                accept="image/*"
                defaultValue={newicon}
                onChange={updateHandleIconChange}
                name="profileimg"
                id="profileimg"
              />
            </div>
          </div>
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="name">Skill Name*</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newname}
                placeholder="Your Skill Name"
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="skilltype">Skill Type *</label>
              <select
                name="skilltype"
                id="skilltype"
                value={newtype}
                onChange={(e) => setNewSkillType(e.target.value)}
              >
                <option value="">Select Skill Type</option>
                <option value="Programming Language">
                  Programming Language
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Database">Database</option>
                <option value="Soft Skill">Soft Skill</option>
                <option value="Course Work">Course Work</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating *</label>
              <input
                type="number"
                name="rating"
                id="rating"
                value={newrating}
                placeholder="Your Rating Out of 10"
                onChange={(e) => {
                  setNewRating(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="about">About Skill*</label>
              <textarea
                type="text"
                name="about"
                id="about"
                value={newabout}
                rows={6}
                placeholder="Your About Skill"
                onChange={(e) => {
                  setNewAbout(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="button_section">
            <button type="submit">Click to Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Skills;
