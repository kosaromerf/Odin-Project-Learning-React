import OutputField from "./OutputField";
import InputField from "./InputField";
import styles from "../StyleSheets/App.module.css";
import Header from "./Header";
import Input from "./Input";
import React, { useState } from "react";
import Education from "./Education";

function App() {
  const [data, setData] = useState({
    personalInfo: {
      name: "Jhon",
      surname: "Smith",
      phone: "+1 123 456 78 90",
      email: "jhonsmith@example.com",
      location: "Paris/France",
    },
    education: [
      {
        school: "Oxford",
        degree: "Physics",
        startingYear: 2016,
        finishingYear: 2020,
        location: "Oxford/England",
      },
      {
        school: "CalTech",
        degree: "Mechanical Engineering",
        startingYear: 2020,
        finishingYear: 2024,
        location: "LA/california",
      },
    ],
    experience: [
      {
        company: "",
        position: "",
        startingYear: 2020,
        finishingYear: 2024,
        location: "",
        jobDescription: "",
      },
    ],
  });

  const onPersonalInfoChange = (field, value) => {
    setData({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value },
    });
  };

  const onEducationChange = (index, field, value) => {
    setData({
      ...data,
      education: [
        ...data.education.slice(0, index),
        { ...data.education[index], [field]: value },
        ...data.education.slice(index + 1),
      ],
    });
  };

  const onExperienceChange = (index, field, value) => {
    setData({
      ...data,
      experience: [
        ...data.experience.slice(0, index),
        { ...data.experience[index], [field]: value },
        ...data.experience.slice(index + 1),
      ],
    });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [
        ...data.education,
        {
          school: "",
          degree: "",
          startingYear: 1970,
          finishingYear: 1970,
          location: "",
        },
      ],
    });
  };

  const addExperience = () => {
    setData({
      ...data,
      experience: [
        ...data.experience,
        {
          company: "",
          position: "",
          startingYear: 1970,
          finishingYear: 1970,
          location: "",
          jobDescription: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    setData({
      ...data,
      education: [
        ...data.education.slice(0, index),
        ...data.education.slice(index + 1),
      ],
    });
  };

  const removeExperience = (index) => {
    setData({
      ...data,
      experience: [
        ...data.experience.slice(0, index),
        ...data.experience.slice(index + 1),
      ],
    });
  };

  return (
    <div className={styles.page}>
      <Header></Header>
      <div className={styles.divided}>
        <div className={styles.input}>
          <InputField
            onEducationChange={onEducationChange}
            onPersonalInfoChange={onPersonalInfoChange}
            onExperienceChange={onExperienceChange}
            educationData={data.education}
            experienceData={data.experience}
            addEducation={addEducation}
            addExperience={addExperience}
            removeEducation={removeEducation}
            removeExperience={removeExperience}
          />
        </div>
        <div className={styles.output}>
          <OutputField data={data} />
        </div>
      </div>

      <footer className={styles.footer}>kosaromerf@gmail.com</footer>
    </div>
  );
}

export default App;
