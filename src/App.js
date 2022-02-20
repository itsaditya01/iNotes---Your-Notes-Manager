import "./App.css";
import Login from "./components/Login/Login.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.component";
import About from "./components/About/About.component";
import NoteState from './Context/NotesState';
import Home from './components/Home/Home.component'

function App() {
  return (
    <div className="App">
      <NoteState>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<About />} />
        </Routes>
      </Router>
      </NoteState>
    </div>
  );
}

export default App;
