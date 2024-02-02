import React from "react";
import styles from "../Styles/card.module.css";

const Card = ({ data, onChoice }) => {
  return (
    <div className={styles.card}>
      <img src={data} alt="wildAnimal" onClick={() => onChoice()} />
    </div>
  );
};

export default Card;
