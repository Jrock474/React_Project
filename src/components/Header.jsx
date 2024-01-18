import React,{ useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [isNavbarActive, setIsNavbarActive] = useState(false)
  return (
    <>
      <div className="header">
        <h1>
          <Link className="link" to="/">
            Geography Seach
          </Link>
        </h1>
        <div class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
        <ul className="navbar">
          <li>
            <Link className="link" to="/countries">
              Countries
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact_us">
              Contact Us
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
