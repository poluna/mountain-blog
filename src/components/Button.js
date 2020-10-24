import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({ children, type, onClick, to, className }) => {
  return (
    <Link to={to}>
      <button className={`btn ${className}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};
