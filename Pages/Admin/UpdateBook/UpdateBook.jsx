import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
import { useState } from "react";
import "./UpdateBook.css"; // Import the CSS file for styling

const UpdateBook = () => {
  const [bookName, setBookName] = useState("");
  const [bookLink, setBookLink] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [pageToUpdate, setPageToUpdate] = useState("moderate"); // Default to "Moderate"


  const handleAddBook =async () => {
    if (!bookName) {
      alert("Please write the book title.");
      return;
    }
    if (!bookLink) {
      alert("Please provide the book link.");
      return;
    }
    if (!bookDescription) {
      alert("Please write the book description.");
      return;
    }
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/addbook', {
        title: bookName,
        link: bookLink,
        desc: bookDescription,
        type: pageToUpdate
      });
      console.log(response);
      alert("Book is added");

      // Reset the fields after adding the book
      setBookName("");
      setBookLink("");
      setBookDescription("");
      setPageToUpdate("moderate"); // Reset to default
    } catch (error) {
      console.log(error, "error");
      if (error.response && error.response.status === 401) {
        alert("Invalid credentials");
      } else {
        alert("Error adding book");
      }
    }
  };

  return (
    <div className="UpdaBookupdateBookPage">
      <Navbar />
      <div className="UpdaBookupdateBook-container">
        <h1 className="UpdaBookpage-title">Add New Book</h1>
        <div className="UpdaBookbook-form">
          <div className="UpdaBookpair-label-text">
            <label htmlFor="bookName" className="UpdaBookInfo-label">
              Book Title
            </label>
            <input
              type="text"
              className="UpdaBookInfo-control"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
            {/* <input
              type="text"
              className="UpdaBookInfo-control"
              id="bookName"
              value={bookName}
              onChange={handleBookNameChange}
            /> */}
          </div>
          <div className="UpdaBookpair-label-text">
            <label htmlFor="bookLink" className="UpdaBookInfo-label">
              Book Link
            </label>
            <input
              type="text"
              className="UpdaBookInfo-control"
              value={bookLink}
              onChange={(e) => setBookLink(e.target.value)}
            />
          </div>
          <div className="UpdaBookpair-label-text">
            <label htmlFor="bookDescription" className="UpdaBookInfo-label">
              Book Description
            </label>
            <input
              type="text"
              className="UpdaBookInfo-control"
              value={bookDescription}
              onChange={(e) => setBookDescription(e.target.value)}
            />
          </div>
          <div className="pair-label-text">
               <label htmlFor="pageToUpdate" className="Info-label">
                 Type
               </label>
              <select
                className="Info-dropdown"
                id="pageToUpdate"
                value={pageToUpdate}
                onChange={(e) => setPageToUpdate(e.target.value)}
              > 
                <option value="moderate">Moderate</option>
                <option value="medium">Medium</option>
              </select>
            </div>
          <button className="UpdaBookadd-button" onClick={handleAddBook}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
