import React, { Component } from "react";
import Aux from "../../components/Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.css";

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
