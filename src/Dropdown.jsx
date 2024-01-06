import React, { useState, useEffect } from "react";

function Dropdown({ selected, setSelected, items }) {
  const [isActive, setIsActive] = useState(false);
  ("Choose One");
  const options = ["Marvels", "DC", "Anime", "K Drama"];

  const handleItemClick = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  useEffect(() => {
    let timeoutId;

    if (isActive) {
      // Clear any existing timeout to prevent premature hiding
      clearTimeout(timeoutId);
    } else {
      // Add a delay of 5 seconds before hiding the dropdown content
      timeoutId = setTimeout(() => {
        setIsActive(false);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [isActive]);

  return (
    <div className="dropdown">
      <h2 className="dropdown-heading">MY DROP-DOWN MENU</h2>
      <div
        className="dropdown-btn"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {selected || "Choose One"}
        <span className="fas fa-caret-down"></span>
      </div>
      <div className={`dropdown-content ${isActive ? "show" : "hide"}`}>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(option)}
            className="dropdown-item"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
