import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useTheme } from "./Brightness";
import LogoImage from "./../Images/logo.webp";
import {
  BrightnessHigh,
  List,
  Dot,
  X,
  HouseFill,
  PeopleFill,
  MenuUp,
  ChatFill,
  MoonFill,
} from "react-bootstrap-icons";

function Header() {
  const { theme, toggleTheme } = useTheme();

  const [isToogleOpen, setIsToogleOpen] = useState(false);
  const [bigPage, setBigPage] = useState("home");

  const toggleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  
  const goToHome = () => {
    navigate("./../Home/Home.js");
  };
  const goToMenu = () => {
    navigate("./../Menu/Menu.js");
  };
  const goToAbout = () => {
    navigate("./../About/About.js");
  };
  const goToContact = () => {
    navigate("./../Contact/Contact.js");
  };
 

  const toggleChangerOpen = () => {
    setIsToogleOpen(true);
  };

  const toggleChangerClose = () => {
    setIsToogleOpen(false);
  };

  const handleClickOutside = (event) => {
    if (toggleRef.current && !toggleRef.current.contains(event.target)) {
      setIsToogleOpen(false);
    }
  };

  useEffect(() => {
    if (isToogleOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Use mousedown for better click detection
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up listener
    };
  }, [isToogleOpen]);

  useEffect(() => {
    if (location.pathname === "/") {
      setBigPage("home");
    } else if (location.pathname === "/menu") {
      setBigPage("menu");
    } else if (location.pathname === "/about") {
      setBigPage("about");
    } else if (location.pathname === "/contact") {
      setBigPage("contact");
    }  
  }, [location.pathname]);

  return (
    <div className={theme === "dark" ? "header dimHead" : "header"}>
      <div className="container mx-auto flex h-16 items-center px-6">
        <div className="header-wraper">
          <Link to="/" className="logo-wraper">
            <div className="logo-image">
              <img src={LogoImage} alt="MrChicken-logo" />
            </div>
            <div className="logo-text">
              <p className="mr-chick-text">Mr. Chicken</p>
              <p className="logo-text-aditional grey">
                Taste the chicken, love the flavor!
              </p>
            </div>
          </Link>
          <div className="header-lists-wraper">
            <div className="header-lists">
              {bigPage === "home" ? (
                <Link onClick={goToHome} to="/" className="redbg">
                  {" "}
                  Home <Dot color="#fa5523" size={30} />{" "}
                </Link>
              ) : (
                <Link onClick={goToHome} to="/" className="home">
                  Home
                </Link>
              )}
              {bigPage === "menu" ? (
                <Link onClick={goToMenu} to="/menu" className="redbg">
                  {" "}
                  Menu <Dot color="#fa5523" size={30} />{" "}
                </Link>
              ) : (
                <Link onClick={goToMenu} to="/menu" className="home">
                  Menu
                </Link>
              )}
              {bigPage === "about" ? (
                <Link onClick={goToAbout} to="/about" className="redbg">
                  {" "}
                  About <Dot color="#fa5523" size={30} />{" "}
                </Link>
              ) : (
                <Link onClick={goToAbout} to="/about" className="home">
                  {" "}
                  About{" "}
                </Link>
              )}
              {bigPage === "contact" ? (
                <Link onClick={goToContact} to="/contact" className="redbg">
                  {" "}
                  Contact <Dot color="#fa5523" size={30} />{" "}
                </Link>
              ) : (
                <Link onClick={goToContact} to="/contact" className="home">
                  Contact
                </Link>
              )}
            </div>
            <div onClick={toggleTheme} className="light-mode">
              {theme === "light" ? <BrightnessHigh /> : <MoonFill />}
            </div>
            <div className="list-toggler">
              <List
                onClick={toggleChangerOpen}
                size={35}
                className="shown-toggler"
              />
              <div
                className={`toggled-section ${isToogleOpen ? "visible" : ""}`}
              >
                <div
                  ref={toggleRef}
                  onClick={toggleChangerClose}
                  className="toggled-section-wraper"
                >
                  <X
                    color="black"
                    onClick={toggleChangerClose}
                    size={24}
                    className="cancel-toggle-icon"
                  ></X>
                  <div className="logo-toggled">
                    <Link to="/" className="logo-wraper last-logo">
                      <div className="logo-image">
                        <img src={LogoImage} alt="MrChicken-logo" />
                      </div>
                      <div className="logo-text">
                        <p className="mr-chick-text last">Mr. Chicken</p>
                      </div>
                    </Link>
                  </div>
                  <div className="toggle-listes-hopuped-wraper">
                    <Link onClick={goToHome} to="/" className="toggle-home">
                      <HouseFill className="iconses" /> Home
                    </Link>
                    <Link onClick={goToMenu} to="/menu" className="toggle-menu">
                      <MenuUp className="iconses" /> Menu
                    </Link>
                    <Link
                      onClick={goToAbout}
                      to="/about"
                      className="toggle-about-us"
                    >
                      <PeopleFill className="iconses" /> About Us
                    </Link>
                    <Link
                      onClick={goToContact}
                      to="/contact"
                      className="toggle-contact"
                    >
                      <ChatFill className="iconses" /> Contact
                    </Link>
                  </div>
                  <div className="toggle-footer">
                    <div className="footer-toogle-wrapper">
                      <div
                        onClick={toggleTheme}
                        className="light-mode lightAtLast"
                      >
                        {theme === "light" ? <BrightnessHigh /> : <MoonFill />}
                      </div>
                      <div className="toggle-footer-copyright grey">
                        © 2025 Mr. Chicken
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
