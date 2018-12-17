import React from "react";
import Control from "./Control/Control";
import styles from "./BuildControls.css";

const buildControls = props => {
  let ingredient = Object.keys(props.ingredients).map((igKey, index) => {
    return (
      <Control
        key={igKey + index}
        ingredients={props.ingredients}
        ingredientName={igKey}
        update={props.update}
      />
    );
  });
  return <div className={styles.BuildControls}>{ingredient}</div>;
};

export default buildControls;
