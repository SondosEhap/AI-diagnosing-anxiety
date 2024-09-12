import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Profile.css";
import img from "./images/profileImg.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [inputs, setInputs] = useState({});
  const [testAnxietyLevel, setTestAnxietyLevel] = useState("");
  const [disorderAnxietyLevel, setDisorderAnxietyLevel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios
      .get("http://127.0.0.1:5000/@me", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setInputs(response.data);
        setDisorderAnxietyLevel(response.data.anxietydisorderlevel); // Assuming the backend returns these fields
        setTestAnxietyLevel(response.data.testanxietylevel); // Assuming the backend returns these fields

         // Check if email is admin's email and navigate to admin page
         if (response.data.email === "admin@gmail.com") {
          navigate("/admin");
        }
      });
  }

  return (
    <div className="profilePage">
      <Navbar />
      <div className="profile-container">
        <div className="personal-info">
          <div className="AnxietyInfo">
            <img src={img} />
            {/* <p className="AnxietyInfo-text">Your Anxiety Level</p> */}
          </div>
          <div className="Info">
            <div className="pair-label-text">
              <label htmlFor="fregname" className="Info-label">
                Username
              </label>
              <input
                type="text"
                className="Info-control"
                id="fregname"
                value={inputs.username}
                readOnly
              />
            </div>
            <div className="pair-label-text">
              <label htmlFor="regemail" className="Info-label">
                E-mail
              </label>
              <input
                type="email"
                className="Info-control"
                id="regemail"
                value={inputs.email}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="anxiety-levels">
          <h2>Anxiety Levels</h2>
          <table className="anxiety-table">
            <thead>
              <tr>
                <th>Test Anxiety Level</th>
                <th>Disorder Anxiety Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{testAnxietyLevel}</td>
                <td>{disorderAnxietyLevel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;

