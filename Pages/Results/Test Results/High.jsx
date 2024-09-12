import React from "react";
import robot from "./Images/robot.svg";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import Navbar from "../../../Components/Navbar/Navbar";
import img from "./Images/high.svg";
import Info from "../../../Components/TherapistInfo/Info";
const High = () => {
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
            <p className="level">HIGH </p>
          </div>
        </div>
        <div className="messageResult" style={{ width: 960 }}>
          I suggest you visit a psychiatrist. Here are some suggestions, I hope
          they are helpful.
        </div>
        <Info />
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

export default High;
