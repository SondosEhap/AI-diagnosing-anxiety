import React from "react";
import robot from "./Images/robot.svg";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import Navbar from "../../../Components/Navbar/Navbar";
import img from "./Images/low.svg";

const low = () => {
  return (
    <div>
      <Navbar />
      <div className="resPage">
        <div className="result">
          <img src={img} />
          <div className="anxietyLevel">
            <p className="title" style={{ marginBottom: 0 }}>
              Your Test Anxiety Level is
            </p>
            <p className="level">LOW </p>
          </div>
        </div>
        <div className="messageResult">
          That's Great To Hear !! There are few tips to help keep your test
          anxiety level low
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Regular Study Routine</p>
            <p className="adviceParagraph">
              Make a plan to study regularly, not just before the test. Small,
              steady steps are better than last-minute cramming.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Relax Your Mind</p>
            <p className="adviceParagraph">
              Do simple things to relax, like deep breathing or meditation. It
              can keep stress low.
            </p>
          </div>
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Positive Self-Talk</p>
            <p className="adviceParagraph">
              Tell yourself you can do it. Focus on your hard work and what you
              know.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Stay Healthy</p>
            <p className="adviceParagraph">
              Get enough sleep, eat good food, and exercise. Feeling good
              physically helps your mind stay calm.
            </p>
          </div>
        </div>
        <div className="advice-container">
          <div className="advice-content-container">
            <p className="adviceTitleResult">Time Management </p>
            <p className="adviceParagraph">
              Use your time wisely. Study in short, focused sessions, and take
              breaks to avoid feeling overwhelmed.
            </p>
          </div>
          <div className="advice-content-container">
            <p className="adviceTitleResult">Talk to Others</p>
            <p className="adviceParagraph">
              Share your feelings with friends or family. They can offer support
              and good advice.
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

export default low;
