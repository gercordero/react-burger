import React, { Component } from "react";
import Aux from "../../Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.show !== nextProps.show;
  }

  render() {
    let show = {
      transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
      opacity: this.props.show ? "1" : "0"
    };
    return (
      <Aux>
        <Backdrop show={this.props.show} closed={this.props.closeModal} />
        <div style={show} className={styles.Modal}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
