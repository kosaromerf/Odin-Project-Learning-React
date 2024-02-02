import React from "react";

const OptionsButton = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default OptionsButton;
