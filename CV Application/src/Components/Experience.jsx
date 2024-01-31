import React from "react";
import Input from "./Input";
import styles from "../StyleSheets/Sections.module.css";
import ExperienceSection from "./ExperienceSection";
import Button from "./Button";
const Experience = ({
  onInputChange,
  experienceData,
  addExperience,
  removeExperience,
}) => {
  return (
    <div className={styles.subcontainer}>
      <h4>Experience</h4>
      {experienceData.map((e, i) => (
        <ExperienceSection
          onInputChange={onInputChange}
          key={i}
          index={i}
          removeExperience={removeExperience}
        />
      ))}
      <Button text="Add" onClickEvent={addExperience} />
    </div>
  );
};

export default Experience;
