import React from "react";
import Input from "./Input";
import styles from "../StyleSheets/Sections.module.css";
import EducationSection from "./EducationSection";
import Button from "./Button";
const Education = ({
  onInputChange,
  educationData,
  addEducation,
  removeEducation,
}) => {
  return (
    <div className={styles.subcontainer}>
      <h4>Education</h4>
      {educationData.map((e, i) => (
        <EducationSection
          onInputChange={onInputChange}
          key={i}
          index={i}
          removeEducation={removeEducation}
        />
      ))}
      <Button text="Add" onClickEvent={addEducation} />
    </div>
  );
};

export default Education;
