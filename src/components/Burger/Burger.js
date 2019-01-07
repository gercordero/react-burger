import React from "react";
import styles from "./Burger.css";
import BurgerIngredient from "./BurgerIngridient/BurgerIngridient";

const burger = props => {
  let ingredients = props.actualIngredients.map(ingKey => (
    <BurgerIngredient
      key={props.keyGen()}
      type={Object.keys(ingKey).join("")}
    />
  ));

  if (props.actualIngredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
