import React from "react";
import Input from "./Input";
import styles from "../StyleSheets/Sections.module.css";
import Button from "./Button";
const EducationSection = ({ onInputChange, index, removeEducation }) => {
  return (
    <div className={styles.inputComponent}>
      <Input
        type="text"
        label="School"
        placeholder={"Harvard"}
        onChange={(value) => onInputChange(index, "school", value)}
      />
      <Input
        type="text"
        label="Degree"
        placeholder={"Mechanical Engineering"}
        onChange={(value) => onInputChange(index, "degree", value)}
      />
      <Input
        type="number"
        label="Start"
        placeholder={2020}
        onChange={(value) => onInputChange(index, "startingYear", value)}
      />
      <Input
        type="number"
        label="End"
        placeholder={2024}
        onChange={(value) => onInputChange(index, "finishingYear", value)}
      />
      <Input
        type="text"
        label="Location"
        placeholder={"New York / USA"}
        onChange={(value) => onInputChange(index, "location", value)}
      />

      <Button text="Delete" onClickEvent={() => removeEducation(index)} />
    </div>
  );
};

export default EducationSection;
