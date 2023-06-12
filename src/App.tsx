import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import Exam from "./components/Exam";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/words" element={<Choose />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
