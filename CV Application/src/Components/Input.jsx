import React, { useState } from "react";
import styles from "../StyleSheets/Input.module.css";

function Input({ type, label, value, onChange, placeholder }) {
  return (
    <div className={styles.inputCouple}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Input;
