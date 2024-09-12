import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
import "./DeleteTherapist.css";

const DeleteTherapist = () => {
  const [doctorName, setDoctorName] = useState("");

  const handleDeleteTherapist =async () =>{
    try {
      const response = await axios.post('http://127.0.0.1:5000/deletetherapist', {
        name: doctorName,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      alert("Therapist is deleted successfully");
      // Reset the fields after adding the book
      setDoctorName("");
      
    } catch (error) {
      console.log(error, "error");
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        alert("There is no therapist by this name");
      }
    }
  };


  return (
    <div className="Dtherprofile-page-custom">
      <Navbar />
      <div className="Dtherprofile-container-custom">
        <h1 className="Dtherpage-title">Delete Therapist</h1>
        <div className="Dtherinfo-custom">
          <div className="Dtherpair-label-text-custom">
            <label htmlFor="doctorName" className="Dtherinfo-label-custom">
              Doctor Name
            </label>
            <input
              type="text"
              className="Dtherinfo-control-custom"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
            />
          </div>
          <button className="Dtheradd-button-custom" onClick={handleDeleteTherapist}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTherapist