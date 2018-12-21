import React from "react";
import Logo from "./Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import styles from "./Toolbar.css";

const toolbar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle openSideDrawer={props.openSideDrawer} />
    <Logo />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
