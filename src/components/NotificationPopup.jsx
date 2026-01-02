import React from "react";
import "./notificationPopup.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const NotificationPopup = ({
  title = "Tarefas em andamento",
  subtitle = "Se Fixe – Poupa Energia e Combustível!",
  actionText = "Vamos trabalhar!",
  onClick,
}) => {
  return (
    <div className="notif-popup">
      <h4 className="notif-title">{title}</h4>

      <div className="notif-content">
        <div className="notif-text-content">
          <div className="notif-subtitle">{subtitle}</div>
          <div className="notif-action">{actionText}</div>
        </div>

        <div className="notif-btn" onClick={onClick}>
          <Link to="/challenge/1/1">
            <MdKeyboardArrowRight size={24} color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
