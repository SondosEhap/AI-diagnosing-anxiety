import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Admin.css";
import img from "./images/adminimage.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Admin = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [adminName, setAdminName] = useState("");
  const [pageToUpdate, setPageToUpdate] = useState("");
  const [addOption, setAddOption] = useState("Choose");
  const [deleteOption, setDeleteOption] = useState("Choose");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleAdminNameChange = (event) => {
  //   setAdminName(event.target.value);
  // };

  const handlePageToUpdateChange = (event) => {
    setPageToUpdate(event.target.value);
  };

  const handleAddOptionChange = (event) => {
    setAddOption(event.target.value);
    if (event.target.value === "Book") {
      navigate("/UpdateBook"); // Navigate to DeleteBook page
    } else if (event.target.value === "Therapist") {
      navigate("/UpdateTherapist"); // Navigate to DeleteTherapist page
    }
  };

  const handleDeleteOptionChange = (event) => {
    setDeleteOption(event.target.value);
    if (event.target.value === "Book") {
      navigate("/DeleteBook"); // Navigate to DeleteBook page
    } else if (event.target.value === "Therapist") {
      navigate("/DeleteTherapist"); // Navigate to DeleteTherapist page
    }
  };

  return (
    <div className="admin-profile">
      <Navbar  />
      <div className="profile-container">
        <img src={img} alt="Admin" />
        <div className="personal-info">
          <div className="Info">
            <div className="pair-label-text">
              <label htmlFor="email" className="Info-label">
                Email
              </label>
              <input
                type="email"
                className="Info-control"
                id="email"
                value={"admin@gmail.com"}
                onChange={handleEmailChange}
                required
              />
            </div>
            {/* <div className="pair-label-text">
              <label htmlFor="pageToUpdate" className="Info-label">
                Page To Update
              </label>
              <select
                className="Info-dropdown"
                id="pageToUpdate"
                value={pageToUpdate}
                onChange={handlePageToUpdateChange}
              >
                <option value="Normal">Normal</option>
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Severe">Severe</option>
                <option value="Extremely Severe">Extremely Severe</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div> */}
            <div className="pair-label-text">
              <label htmlFor="addOption" className="Info-label">
                Add
              </label>
              <select
                className="Info-dropdown2"
                id="addOption"
                value={addOption}
                onChange={handleAddOptionChange}
              >
                <option value="Choose">Choose</option>
                <option value="Book">Book</option>
                <option value="Therapist">Therapist</option>
              </select>
            </div>
            <div className="pair-label-text">
              <label htmlFor="deleteOption" className="Info-label">
                Delete
              </label>
              <select
                className="Info-dropdown3"
                id="deleteOption"
                value={deleteOption}
                onChange={handleDeleteOptionChange}
              >
                <option value="Choose">Choose</option>
                <option value="Book">Book</option>
                <option value="Therapist">Therapist</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin