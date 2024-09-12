import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useState, useEffect } from "react";
import "./UpdateTherapist.css";

const UpdateTherapist = () => {
  // const [doctorName, setDoctorName] = useState("");
  // const [qualification, setQualification] = useState("");
  // const [rating, setRating] = useState("");
  // const [specification, setSpecification] = useState("");
  // const [location, setLocation] = useState("");
  // const [fees, setFees] = useState("");
  // const [waitingTime, setWaitingTime] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [linkVezzeta, setLinkVezzeta] = useState("");
  // const [pictureLink, setPictureLink] = useState("");

  const [name, setDoctorName] = useState("");
  const [link, setLink] = useState(""); // Updated from linkVezzeta to link
  const [specialization, setSpecialization] = useState(""); // Updated from specification to specialization
  const [rating, setRating] = useState("");
  const [visitors, setVisitors] = useState(""); // Added visitors
  const [desc, setDesc] = useState(""); // Added desc
  const [location, setLocation] = useState("");
  const [fees, setFees] = useState("");
  const [waitingTime, setWaitingTime] = useState("");
  const [imagelink, setImageLink] = useState(""); // Updated from pictureLink to imageLink

  const handleAddClick = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/addtherapist', {
        name: name,
        link: link,
        specialization: specialization,
        rating: rating,
        visitors: visitors,
        desc: desc,
        location: location,
        fees: fees,
        waitingtime: waitingTime,
        imagelink: imagelink
      });
      console.log(response);
      alert("Doctor is added");
      // Reset the fields after adding the doctor
      setDoctorName("");
      setLink("");
      setSpecialization("");
      setRating("");
      setVisitors("");
      setDesc("");
      setLocation("");
      setFees("");
      setWaitingTime("");
      setImageLink("");
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Error adding doctor");
    }
  };

  return (
    <div className="profile-page-custom">
      <Navbar />
      <div className="profile-container-custom">
      <h1 className="page-title">New Therapist</h1>
        <div className="info-custom">
          <div className="pair-label-text-custom">
            <label htmlFor="doctorName" className="info-label-custom">Doctor Name</label>
            <input type="text" className="info-control-custom" id="doctorName" value={name} onChange={(e) => setDoctorName(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="rating" className="info-label-custom">Rating</label>
            <input type="text" className="info-control-custom" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="specification" className="info-label-custom">specialization</label>
            <input type="text" className="info-control-custom" id="specification" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="location" className="info-label-custom">Location</label>
            <input type="text" className="info-control-custom" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="fees" className="info-label-custom">Fees</label>
            <input type="text" className="info-control-custom" id="fees" value={fees} onChange={(e) => setFees(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="waitingTime" className="info-label-custom">Waiting Time</label>
            <input type="text" className="info-control-custom" id="waitingTime" value={waitingTime} onChange={(e) => setWaitingTime(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="phoneNumber" className="info-label-custom">Description</label>
            <input type="text" className="info-control-custom" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="linkVezzeta" className="info-label-custom">Link Vezzeta</label>
            <input type="text" className="info-control-custom" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="linkVezzeta" className="info-label-custom">Visitors</label>
            <input type="text" className="info-control-custom" id="visitors" value={visitors} onChange={(e) => setVisitors(e.target.value)} />
          </div>
          <div className="pair-label-text-custom">
            <label htmlFor="pictureLink" className="info-label-custom">Image Link</label>
            <input type="text" className="info-control-custom" id="imageLink" value={imagelink} onChange={(e) => setImageLink(e.target.value)} />
          </div>
          <button className="add-button-custom" onClick={handleAddClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

 export default UpdateTherapist;


