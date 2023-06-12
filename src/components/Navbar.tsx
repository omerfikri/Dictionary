import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="main">
        <div className="mainLink">
          <Link to="/">Home</Link>
          <Link to="/words">Words</Link>
          <Link to="/exam">Exam</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
