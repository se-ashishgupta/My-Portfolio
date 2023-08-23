import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount } from "../../../redux/actions/user";

const Account = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.login);

  const [email, setEmail] = useState(user.email);
  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [gender, setGender] = useState(user.gender);
  const [experiance, setExperiance] = useState(user.experiance);
  const [dob, setDob] = useState(user.dob);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [country, setCountry] = useState(user.country);
  const [state, setState] = useState(user.state);
  const [city, setCity] = useState(user.city);
  const [zipcode, setZipcode] = useState(user.zipcode);
  const [about, setAbout] = useState(user.about);
  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState(user.avatar?.url);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
        setAvatarPrev(Reader.result);
      }
    };
  };
  const saveDetails = (e) => {
    e.preventDefault();
    dispatch(
      updateAccount(
        email,
        fname,
        lname,
        gender,
        experiance,
        dob,
        about,
        phone,
        address,
        country,
        state,
        city,
        zipcode,
        avatar
      )
    );
  };

  return (
    <div className="editaccount_details">
      <p>{`Account ->`}</p>
      <div className="content">
        <form method="POST" className="editaccount_details_from">
          <div className="file_section">
            <div className="form-group">
              <img src={avatarPrev} alt="proimg" />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                name="profileimg"
                id="profileimg"
              />
            </div>
          </div>
          <div className="input_section">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">First Name*</label>
              <input
                type="text"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                name="firstname"
                id="firstname"
                value={fname}
                placeholder="Your First Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name*</label>
              <input
                type="text"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                name="lastname"
                id="lastname"
                value={lname}
                placeholder="Your Last Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender*</label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experiance">Experiance*</label>
              <input
                type="number"
                onChange={(e) => {
                  setExperiance(e.target.value);
                }}
                name="experiance"
                id="experiance"
                value={experiance}
                placeholder="Your Experiance"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth*</label>
              <input
                type="date"
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                name="dob"
                id="dob"
                value={dob}
                placeholder="Your Date of Birth"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone*</label>
              <input
                type="number"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                name="phone"
                id="phone"
                value={phone}
                placeholder="Your Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address1">Address*</label>
              <input
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address1"
                id="address1"
                value={address}
                placeholder="Your Address1"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country*</label>
              <input
                type="text"
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                name="country"
                id="country"
                value={country}
                placeholder="Your Country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State*</label>
              <input
                type="text"
                onChange={(e) => {
                  setState(e.target.value);
                }}
                name="state"
                id="state"
                value={state}
                placeholder="Your state"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City*</label>
              <input
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                name="city"
                id="city"
                value={city}
                placeholder="Your City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zip Code*</label>
              <input
                type="text"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                name="zipcode"
                id="zipcode"
                value={zipcode}
                placeholder="Your Zipcode"
              />
            </div>

            <div className="form-group">
              <label htmlFor="about">About*</label>
              <textarea
                onChange={(e) => {
                  setAbout(e.target.value);
                }}
                name="about"
                id="about"
                value={about}
                placeholder="Your About"
                rows={6}
              />
            </div>
          </div>
          <div className="button_section">
            <input
              type="submit"
              name="register"
              id="register"
              className="form_submit"
              value="Save Details"
              onClick={saveDetails}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
