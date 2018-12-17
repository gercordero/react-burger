import React from "react";
import styles from "./Control.css";

const control = props => {
  return (
    <div className={styles.Control}>
      <button
        className={styles.Less}
        onClick={() => props.update(props.ingredientName, "less")}
      >
        -
      </button>
      <p className={styles.Label}>
        {props.ingredientName.charAt(0).toUpperCase() +
          props.ingredientName.slice(1)}
      </p>
      <button
        className={styles.More}
        onClick={() => props.update(props.ingredientName, "more")}
      >
        +
      </button>
    </div>
  );
};

export default control;
