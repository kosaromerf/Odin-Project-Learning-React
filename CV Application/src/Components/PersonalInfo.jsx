import React from "react";
import Input from "./Input";
import styles from "../StyleSheets/Sections.module.css";
import Button from "./Button";

const PersonalInfo = ({ onInputChange }) => {
  return (
    <div className={styles.subcontainer}>
      <h4>Personal Info</h4>
      <div className={styles.inputComponent}>
        <Input
          type="text"
          label="Name"
          placeholder={"Jhon"}
          onChange={(value) => onInputChange("name", value)}
        />
        <Input
          type="text"
          label="Surname"
          placeholder={"Smith"}
          onChange={(value) => onInputChange("surname", value)}
        />
        <Input
          type="text"
          label="Phone"
          placeholder={"Phone Number"}
          onChange={(value) => onInputChange("phone", value)}
        />
        <Input
          type="text"
          label="E-mail"
          placeholder={"jhonsmith@example.com"}
          onChange={(value) => onInputChange("email", value)}
        />
        <Input
          type="text"
          label="Location"
          placeholder={"Paris/France"}
          onChange={(value) => onInputChange("location", value)}
        />
        <Button text="Collapse" />
      </div>
    </div>
  );
};

export default PersonalInfo;
