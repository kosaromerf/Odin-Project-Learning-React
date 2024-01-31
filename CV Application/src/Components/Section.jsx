import styles from "../StyleSheets/Sections.module.css";
import Input from "./Input";
import React from "react";

function Section({ name, inputs, onDataChange }) {
  return (
    <div className={styles.subcontainer}>
      <h4>{name}</h4>
      {inputs.map((input) => (
        <Input key={input.label} {...input} onDataChange={onDataChange} />
      ))}
    </div>
  );
}

export default Section;
