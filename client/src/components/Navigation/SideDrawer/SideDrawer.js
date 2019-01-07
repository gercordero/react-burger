import React from "react";
import Logo from "../Toolbar/Logo/Logo";
import NavigationItems from "../Toolbar/NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../Aux/Aux";
import styles from "./SideDrawer.css";

const sideDrawer = props => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.showSideDrawer) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.showSideDrawer} closed={props.closeSideDrawer} />
      <div className={attachedStyles.join(" ")}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
