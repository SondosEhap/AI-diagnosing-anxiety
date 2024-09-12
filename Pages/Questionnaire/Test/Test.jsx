import React, { useState, useEffect } from "react";
import "./Test.css";
import testImg from "./test.svg";
import DarkFooter from "../../../Components/Footer/DarkFooter";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Test = () => {
  const [Q8, setQ8] = useState('');
  const [Q9, setQ9] = useState('');
  const [Q10, setQ10] = useState('');
  const [Q11, setQ11] = useState('');
  const [Q12, setQ12] = useState('');
  const [Q13, setQ13] = useState('');
  const [Q14, setQ14] = useState('');
  const [Q15, setQ15] = useState('');
  const [Q16, setQ16] = useState('');
  const [Q17, setQ17] = useState('');
  const [Q18, setQ18] = useState('');
  const [Q19, setQ19] = useState('');
  const [Q20, setQ20] = useState('');
  const [Q21, setQ21] = useState('');
  const [Q22, setQ22] = useState('');

  const [result, setResult] = useState(''); // State to store the prediction result
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
    const ageInput = document.getElementById('Not16').value;
    const Age = Number(ageInput);

    if (!email) {
      alert("Please log in to view the result.");
      return;
    }
    if (isNaN(Age) || Age <= 16 || Age > 40) {
      alert("Please enter a valid age between 16 and 40.");
      return;
    }

    console.log('Q21:', Q21);
    console.log('Specialization:', Specialization);
    console.log('year:', year);
    console.log('Gender:', Gender);
    console.log('Age:', Age);
    console.log('email:', email);

    axios.post('http://127.0.0.1:5000/test_questionnaire', {
      Age:Age,
      year:year,
      Gender:Gender,
      Specialization:Specialization,
      Q8,
      Q9,
      Q10,
      Q11,
      Q12,
      Q13,
      Q14,
      Q15,
      Q16,
      Q17,
      Q18,
      Q19,
      Q20,
      Q21,
      Q22,
      email: user.email,
    })
    .then((response) => {
      console.log(response);
      setResult(response.data.testanxietylevel); // Update state with prediction
      console.log("result:", response.data );

      const result=response.data.testanxietylevel
      if (result =="low") {
        navigate("/low");
      } else if (result =="high") {
        navigate("/high");
      } else if (result =="medium") {
        navigate("/medium");
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
          <p>Test Anxiety Questions</p>
        </div>
        <div className="instr">
          <img src={testImg} style={{ marginLeft: 86 }} />
          <p>
            Please choose an answer which indicates how much the statement
            applied to you <b>during exams</b>
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
                  id="Not16"
                  name="group16"
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
                  id="Not17"
                  name="group17"
                />
                <label htmlFor="Not17">First</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("1")}
                  id="Somewhat17"
                  name="group17"
                />
                <label htmlFor="Somewhat17">Second</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("2")}
                  id="Quite17"
                  name="group17"
                />
                <label htmlFor="Quite17">Third</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("3")}
                  id="Very17"
                  name="group17"
                />
                <label htmlFor="Very17">Fourth</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={year}
                  onChange={(e) => setYear("4")}
                  id="Verymuch17"
                  name="groupmuch17"
                />
                <label htmlFor="Verymuch17">FiFth</label>
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
                  id="Not18"
                  name="group18"
                />
                <label htmlFor="Not18">Male</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Gender}
                  onChange={(e) => setGender("1")}
                  id="Somewhat18"
                  name="group18"
                />
                <label htmlFor="Somewhat18">Female</label>
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
                  id="Not19"
                  name="group19"
                />
                <label htmlFor="Not19">Literature</label>
              </li>
              <li>
                <input
                  type="radio"
                  value={Specialization}
                  onChange={(e) => setSpecialization("1")}
                  id="Somewhat19"
                  name="group19"
                />
                <label htmlFor="Somewhat19">Scientific</label>
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
                marginBottom: 5,
              }}
            >
              I lose sleep over worrying about examinations
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q8} onChange={(e) => setQ8('0')} id="Not1" name="group1" />
                <label for="Not1">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q8} onChange={(e) => setQ8('1')} id="Somewhat1" name="group1" />
                <label for="Somewhat1">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q8} onChange={(e) => setQ8('2')}id="Quite1" name="group1" />
                <label for="Quite1">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q8} onChange={(e) => setQ8('3')} id="Very1" name="group1" />
                <label for="Very1">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              I get distracted from studying for tests by thoughts of failing
            </p>

            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q9} onChange={(e) => setQ9('0')} id="Not2" name="group2" />
                <label for="Not2">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q9} onChange={(e) => setQ9('1')} id="Somewhat2" name="group2" />
                <label for="Somewhat2">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q9} onChange={(e) => setQ9('2')}id="Quite2" name="group2" />
                <label for="Quite2">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q9} onChange={(e) => setQ9('3')} id="Very2" name="group2" />
                <label for="Very2">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>I have difficulty remembering what I studied for tests</p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q10} onChange={(e) => setQ10('0')} id="Not3" name="group3" />
                <label for="Not3">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q10} onChange={(e) => setQ10('1')} id="Somewhat3" name="group3" />
                <label for="Somewhat3">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q10} onChange={(e) => setQ10('2')} id="Quite3" name="group3" />
                <label for="Quite3">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q10} onChange={(e) => setQ10('3')}id="Very3" name="group3" />
                <label for="Very3">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              When I first get my copy of a test, it takes me a while to calm
              down to the point where I can begin to think straight
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q11} onChange={(e) => setQ11('0')} id="Not4" name="group4" />
                <label for="Not4">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q11} onChange={(e) => setQ11('1')} id="Somewhat4" name="group4" />
                <label for="Somewhat4">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q11} onChange={(e) => setQ11('2')} id="Quite4" name="group4" />
                <label for="Quite4">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q11} onChange={(e) => setQ11('3')}id="Very4" name="group4" />
                <label for="Very4">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              While taking an important examination, I find myself wondering
              whether the other students are doing better than I am
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q12} onChange={(e) => setQ12('0')} id="Not5" name="group5" />
                <label for="Not5">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q12} onChange={(e) => setQ12('1')} id="Somewhat5" name="group5" />
                <label for="Somewhat5">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q12} onChange={(e) => setQ12('2')} id="Quite5" name="group5" />
                <label for="Quite5">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q12} onChange={(e) => setQ12('3')} id="Very5" name="group5" />
                <label for="Very5">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              I tend to freeze up on things like intelligence tests and final
              exams
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q13} onChange={(e) => setQ13('0')} id="Not6" name="group6" />
                <label for="Not6">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q13} onChange={(e) => setQ13('1')} id="Somewhat6" name="group6" />
                <label for="Somewhat6">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q13} onChange={(e) => setQ13('2')} id="Quite6" name="group6" />
                <label for="Quite6">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q13} onChange={(e) => setQ13('3')}id="Very6" name="group6" />
                <label for="Very6">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              During tests, I find myself thinking of the consequences of
              failing
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q14} onChange={(e) => setQ14('0')} id="Not7" name="group7" />
                <label for="Not7">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q14} onChange={(e) => setQ14('1')} id="Somewhat7" name="group7" />
                <label for="Somewhat7">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q14} onChange={(e) => setQ14('2')} id="Quite7" name="group7" />
                <label for="Quite7">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q14} onChange={(e) => setQ14('3')} id="Very7" name="group7" />
                <label for="Very7">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              When I take a test, my nervousness causes me to make careless
              errors
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q15} onChange={(e) => setQ15('0')} id="Not8" name="group8" />
                <label for="Not8">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q15} onChange={(e) => setQ15('1')}id="Somewhat8" name="group8" />
                <label for="Somewhat8">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q15} onChange={(e) => setQ15('2')}id="Quite8" name="group8" />
                <label for="Quite8">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q15} onChange={(e) => setQ15('3')}id="Very8" name="group8" />
                <label for="Very8">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              My mind goes blank when I am pressured for an answer on a test
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q16} onChange={(e) => setQ16('0')}id="Not9" name="group9" />
                <label for="Not9">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q16} onChange={(e) => setQ16('1')} id="Somewhat9" name="group9" />
                <label for="Somewhat9">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q16} onChange={(e) => setQ16('2')} id="Quite9" name="group9" />
                <label for="Quite9">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q16} onChange={(e) => setQ16('3')}id="Very9" name="group9" />
                <label for="Very9">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              During tests, the thought frequently occurs to me that I may not
              be too bright
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q17} onChange={(e) => setQ17('0')} id="Not10" name="group10" />
                <label for="Not10">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q17} onChange={(e) => setQ17('1')} id="Somewhat10" name="group10" />
                <label for="Somewhat10">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q17} onChange={(e) => setQ17('2')} id="Quite10" name="group10" />
                <label for="Quite10">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q17} onChange={(e) => setQ17('3')} id="Very10" name="group10" />
                <label for="Very10">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              During a course examination, I get so nervous that I forget facts
              I really know
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q18} onChange={(e) => setQ18('0')} id="Not11" name="group11" />
                <label for="Not11">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q18} onChange={(e) => setQ18('1')} id="Somewhat11" name="group11" />
                <label for="Somewhat11">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q18} onChange={(e) => setQ18('2')}id="Quite11" name="group11" />
                <label for="Quite11">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q18} onChange={(e) => setQ18('3')}id="Very11" name="group11" />
                <label for="Very11">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>During tests, I have the feeling that I am not doing well</p>
            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q19} onChange={(e) => setQ19('0')}id="Not12" name="group12" />
                <label for="Not12">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q19} onChange={(e) => setQ19('1')}id="Somewhat12" name="group12" />
                <label for="Somewhat12">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q19} onChange={(e) => setQ19('2')}id="Quite12" name="group12" />
                <label for="Quite12">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q19} onChange={(e) => setQ19('3')} id="Very12" name="group12" />
                <label for="Very12">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>
              After taking a test, I feel I should have done better than I
              actually did
            </p>
            <ul class="donate-now">
              <li>
                <input type="radio" value={Q20} onChange={(e) => setQ20('0')} id="Not13" name="group13" />
                <label for="Not13">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q20} onChange={(e) => setQ20('1')}  id="Somewhat13" name="group13" />
                <label for="Somewhat13">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q20} onChange={(e) => setQ20('2')} id="Quite13" name="group13" />
                <label for="Quite13">Quite typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q20} onChange={(e) => setQ20('3')}  id="Very13" name="group13" />
                <label for="Very13">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>I often realize mistakes I made right after turning in a test</p>
            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q21} onChange={(e) => setQ21('0')} id="Not14" name="group14" />
                <label for="Not14">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q21} onChange={(e) => setQ21('1')} id="Somewhat14" name="group14" />
                <label for="Somewhat14">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio"  value={Q21} onChange={(e) => setQ21('2')}id="Quite14" name="group14" />
                <label for="Quite14">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q21} onChange={(e) => setQ21('3')} id="Very14" name="group14" />
                <label for="Very14">Very typical of me</label>
              </li>
            </ul>
          </div>
          <div className="question">
            <p>When I finish a hard test, I am afraid to see the score</p>
            <ul class="donate-now">
              <li>
                <input type="radio"  value={Q22} onChange={(e) => setQ22('0')}id="Not15" name="group15" />
                <label for="Not15">Not at all typical of me</label>
              </li>
              <li>
                <input type="radio"value={Q22} onChange={(e) => setQ22('1')} id="Somewhat15" name="group15" />
                <label for="Somewhat15">Somewhat typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q22} onChange={(e) => setQ22('2')}id="Quite15" name="group15" />
                <label for="Quite15">Quite typical of me</label>
              </li>
              <li>
                <input type="radio" value={Q22} onChange={(e) => setQ22('3')}id="Very15" name="group15" />
                <label for="Very15">Very typical of me</label>
              </li>
            </ul>
          </div>
          <button className="viewResult" onClick={predictBtn}>View Result</button>
          
        </div>
        
        <DarkFooter />
      </div>
    </div>
  );
};

export default Test;
