import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Advice from "./Pages/Advice/Advice";
import Admin from "./Pages/Admin/Admin";
import UpdateTherapist from "./Pages/Admin/UpdateTherapist/UpdateTherapist";
import DeleteTherapist from "./Pages/Admin/DeleteTherapist/DeleteTherapist";
import DeleteBook from "./Pages/Admin/DeleteBook/DeleteBook";
import UpdateBook from "./Pages/Admin/UpdateBook/UpdateBook";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Questionnaire/Test/Test";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Sign up/Sign";
import Read1 from "./Pages/Read more/Read1/Read1";
import Read2 from "./Pages/Read more/Read2/Read2";
import Read3 from "./Pages/Read more/Read3/Read3";
import Disorder from "./Pages/Questionnaire/Disorder/Disorder";
import Therapist from "./Pages/Therapist/Therapist";
import Normal from "./Pages/Results/Disorder Results/Normal";
import Mild from "./Pages/Results/Disorder Results/Mild";
import Moderate from "./Pages/Results/Disorder Results/Moderate";
import Severe from "./Pages/Results/Disorder Results/Severe";
import Extremely from "./Pages/Results/Disorder Results/Extremely";
import Low from "./Pages/Results/Test Results/low";
import Medium from "./Pages/Results/Test Results/Medium";
import High from "./Pages/Results/Test Results/High";
import Profile from "./Pages/Profile/Profile";
import Choose from "./Pages/Questionnaire/Choose";
import ScrollToTop from "./Components/ScrollToTop";
import Chat from "./Pages/Chatbot/Chat";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="/test_questionnaire" element={<Test />} />
          <Route path="/low" element={<Low />} />
          <Route path="/medium" element={<Medium />} />
          <Route path="/high" element={<High />} />
          <Route path="/disorder_questionnaire" element={<Disorder />} />
          <Route path="/NormalDisorder" element={<Normal />} />
          <Route path="/MildDisorder" element={<Mild />} />
          <Route path="/ModerateDisorder" element={<Moderate />} />
          <Route path="/SevereDisorder" element={<Severe />} />
          <Route path="/ExtremelyDisorder" element={<Extremely />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/UpdateBook" element={<UpdateBook />} />
          <Route path="/UpdateTherapist" element={<UpdateTherapist />} />
          <Route path="/DeleteTherapist" element={<DeleteTherapist />} />
          <Route path="/DeleteBook" element={<DeleteBook />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/read1" element={<Read1 />} />
          <Route path="/read2" element={<Read2 />} />
          <Route path="/read3" element={<Read3 />} />
          <Route path="/Choose" element={<Choose />} />{" "}
          <Route path="/chatbot" element={<Chat />} />{" "} 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;