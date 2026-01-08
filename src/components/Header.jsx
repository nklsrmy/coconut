import React from "react";
import DateSelector from "./DateSelector.jsx";
import "../styles/header.css";
import StationSelector from "./StationSelector.jsx";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="header-title">{title}</h1>
      <div className="selectors">
        <DateSelector />
        <StationSelector />
      </div>
    </div>
  );
};

export default Header;