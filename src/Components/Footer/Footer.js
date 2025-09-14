import React from "react";
import "./Footer.css";
import {
  ChatFill,
  Facebook,
  Instagram,
  MapFill,
  PhoneFill,
  Tiktok,
} from "react-bootstrap-icons";
import { Link } from "react-router";
import { useTheme } from "./../Header/Brightness";
function Footer() {
  const { theme } = useTheme();
  return (
    <div className={theme === "dark" ? "footer toDimFoot" : "footer"}>
      <div className="footerWraper">
        <div className="footerItemWraper row">
          <div className="mrChicken col-md-4">
            <div className="mrChickenText">
              Mr <p className="chickred"> Chichen</p>
            </div>
            <div className="mrChickenDescription">
              <p className="grey">Authentic Ethiopian cuisine since 2024</p>
            </div>
            <div className="socialMedia">
              <div className="facebook">
                <Facebook />
              </div>
              <div className="instagram">
                <Instagram />
              </div>
              <div className="tiktok">
                <Tiktok />
              </div>
            </div>
          </div>

          <div className="contacts col-md-4">
            <p className="contact-text">Contact</p>
            <div className="locations">
              <MapFill className="icon-foot" />{" "}
              <p className="grey con-foot">Bole, Addis Abeba</p>
            </div>
            <div className="phone">
              <PhoneFill className="icon-foot" /> 
              <p className="grey forRed con-foot"><a className="grey forRed " href='tel: +251941250000' >+251 941 25 0000</a></p>
            </div>
            <div className="email">
              <ChatFill className="icon-foot" /> 
              <p className="grey forRed con-foot"><a className="grey forRed " href='mailto: info@mrchickenet.com'>info@mrchickenet.com</a></p>
            </div>
          </div>

          <div className="hours col-md-4">
            <p className="contact-text">Hours</p>
            <div className="mon grey">
              <div className="date">Mon - Fri</div>
              <div className="openHours">11:00 AM - 10:00 PM</div>
            </div>
            <div className="sat grey">
              <div className="date">Saturday</div>
              <div className="openHours">10:00 AM - 11:00 PM</div>
            </div>
            <div className="sun grey">
              <div className="date">Sunday</div>
              <div className="openHours">10:00 AM - 9:00 PM</div>
            </div>
          </div>
        </div>

        <div className="copyRight">
          <p className="grey">© 2025</p>
          <p className="two">Mr Chicken,</p>
          <p className="grey"> All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
