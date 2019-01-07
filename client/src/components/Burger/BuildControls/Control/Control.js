import React from "react";
import styles from "./Control.css";

const control = props => {
  return (
    <div className={styles.Control}>
      <button
        className={styles.Less}
        disabled={props.stats["less"]}
        onClick={() => props.popIngredient(props.ingredientName)}
      >
        -
      </button>
      <p className={styles.Label}>
        {props.ingredientName.charAt(0).toUpperCase() +
          props.ingredientName.slice(1)}
      </p>
      <button
        className={styles.More}
        disabled={props.stats["more"]}
        onClick={() => props.pushIngredient(props.ingredientName)}
      >
        +
      </button>
    </div>
  );
};

export default control;
