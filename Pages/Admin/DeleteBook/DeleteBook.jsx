import React, { useState } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
import "./DeleteBook.css";

const DeleteBook = () => {
  const [bookName, setBookName] = useState("");

  const handleDeleteBook = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/deletebook',
        { title: bookName },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      alert("Book is deleted successfully");
      setBookName("");
    } catch (error) {
      console.error("Error deleting book:", error);
      if (error.response) {
        if (error.response.status === 404) {
          alert("There is no book by this name");
        } else if (error.response.status === 401) {
          alert("Invalid credentials");
        } else {
          alert("Book is deleted successfully");
        }
      } else {
        alert("Unable to connect to the server");
      }
    }
  };

  return (
    <div className="DBookprofile-page-custom">
      <Navbar />
      <div className="DBookprofile-container-custom">
        <h1 className="DBookpage-title">Delete Book</h1>
        <div className="DBookinfo-custom">
          <div className="DBookpair-label-text-custom">
            <label htmlFor="bookName" className="DBookinfo-label-custom">
              Book Title
            </label>
            <input
              type="text"
              className="DBookinfo-control-custom"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
            />
          </div>
          <button className="DBookadd-button-custom" onClick={handleDeleteBook}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;