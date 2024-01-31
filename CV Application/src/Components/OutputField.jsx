import { useEffect, useState } from "react";
import styles from "../StyleSheets/OutputField.module.css";
import React from "react";
import { FaPhone, FaCity } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";

function OutputField({ data }) {
  console.log(data);

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h1 className={styles.name}>
          {data.personalInfo.name} {data.personalInfo.surname.toUpperCase()}
        </h1>
        <ul className={styles.contact}>
          <li className={styles.phone}>
            <FaPhone className={styles.icon} />
            {data.personalInfo.phone}
          </li>
          <li className={styles.email}>
            <FaEnvelope className={styles.icon} />
            {data.personalInfo.email}
          </li>
          <li className={styles.adress}>
            <FaCity className={styles.icon} />
            {data.personalInfo.location}
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subsection}>Education</h2>
        <div className={styles.content}>
          {data.education.map((e, i) => {
            return (
              <div key={i} className={styles.subContent}>
                <div className={styles.left}>
                  <p
                    className={styles.date}
                  >{`${e.startingYear}-${e.finishingYear}`}</p>
                  <p className={styles.location}>{e.location}</p>
                </div>
                <div className={styles.right}>
                  <p className={styles.school}>{e.school}</p>
                  <p className={styles.degree}>{e.degree}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.subsection}>Practice</h2>
        <div className={styles.content}>
          {data.experience.map((e, i) => {
            return (
              <div key={i} className={styles.subContent}>
                <div className={styles.left}>
                  <p
                    className={styles.date}
                  >{`${e.startingYear}-${e.finishingYear}`}</p>
                  <p className={styles.location}>{e.location}</p>
                </div>
                <div className={styles.right}>
                  <p className={styles.school}>{e.company}</p>
                  <p className={styles.degree}>{e.position}</p>
                  <p className={styles.degree}>{e.jobDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OutputField;
