import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Test/Test.css";
import img1 from "./choose1.svg";
import img2 from "./choose2.svg";
import { useNavigate } from "react-router-dom";
const Choose = () => {
  const navigate = useNavigate();

  const navigateAnxiety = () => {
    navigate("/disorder_questionnaire");
  };

  const navigateTest = () => {
    navigate("/test_questionnaire");
  };
  return (
    <div>
      <Navbar />
      <p className="choose-title">
        <i> We have two types of questionnaire in Easify</i>
      </p>
      <div className="choose-container">
        <div className="part">
          <div className="choose-desc">
            <i>
              This Self Rating Questionnaire will help you to know your anxiety
              level and recommendation to reduce it
            </i>
          </div>
          <img src={img1} style={{ width: 333, height: 333 }} />
          <button onClick={navigateAnxiety} className="choose-btn">
            <i>
              START <br /> Anxiety disorder questionnaire
            </i>
          </button>
        </div>
        <div className="part">
          <div className="choose-desc">
            <i>
              If you suffer from Test Anxiety this questionnaire will help you
              to know your level and recommend some tips for you
            </i>
          </div>
          <img src={img2} style={{ width: 314, height: 333 }} />
          <button onClick={navigateTest} className="choose-btn">
            <i>
              START
              <br /> Test anxiety questionnaire
            </i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Choose;
