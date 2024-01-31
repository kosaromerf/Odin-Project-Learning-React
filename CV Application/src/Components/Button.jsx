import React from "react";

function Button({ text, onClickEvent }) {
  return (
    <div>
      <button onClick={onClickEvent}>{text}</button>
    </div>
  );
}

export default Button;
