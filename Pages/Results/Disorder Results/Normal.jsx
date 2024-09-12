import React from "react";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import Navbar from "../../../Components/Navbar/Navbar";
import img from "./Normal.svg";
import robot from "./robot.svg";

import "./Disorder.css";
const Normal = () => {
  return (
    <div>
      <Navbar />
      <div className="resPage">
        <div className="result">
          <img src={img} />
          <div className="anxietyLevel">
            <p className="title" style={{ marginBottom: 0 }}>
              Your Anxiety Level is
            </p>
            <p className="level">NORMAL </p>
          </div>
        </div>
        <div className="messageResult">
          That's Great To Hear !! There are few tips to help keep your anxiety
          level normal
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Practice Mindfulness</p>
            <p className="adviceParagraph">
              Engage in activities that bring your focus to the present moment,
              like meditation or deep breathing exercises.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Seek Support</p>
            <p className="adviceParagraph">
              Talk to someone you trust or consider therapy or counseling if you
              feel overwhelmed. Sharing your feelings can alleviate some of the
              burden.
            </p>
          </div>
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Stay Active</p>
            <p className="adviceParagraph">
              Regular exercise can reduce stress hormones and boost feel-good
              chemicals in your brain.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Maintain a Balanced Lifestyle</p>
            <p className="adviceParagraph">
              Ensure you're getting enough sleep, eating well, and managing your
              workload.
            </p>
          </div>
        </div>
        <div className="advice-container">
          <div
            className="advice-content-container"
            style={{
              width: 666,
              height: 133,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={robot} />
            <p className="adviceParagraph">
              Talk to our{" "}
              <u>
                <b>virtual assistant.</b>
              </u>
              <br /> It can be useful for you.
            </p>
          </div>
        </div>
      </div>

      <DarkFooter />
    </div>
  );
};

export default Normal;
