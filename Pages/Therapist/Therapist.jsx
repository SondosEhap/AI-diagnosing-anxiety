import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import img1 from "./therapistImg.svg";
import img2 from "./therapistImg2.svg";
import img3 from "./therapistImg3.svg";
import phone from "./phone.svg";
import icon from "./rightIcon.svg";
import DarkFooter from "../../Components/Footer/DarkFooter";
import DarkInfo from "../../Components/TherapistInfo/Darktheme/DarkInfo";

const Therapist = () => {
  return (
    <div>
      <Navbar />
      <div className="def" style={{ marginTop: 95 }}>
        <div className="def_content">
          <p className="title">Talking Therapy</p>
          <p className="paragraph">
            Talking therapy is for anyone experiencing difficulties in life.
            There are many types, but most involve speaking to a trained
            therapist about your thoughts, feelings and behaviours to help you
            make sense of things and overcome complicated issues.
          </p>
        </div>
        <div className="homeImg">
          <img src={img1} alt="image1" />
        </div>
      </div>
      <div className="symptoms_container">
        <div className="left" style={{ margin: 0 }}>
          <p className="symp_title">What can talking therapy help with?</p>
          <p className="symp_paragraph">
            Talking therapy can help with many mental health issues and complex
            emotional challenges, either by helping you resolve them or finding
            better ways to live with them.
          </p>
        </div>
        <div className="right" style={{ columnGap: 60 }}>
          <div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Alcohol and addiction</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Anxiety</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Stress</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Phobias</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">OCD</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Eating and food issues</p>
            </div>
          </div>
          <div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Depression</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Issues at work</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Personality disorders</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Relationship issues</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Self-harm</p>
            </div>
            <div className="one_item">
              <img src={icon} />
              <p className="symp">Bereavement</p>
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
            <p className="doctorParagraph">
              Sometimes, talking to your friends and family can be hard, and all
              you need is a time and place to talk to a professional who will
              listen and won't judge you.
            </p>
            <hr />
            <p className="doctorParagraph">
              A free, confidential call could quickly put you on the path to
              regaining control. Talk to a qualified professional today.
            </p>
            <div className="one_item_phone">
              <p className="doctorParagraph">
                <u>0203 326 9160</u>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <div className="doctor" style={{ backgroundColor: "#A6DE9B" }}>
          <div className="doctor_content_therapist2">
            <p
              className="doctorParagraph"
              style={{ color: "#094819", fontSize: "40px" }}
            >
              We’ll help you regain control
            </p>
            <p className="doctorParagraph" style={{ color: "#094819" }}>
              Don't wait any longer to seek help. Talking therapy can help you
              understand and cope with your emotions, improve your
              relationships, and live a happier and healthier life.
            </p>
            <hr />
            <p className="doctorParagraph" style={{ color: "#094819" }}>
              We're here to listen, guide you through your options, and provide
              answers to any questions you may have.
            </p>
            <div className="one_item_phone">
              <img src={phone} />
              <p className="doctorParagraph" style={{ color: "#094819" }}>
                <u>0203 326 9160</u>
              </p>
            </div>
          </div>
          <img src={img3} />
        </div>
      </div>
      <DarkInfo />
      <DarkFooter />
    </div>
  );
};

export default Therapist;
