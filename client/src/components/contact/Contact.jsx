import React, { useState } from "react";
import PageHeader from "../layout/PageHeader";
import { BiLocationPlus, BiPhoneCall, BiWorld } from "react-icons/bi";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/actions/user";

const Contact = ({ user }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage(name, email, subject, message, user.email));
  };

  return (
    <div className="contact">
      <PageHeader title={"Contact"} />
      <section>
        <div className="left">
          <form onSubmit={submitHandler}>
            <div className="group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="group">
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>

        <div className="right">
          <div className="contact-us">
            <h3>Contact Us</h3>
            <h1>Get in Touch</h1>
            <p>{user.about}</p>
          </div>

          <article className="contact-details">
            <div className="contact-item">
              <span>
                <BiPhoneCall />
              </span>
              <div>
                <span>Call Us</span>
                <p>{`+91${user.phone}`}</p>
              </div>
            </div>

            <div className="contact-item">
              <span>
                <AiOutlineMail />
              </span>
              <div>
                <span>Email Us</span>
                <p>{`${user.email}`}</p>
              </div>
            </div>

            <div className="contact-item">
              <span>
                <BiWorld />
              </span>
              <div>
                <span>Website</span>
                <p>{`www.https://creativeprogrammer.onrender.com`}</p>
              </div>
              <p></p>
            </div>

            <div className="contact-item">
              <span>
                <BiLocationPlus />
              </span>
              <div>
                <span>Address</span>
                <p>{`${user.address}`}</p>
              </div>
            </div>
          </article>

          <article className="social-accounts">
            <h1>Fallow Me On</h1>

            <div>
              <a href="/" target="_blank">
                <CiFacebook />
              </a>

              <a href="/" target="_blank">
                <CiTwitter />
              </a>
              <a href="/" target="_blank">
                <CiInstagram />
              </a>
              <a href="/" target="_blank">
                <CiYoutube />
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Contact;
