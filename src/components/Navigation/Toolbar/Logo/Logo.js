import React from "react";
import burgerLogo from "../../../../assets/logo.png";
import styles from "./Logo.css";

const logo = props => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="BurgerLogo" />
  </div>
);

export default logo;
