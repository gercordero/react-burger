import React, { Component } from "react";
import Aux from "../Aux/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import styles from "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerShowHanlder = aBoolean => {
    this.setState({ showSideDrawer: aBoolean });
  };

  render() {
    return (
      <Aux>
        <Toolbar openSideDrawer={this.sideDrawerShowHanlder} />
        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          closeSideDrawer={this.sideDrawerShowHanlder}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
