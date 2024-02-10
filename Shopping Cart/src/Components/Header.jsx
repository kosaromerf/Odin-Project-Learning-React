import logo from "../assets/logo.jpeg";
import styles from "../Styles/Header.module.css";
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.link}>
        <img src={logo} alt="logo Kosar Baharat" className={styles.logo} />
      </Link>

      <nav className={styles.navbar}>
        <Button text="/About" />
        <Button text="/Products" />
        <Button text="/Contact" />
      </nav>
    </div>
  );
};

export default Header;
