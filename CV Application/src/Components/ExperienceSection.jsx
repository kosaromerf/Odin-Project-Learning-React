import React from "react";
import Input from "./Input";
import styles from "../StyleSheets/Sections.module.css";
import Button from "./Button";
const ExperienceSection = ({ onInputChange, index, removeExperience }) => {
  return (
    <div className={styles.inputComponent}>
      <Input
        type="text"
        label="Company"
        placeholder={"Google"}
        onChange={(value) => onInputChange(index, "company", value)}
      />
      <Input
        type="text"
        label="Position"
        placeholder={"Junior Developer"}
        onChange={(value) => onInputChange(index, "position", value)}
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
        placeholder={2023}
        onChange={(value) => onInputChange(index, "finishingYear", value)}
      />
      <Input
        type="text"
        label="Location"
        placeholder={"Paris/France"}
        onChange={(value) => onInputChange(index, "location", value)}
      />
      <label htmlFor="Detail">Detail</label>
      <textarea
        rows={5}
        placeholder={"Please explain your duties in the company briefly"}
        onChange={(event) =>
          onInputChange(index, "jobDescription", event.target.value)
        }
      />
      <Button text="Delete" onClickEvent={() => removeExperience(index)} />
    </div>
  );
};

export default ExperienceSection;
