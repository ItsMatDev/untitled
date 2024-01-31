import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="left-navbar">
        <li>
          <Link to="/">untitled</Link>
        </li>
      </ul>
      <ul className="right-navbar">
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
