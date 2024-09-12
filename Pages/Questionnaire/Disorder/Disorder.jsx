import React, { useState,useEffect } from "react";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import testImg from "./test.svg";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Disorder = () => {
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");

  const [result, setResult] = useState(""); // State to store the prediction result
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(''); // Initialize email state
  
  const [Age,setAge]=useState('');
  const [year,setYear]=useState('');
  const [Gender,setGender]=useState('');
  const [Specialization,setSpecialization]=useState('');


  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://127.0.0.1:5000/@me", { withCredentials: true })
      .then((response) => {
        setUser(response.data);
        setEmail(response.data.email);
      })
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  };

  const predictBtn = () => {
    const ageInput = document.getElementById('Not10').value;
    const Age = Number(ageInput);

    if (!email) {
      alert("Please log in to view the result.");
      return;
    }
    if (isNaN(Age) || Age <= 16 || Age > 40) {
      alert("Please enter a valid age between 16 and 40.");
      return;
    }
    axios
      .post("http://127.0.0.1:5000/disorder_questionnaire", {
        Age:Age,
        year:year,
        Gender:Gender,
        Specialization:Specialization,
        Q1: Q1,
        Q2: Q2,
        Q3: Q3,
        Q4: Q4,
        Q5: Q5,
        Q6: Q6,
        Q7: Q7,
        email: user.email,
      
      })

      .then(function (response) {
        console.log(response);
        //navigate("/login");
        setResult(response.data.anxietydisorderlevel        );
        console.log("result:", response.data.anxietydisorderlevel );
        if (result == "normal") {
          navigate("/NormalDisorder");
        } else if (result == "severe") {
          navigate("/SevereDisorder");
        } else if (result == "modetarate") {
          navigate("/ModerateDisorder");
        } else if (result == "Extremely Severe") {
          navigate("/ExtremelyDisorder");
        } else if (result == "mild") {
          navigate("/MildDisorder");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar email={email} />

      <div className="testPage">
        <div className="pageTitle">
          <p>Anxiety Disorder Questions</p>
        </div>
        <div className="instr">
          <img src={testImg} style={{ marginLeft: 86 }} />
          <p>
            Please choose an answer which indicates how much the statement
            applied to you over the <b>past week</b>
          </p>
        </div>
        <div className="questions_container">

        <div className="question_age">
            <p>
             Enter Your Age
            </p>
            <ul className="donate-age">
              <li>
                <input
                  type="number"
                  value={Age}
                  onChange={(e) => setAge(e.value)}
                  id="Not10"
                  name="group10"
                />
              </li>
            </ul>
          </div>
        <div className="question">
            <p>
             Choose your grade in The universty
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("0")}
                  id="Not11"
                  name="group11"
                />
                <label htmlFor="Not11">First</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("1")}
                  id="Somewhat11"
                  name="group11"
                />
                <label htmlFor="Somewhat11">Second</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("2")}
                  id="Quite11"
                  name="group11"
                />
                <label htmlFor="Quite11">Third</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("3")}
                  id="Very11"
                  name="group11"
                />
                <label htmlFor="Very11">Fourth</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("4")}
                  id="Verymuch11"
                  name="groupmuch11"
                />
                <label htmlFor="Verymuch11">FiFth</label>
              </li>
            </ul>
          </div>
          <div className="question_new">
            <p>
             Enter Your Gender
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Gender}
                  onChange={(e) => setGender("0")}
                  id="Not8"
                  name="group8"
                />
                <label htmlFor="Not8">Male</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Gender}
                  onChange={(e) => setGender("1")}
                  id="Somewhat8"
                  name="group8"
                />
                <label htmlFor="Somewhat8">Female</label>
              </li>
            </ul>
          </div>
          <div className="question_new">
            <p>
             Enter Your College Specialization
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Specialization}
                  onChange={(e) => setSpecialization("0")}
                  id="Not9"
                  name="group9"
                />
                <label htmlFor="Not9">Literature</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Specialization}
                  onChange={(e) => setSpecialization("1")}
                  id="Somewhat9"
                  name="group9"
                />
                <label htmlFor="Somewhat9">Scientific</label>
              </li>
              
            </ul>
          </div>
         
          <div className="question" style={{ height: 662 }}>
            <p className="time" style={{ width: 911, marginBottom: 0 }}>
              {" "}
              Do not spend too much time on any statement.
              <hr />
            </p>

            <p
              style={{
                marginBottom: 0,
              }}
            >
              I was aware of dryness of my mouth
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q1}
                  onChange={(e) => setQ1("0")}
                  id="Not1"
                  name="group1"
                />
                <label htmlFor="Not1">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q1}
                  onChange={(e) => setQ1("1")}
                  id="Somewhat1"
                  name="group1"
                />
                <label htmlFor="Somewhat1">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q1}
                  onChange={(e) => setQ1("2")}
                  id="Quite1"
                  name="group1"
                />
                <label htmlFor="Quite1">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q1}
                  onChange={(e) => setQ1("3")}
                  id="Very1"
                  name="group1"
                />
                <label htmlFor="Very1">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              I experienced breathing difficulty (e.g. excessively rapid
              breathing, breathlessness in the absence of physical exertion)
            </p>

            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q2}
                  onChange={(e) => setQ2("0")}
                  id="Not2"
                  name="group2"
                />
                <label htmlFor="Not2">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q2}
                  onChange={(e) => setQ2("1")}
                  id="Somewhat2"
                  name="group2"
                />
                <label htmlFor="Somewhat2">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q2}
                  onChange={(e) => setQ2("2")}
                  id="Quite2"
                  name="group2"
                />
                <label htmlFor="Quite2">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q2}
                  onChange={(e) => setQ2("3")}
                  id="Very2"
                  name="group2"
                />
                <label htmlFor="Very2">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              I was worried about situations in which I might panic and make a
              fool of myself
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q3}
                  onChange={(e) => setQ3("0")}
                  id="Not3"
                  name="group3"
                />
                <label htmlFor="Not3">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q3}
                  onChange={(e) => setQ3("1")}
                  id="Somewhat3"
                  name="group3"
                />
                <label htmlFor="Somewhat3">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q3}
                  onChange={(e) => setQ3("2")}
                  id="Quite3"
                  name="group3"
                />
                <label htmlFor="Quite3">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q3}
                  onChange={(e) => setQ3("3")}
                  id="Very3"
                  name="group3"
                />
                <label htmlFor="Very3">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>I experienced trembling (e.g. in the hands)</p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q4}
                  onChange={(e) => setQ4("0")}
                  id="Not4"
                  name="group4"
                />
                <label htmlFor="Not4">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q4}
                  onChange={(e) => setQ4("1")}
                  id="Somewhat4"
                  name="group4"
                />
                <label htmlFor="Somewhat4">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q4}
                  onChange={(e) => setQ4("2")}
                  id="Quite4"
                  name="group4"
                />
                <label htmlFor="Quite4">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q4}
                  onChange={(e) => setQ4("3")}
                  id="Very4"
                  name="group4"
                />
                <label htmlFor="Very4">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>I felt I was close to panic</p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q5}
                  onChange={(e) => setQ5("0")}
                  id="Not5"
                  name="group5"
                />
                <label htmlFor="Not5">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q5}
                  onChange={(e) => setQ5("1")}
                  id="Somewhat5"
                  name="group5"
                />
                <label htmlFor="Somewhat5">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q5}
                  onChange={(e) => setQ5("2")}
                  id="Quite5"
                  name="group5"
                />
                <label htmlFor="Quite5">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q5}
                  onChange={(e) => setQ5("3")}
                  id="Very5"
                  name="group5"
                />
                <label htmlFor="Very5">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              I was aware of the action of my heart in the absence of physical
              exertion (e.g. sense of heart rate increase, heart missing a beat)
            </p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q6}
                  onChange={(e) => setQ6("0")}
                  id="Not6"
                  name="group6"
                />
                <label htmlFor="Not6">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q6}
                  onChange={(e) => setQ6("1")}
                  id="Somewhat6"
                  name="group6"
                />
                <label htmlFor="Somewhat6">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q6}
                  onChange={(e) => setQ6("2")}
                  id="Quite6"
                  name="group6"
                />
                <label htmlFor="Quite6">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q6}
                  onChange={(e) => setQ6("3")}
                  id="Very6"
                  name="group6"
                />
                <label htmlFor="Very6">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>I felt scared without any good reason</p>
            <ul className="donate-now">
              <li>
                <input
                  type="radio"
                  value={Q7}
                  onChange={(e) => setQ7("0")}
                  id="Not7"
                  name="group7"
                />
                <label htmlFor="Not7">Not at all typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q7}
                  onChange={(e) => setQ7("1")}
                  id="Somewhat7"
                  name="group7"
                />
                <label htmlFor="Somewhat7">Somewhat typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q7}
                  onChange={(e) => setQ7("2")}
                  id="Quite7"
                  name="group7"
                />
                <label htmlFor="Quite7">Quite typical of me</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Q7}
                  onChange={(e) => setQ7("3")}
                  id="Very7"
                  name="group7"
                />
                <label htmlFor="Very7">Very typical of me</label>
              </li>
            </ul>
          </div>
        
          <button className="viewResult" onClick={predictBtn}>
            View Result
          </button>
          {/* <div className="result-container">
            <p className="result-text">Predicted Anxiety Level: {result}</p>
          </div> */}
        </div>
        <DarkFooter />
      </div>
    </div>
  );
};

export default Disorder;
