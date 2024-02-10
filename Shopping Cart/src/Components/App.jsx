import React from "react";
import Button from "./Button";
import styles from "../Styles/App.module.css";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <header className={styles.header}>
        <Header></Header>
      </header>
      <div className={styles.page}>
        <Button text="About" />
        <Button text="Products" />
        <Button text="Contact" />
      </div>
    </div>
  );
};

export default App;
