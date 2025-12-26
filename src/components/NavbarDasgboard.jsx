import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import NotificationPopup from "./NotificationPopup";
import AccountMenu from "./AccountMenu";

import logoImage from "../assets/images/logo_gobeeco.svg";

// Mission thumbnails
import m1Image from "../assets/images/navbar/m1-thumb-md.jpg";
import m2Image from "../assets/images/navbar/m2-thumb-md.jpg";
import m3Image from "../assets/images/navbar/m3-thumb-md.jpg";
import m4Image from "../assets/images/navbar/m4-thumb-md.jpg";
import m5Image from "../assets/images/navbar/m5-thumb-md.jpg";

// Icons
import bellIcon from "../assets/icons/bell.png";
import userIcon from "../assets/icons/user.png";
import trophyIcon from "../assets/icons/trophy.png";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);

  const missions = [
    { id: 1, color: "#ffab2d", image: m1Image },
    { id: 2, color: "#26d56f", image: m2Image },
    { id: 3, color: "#cd51ec", image: m3Image },
    { id: 4, color: "#1fc0e3", image: m4Image },
    { id: 5, color: "#deba00", image: m5Image },
  ];

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setShowAccountMenu(false);
  };

  const toggleAccountMenu = () => {
    setShowAccountMenu((prev) => !prev); // Simply toggle the state
    setShowNotifications(false); // Ensure notifications are closed
  };
  return (
    <nav className="navbar">
      {/* LEFT: LOGO */}
      <div className="navbar-left">
        <div className="logo-container">
          <img src={logoImage} alt="Go Be Eco" style={{ height: "60px" }} />
        </div>
      </div>

      {/* CENTER: MISSIONS */}
      

      {/* RIGHT ACTIONS */}
      <div className="navbar-right">
        <div className="user-actions">
          <span className="user-points">20 pts</span>

          {/* Trophy + Bell wrapper */}
          <div className="icon-wrapper notification-wrapper">
            <Link to="/ranking">
              <img src={trophyIcon} alt="Trophy" className="icon trophy-icon" />
            </Link>

            {/* 🔔 BELL ICON */}
            <img
              src={bellIcon}
              alt="Notifications"
              className="icon bell-icon"
              onClick={toggleNotifications}
            />
            <span className="notification-badge">1</span>

            {/* SHOW NOTIFICATION POPUP */}
            {showNotifications && <NotificationPopup />}
          </div>

          {/* 👤 USER ICON */}
          <div className="icon-wrapper account-wrapper">
            <img
              src={userIcon}
              alt="User Profile"
              className="icon user-icon"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event bubbling
                toggleAccountMenu();
              }}
            />

            {/* SHOW ACCOUNT MENU */}
            <AccountMenu
              open={showAccountMenu}
              onClose={() => setShowAccountMenu(false)}
            />
          </div>
        </div>

        <div className="language-selector">
          <span className="active">EN</span> · <span>PL</span> · <span>DE</span>{" "}
          · <span>PT</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
