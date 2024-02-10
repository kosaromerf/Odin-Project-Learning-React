import React from "react";
import styles from "../Styles/Card.module.css";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <img src="" alt="" className={styles.images} />
      <p className={styles.title}> Pul Biber</p>
      <p className={styles.priceKg}> 120 TL/Kg</p>
      <div className={styles.inputContaier}>
        <div className={styles.amount}>
          <input
            type="number"
            placeholder="100"
            className={styles.inputField}
          />
          <button className={styles.increaseBtn}>+</button>
          <button className={styles.decreaseBtn}>-</button>
        </div>
        <p className={styles.priceResult}>150Tl</p>
      </div>
      <button className={styles.add}>Add To Cart</button>
    </div>
  );
};

export default Card;
