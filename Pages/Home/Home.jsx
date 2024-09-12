import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import "../Advice/Advice";
import logo from "./logo.svg";
import img1 from "./homeImage.svg";
import img2 from "./doctor.svg";
import vector from "./Vector.svg";
import phone from "./ph_phone-call-fill.svg";
import icon from "./rightIcon.svg";
import DarkFooter from "../../Components/Footer/DarkFooter";
import LoggedNav from "../../Components/LoggedNavbar/LoggedNav";
import axios from "axios";
import { useState, useEffect } from "react";
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get("http://127.0.0.1:5000/@me", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  }

  return (
    <div>
      <img src={logo} className="logo_image" />
      <hr />
      {user != null ? (
        <LoggedNav />
      ) : (
        <div className="navbar">
          <div className="navPart">
            <NavLink to="/chatbot" className="nav__link">
              Chatbot
            </NavLink>
            <NavLink to="/Choose" className="nav__link">
              Questionnaire
            </NavLink>
            <NavLink to="/advice" className="nav__link">
              Advice
            </NavLink>
          </div>
          <div className="navPart">
            <NavLink to="/therapist" className="nav__link">
              Therapist
            </NavLink>
            <NavLink to="/signup" className="nav__link box">
              Sign up
            </NavLink>
            <NavLink to="/login" className="nav__link box">
              Login
            </NavLink>
          </div>
        </div>
      )}
      <div className="def">
        <div className="def_content">
          <p className="title">Anxiety treatment & support</p>
          <p className="paragraph">
            Anxiety is a natural reaction that we will all experience. But for
            many people, persistent anxiety can cause genuine distress and
            interfere with daily life. There are different types of anxiety.
            Whatever form you have, we have proven treatments that can help.
          </p>
        </div>

        <div className="homeImg">
          <img src={img1} alt="image1" />
        </div>
      </div>
      <div className="symptoms_container">
        <div className="left">
          <p className="symp_title">Anxiety symptoms</p>
          <p className="symp_paragraph">
            Anxiety varies in severity from person to person and can affect
            people physically and mentally. Common anxiety symptoms include:
          </p>
        </div>
        <div className="right">
          <div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Persistent worry or fear</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Restlessness</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Concentration problems</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Breathing rapidly</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Sensing impending danger or doom</p>
            </div>
          </div>
          <div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Increased heart rate</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Sweating</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Trembling</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Sleeping problems</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Feeling nervous, restless or tense</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="doctor">
          <img src={img2} />
          <div className="doctor_content">
            <img src={vector} />
            <img src={vector} />
            <p className="doctorParagraph">
              Seeking support for anxiety is a sign of strength, not weakness.
              We can help identify and address the underlying causes of anxiety,
              and provide tried and tested techniques to help manage your
              symptoms.
            </p>
            <hr />
            <p className="doctorParagraph">
              A free, confidential call could quickly put you on the path to
              regaining control. Talk to a qualified professional today.
            </p>
            <div className="one_item_phone">
              <img src={phone} />
              <p className="doctorParagraph">
                <u>0203 326 9160</u>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="help">
        <p className="howDoWeHelp">How do we help people with anxiety?</p>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="help_left">
            <p className="help_title">Virtual assistant</p>
            <p className="help_paragraph">
              You can talk to him about your thoughts and opinions, and he can
              guide you and answer your questions
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="help_right">
            <p className="help_title">Detect anxiety level</p>
            <p className="help_paragraph">
              Through the questionnaire, which you can answer without thinking,
              we can determine the degree of your anxiety
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="help_left">
            <p className="help_title">Detect the level of test anxiety</p>
            <p className="help_paragraph">
              Through a questionnaire that you can answer, which is a special
              type of anxiety
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="help_right">
            <p className="help_title">Start personalized treatment</p>
            <p className="help_paragraph">
              Depending on the results of any of the questionnaires, we can
              diagnose the appropriate treatment for your degree of anxiety
            </p>
          </div>
        </div>
      </div>
      <DarkFooter />
    </div>
  );
};

export default Home;
