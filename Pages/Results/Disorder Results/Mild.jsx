import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import img from "./MILD.svg";
import robot from "./robot.svg";
const Mild = () => {
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
            <p className="level">MILD </p>
          </div>
        </div>
        <div className="messageResult">
          These suggestions can be helpful for you to deal with mild anxiety
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Deep Breathing</p>
            <p className="adviceParagraph">
              Inhale slowly for a count of four, hold your breath for four
              counts, and exhale for a count of four. Repeat this several times.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Positive Self-Talk</p>
            <p className="adviceParagraph">
              Challenge negative thoughts by replacing them with positive
              affirmations. Remind yourself of your strengths and past successes
            </p>
          </div>
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Hobbies&Relaxation Techniques </p>
            <p className="adviceParagraph">
              Engage in activities you enjoy,whether it's reading or spending
              time in nature. These activities can help for relaxation.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Get Help if Needed</p>
            <p className="adviceParagraph">
              If your anxiety doesn't improve, talk to a professional. They can
              offer more personalized support.
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

export default Mild;
