import React from "react";
import Aux from "../../Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css";

const modal = props => {
  let show = {
    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.show ? "1" : "0"
  };
  return (
    <Aux>
      <Backdrop show={props.show} closeModal={props.closeModal} />
      <div style={show} className={styles.Modal}>
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
