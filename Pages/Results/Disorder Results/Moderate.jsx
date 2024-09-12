import React from "react";
import img from "./MODERATE.svg";
import robot from "./robot.svg";
import Navbar from "../../../Components/Navbar/Navbar";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import { useState, useEffect } from "react";
import axios from "axios";
const Moderate = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  function getBooks() {
    axios
      .get("http://127.0.0.1:5000/listmoderatebooks")
      .then(function (response) {
        console.log(response.data);
        console.log("data:",response.data);

        setBooks(response.data);
      });
  }

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
            <p className="level">MODERATE</p>
          </div>
        </div>
        <div className="messageResult">
          These suggestions can be helpful for you to deal with moderate anxiety
        </div>
        {books.map((book) => (
          <div className="book-container">
            <a href={book.link} className="book-title">
              {book.title}
            </a>
            <p className="book-desc"> {book.desc}</p>
          </div>
        ))}
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

export default Moderate;
