import React, { useRef, useEffect } from "react";
import "./AccountMenu.css";

export default function AccountMenu({ open, onClose }) {
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose(); // tell Navbar to close
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="menu-wrapper" ref={menuRef}>
      <div className="popup-menu">
        <button className="popup-item">A minha conta</button>
        <button className="popup-item">Terminar Sessão</button>
      </div>
    </div>
  );
}
