import React from "react";

const DifficultyButton = ({ text, btncolor, difClick }) => {
  return (
    <button style={{ backgroundColor: btncolor }} onClick={() => difClick()}>
      {text}
    </button>
  );
};

export default DifficultyButton;
