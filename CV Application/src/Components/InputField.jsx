import React from "react";
import Section from "./Section";
import styles from "../StyleSheets/InputField.module.css";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

function InputField({
  onExperienceChange,
  onEducationChange,
  onPersonalInfoChange,
  educationData,
  experienceData,
  addEducation,
  addExperience,
  removeEducation,
  removeExperience,
}) {
  return (
    <div className={styles.input}>
      <PersonalInfo onInputChange={onPersonalInfoChange} />
      <Education
        onInputChange={onEducationChange}
        educationData={educationData}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />
      <Experience
        onInputChange={onExperienceChange}
        experienceData={experienceData}
        addExperience={addExperience}
        removeExperience={removeExperience}
      />
    </div>
  );
}

export default InputField;
