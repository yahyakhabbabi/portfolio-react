import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assests/ping.jpg";
import { Link } from "react-scroll";
import contactImg from "../../assests/contact.png";
import menu from "../../assests/menu.png";
export default function Navbar() {
  const [showMenu ,setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="desktopMenu">
        <Link
          ctiveClass="active"
          to="intro"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          a
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          ctiveClass="active"
          to="skills"
          spy="true"
          smooth="true"
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          ctiveClass="active"
          to="works"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          ctiveClass="active"
          to="contactPage"
          spy="true"
          smooth="true"
          offset={-80}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <div>
        {" "}
        <button
          className="desktopMenuBtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopMenuImg" />
          Contact Me
        </button>
      </div>
      <img src={menu} alt="Logo" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          a
          className="ListItem"
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy="true"
          smooth="true"
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy="true"
          smooth="true"
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={()=>setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy="true"
          smooth="true"
          offset={-80}
          duration={500}
          className="ListItem"
          onClick={()=>setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contactPage"
          spy="true"
          smooth="true"
          offset={-80}
          duration={500}
          className="ListItem"
          onClick={()=>setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
