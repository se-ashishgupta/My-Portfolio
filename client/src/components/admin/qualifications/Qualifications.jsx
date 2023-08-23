import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdCloseCircle } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import {
  addQualification,
  deleteQualification,
  updateQualification,
} from "../../../redux/actions/user";
import Swal from "sweetalert2";

const Qualifications = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [institution_name, setInstitutionName] = useState("");
  const [course, setCourse] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [result_type, setResultType] = useState("");
  const [result_scale, setResultScale] = useState("");
  const [result, setResult] = useState("");

  const [newinstitution_name, setNewInstitutionName] = useState("");
  const [newcourse, setNewCourse] = useState("");
  const [newstate, setNewState] = useState("");
  const [newcity, setNewCity] = useState("");
  const [newcountry, setNewCountry] = useState("");
  const [newstart_date, setNewStartDate] = useState("");
  const [newend_date, setNewEndDate] = useState("");
  const [newresult_type, setNewResultType] = useState("");
  const [newresult_scale, setNewResultScale] = useState("");
  const [newresult, setNewResult] = useState("");
  const [id, seId] = useState("");

  const [popUp, setPopUp] = useState(false);
  const [updatePopPup, setUpdatePopPup] = useState(false);

  const showForm = (e) => {
    setPopUp(!popUp);
  };
  const closeForm = (e) => {
    e.preventDefault();
    setPopUp(!popUp);
  };

  const saveDetails = (e) => {
    e.preventDefault();
    dispatch(
      addQualification(
        institution_name,
        course,
        state,
        city,
        country,
        start_date,
        end_date,
        result_type,
        result_scale,
        result
      )
    );
  };

  const deleteQuali = (id) => {
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
        dispatch(deleteQualification(id));
      }
    });
  };

  const openUpdateForm = (item) => {
    setNewInstitutionName(item.institution_name);
    setNewCourse(item.course);
    setNewCity(item.city);
    setNewState(item.state);
    setNewCountry(item.country);
    setNewStartDate(item.start_date);
    setNewEndDate(item.end_date);
    setNewResultType(item.result_type);
    setNewResultScale(item.result_scale);
    setNewResult(item.result);
    setUpdatePopPup(!updatePopPup);
    seId(item._id);
  };

  const closeUpdateForm = () => {
    setUpdatePopPup(!updatePopPup);
  };

  const updateDetails = () => {
    dispatch(
      updateQualification(
        newinstitution_name,
        newcourse,
        newstate,
        newcity,
        newcountry,
        newstart_date,
        newend_date,
        newresult_type,
        newresult_scale,
        newresult,
        id
      )
    );
  };

  return (
    <div className="editqualification_details">
      <p>{`Qualification ->`}</p>
      <div className="content">
        <div className="add_qualification_btn">
          <button onClick={showForm}>Add Qualification</button>
        </div>

        {/* Add quali form */}
        <form
          method="POST"
          onSubmit={saveDetails}
          className={`add_qualification_form ${
            popUp ? "add_qualification_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Add Qualification</p>
            <IoMdCloseCircle onClick={closeForm} />
          </div>
          <hr />
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="institutionName">Institution Name*</label>
              <input
                type="text"
                name="institutionName"
                id="institutionName"
                value={institution_name}
                placeholder="Your Institution Name"
                onChange={(e) => {
                  setInstitutionName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Name*</label>
              <input
                type="text"
                name="course"
                id="course"
                value={course}
                placeholder="Your Course Name"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                name="state"
                id="state"
                value={state}
                placeholder="Your State"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                placeholder="Your City Name"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input
                type="text"
                name="country"
                id="country"
                value={country}
                placeholder="Your Country Name"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startdate">Start Date *</label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={start_date}
                placeholder="Your Start Date"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enddate">End Date *</label>
              <input
                type="date"
                name="enddate"
                id="enddate"
                value={end_date}
                placeholder="Your End Date"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resulttype">Result Type *</label>
              <input
                type="text"
                name="resulttype"
                id="resulttype"
                value={result_type}
                placeholder="Your Result Type"
                onChange={(e) => {
                  setResultType(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resultScale">Result Scale *</label>
              <input
                type="number"
                name="resultScale"
                id="resultScale"
                value={result_scale}
                placeholder="Your Result Scale"
                onChange={(e) => {
                  setResultScale(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="result">Result *</label>
              <input
                type="number"
                name="result"
                id="result"
                value={result}
                placeholder="Your result"
                onChange={(e) => {
                  setResult(e.target.value);
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

        {/* Quali Item */}
        <div className="qualificationItem">
          {user.qualfications && user.qualfications.length > 0 ? (
            user.qualfications.map((item, index) => (
              <div className="item" key={index}>
                <article>
                  <p className="inst_name">
                    <span>
                      <FaUserGraduate />{" "}
                    </span>
                    {item.course}
                  </p>
                  <p>{`${item.city}, ${item.state}, ${item.country}`}</p>
                  <p>
                    {item.start_date} to {item.end_date}
                  </p>
                </article>
                <article>
                  <MdDelete
                    className="qualiDelete"
                    onClick={() => deleteQuali(item._id)}
                  />
                  <FiEdit
                    className="qualiUpdate"
                    onClick={() => openUpdateForm(item)}
                  />
                </article>
              </div>
            ))
          ) : (
            <p> No Qualification Yet</p>
          )}
        </div>

        {/* Update quali form */}
        <form
          method="POST"
          onSubmit={updateDetails}
          className={`add_qualification_form ${
            updatePopPup ? "add_qualification_form_show" : null
          }`}
        >
          <div className="fromheader">
            <p>Update Qualification</p>
            <IoMdCloseCircle onClick={closeUpdateForm} />
          </div>
          <hr />
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="institutionName">Institution Name*</label>
              <input
                type="text"
                name="institutionName"
                id="institutionName"
                value={newinstitution_name}
                placeholder="Your Institution Name"
                onChange={(e) => {
                  setNewInstitutionName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Name*</label>
              <input
                type="text"
                name="course"
                id="course"
                value={newcourse}
                placeholder="Your Course Name"
                onChange={(e) => {
                  setNewCourse(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State *</label>
              <input
                type="text"
                name="state"
                id="state"
                value={newstate}
                placeholder="Your State"
                onChange={(e) => {
                  setNewState(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City *</label>
              <input
                type="text"
                name="city"
                id="city"
                value={newcity}
                placeholder="Your City Name"
                onChange={(e) => {
                  setNewCity(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <input
                type="text"
                name="country"
                id="country"
                value={newcountry}
                placeholder="Your Country Name"
                onChange={(e) => {
                  setNewCountry(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="startdate">Start Date *</label>
              <input
                type="date"
                name="startdate"
                id="startdate"
                value={newstart_date}
                placeholder="Your Startv Date"
                onChange={(e) => {
                  setNewStartDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="enddate">End Date *</label>
              <input
                type="date"
                name="enddate"
                id="enddate"
                value={newend_date}
                placeholder="Your End Date"
                onChange={(e) => {
                  setNewEndDate(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resulttype">Result Type *</label>
              <input
                type="text"
                name="resulttype"
                id="resulttype"
                value={newresult_type}
                placeholder="Your Result Type"
                onChange={(e) => {
                  setNewResultType(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="resultScale">Result Scale *</label>
              <input
                type="number"
                name="resultScale"
                id="resultScale"
                value={newresult_scale}
                placeholder="Your Result Scale"
                onChange={(e) => {
                  setNewResultScale(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="result">Result *</label>
              <input
                type="number"
                name="result"
                id="result"
                value={newresult}
                placeholder="Your result"
                onChange={(e) => {
                  setNewResult(e.target.value);
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

export default Qualifications;
