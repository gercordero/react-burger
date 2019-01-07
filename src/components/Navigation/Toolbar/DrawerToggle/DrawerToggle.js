import React from "react";
import styles from "./DrawerToggle.css";

const drawerToggle = props => (
  <div
    className={styles.DrawerToggle}
    onClick={() => props.openSideDrawer(true)}
  >
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
