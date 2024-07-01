import React from "react";
import Button from "./Button";
import styles from "../Styles/App.module.css";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header></Header>
      <section className={styles.page}>
        <h1 className={styles.headline}>SPICE UP YOUR LIFE!</h1>
        <p className={styles.subline}>
          Discover the joy of cooking with fresh, aromatic spices and herbs.
          Browse our curated collection and rediscover the magic in your
          kitchen.
        </p>
        <button className={styles.cta}>Browse the Flavors</button>
      </section>
      {/*       <div className={styles.page}>
        <Button text="About" />
        <Button text="Products" />
        <Button text="Contact" />
      </div> */}
    </div>
  );
};

export default App;
