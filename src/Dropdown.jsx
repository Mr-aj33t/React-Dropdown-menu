import React, { useState } from "react";

function Dropdown({ selected, setSelected, items }) {
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = (option) => {
    setSelected(option);
    setIsActive(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="dropdown-btn">
        {selected || "Choose One"}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {items &&
            items.map((option, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(option)}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState("");
  ("Choose One");
  const items = ["Marvels", "DC", "Anime", "K Drama"];

  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} items={items} />
    </div>
  );
}

export default App;
