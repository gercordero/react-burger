import React from "react";
import Aux from "../../Aux/Aux";
import Control from "./Control/Control";
import styles from "./BuildControls.css";

const buildControls = props => {
  const disableLessHandler = (objIng, ingKey) => {
    if (objIng[ingKey].amount > 0) {
      objIng[ingKey].block["less"] = false;
    } else {
      objIng[ingKey].block["less"] = true;
    }
    if (objIng[ingKey].amount < 4) {
      objIng[ingKey].block["more"] = false;
    }
  };

  const popIngredient = ingKey => {
    //Create a copys of state variables for not changing the state directly
    let objIng = { ...props.ingredients };
    let arrIng = [...props.actualIngredients];
    let price = props.priceToPay;
    //If there is at least 1 ingredient then...
    if (objIng[ingKey].amount > 0) {
      //Reduce 1 igredient
      objIng[ingKey].amount = --objIng[ingKey].amount;
      //Reduce the total priceToPay
      price -= objIng[ingKey].price;
      //Search position of the last desired element
      let index = arrIng.findIndex(el => {
        return el[ingKey] === objIng[ingKey];
      });
      //Remove element from array
      arrIng.splice(index, 1);
    }
    disableLessHandler(objIng, ingKey);
    props.update(objIng, arrIng, price);
    props.isPurchasable();
  };

  const disableMoreHandler = (objIng, ingKey) => {
    if (objIng[ingKey].amount >= 4) {
      objIng[ingKey].block["more"] = true;
    } else {
      objIng[ingKey].block["more"] = false;
    }
    if (objIng[ingKey].amount > 0) {
      objIng[ingKey].block["less"] = false;
    }
    return objIng;
  };

  const pushIngredient = ingKey => {
    let objIng = { ...props.ingredients };
    let arrIng = [...props.actualIngredients];
    let price = props.priceToPay;
    if (objIng[ingKey].amount < 4) {
      objIng[ingKey].amount = ++objIng[ingKey].amount;
      price += objIng[ingKey].price;
      arrIng.unshift({ [ingKey]: objIng[ingKey] });
    }
    objIng = disableMoreHandler(objIng, ingKey);
    props.update(objIng, arrIng, price);
    props.isPurchasable();
  };

  let control = Object.keys(props.ingredients).map(igKey => {
    return (
      <Control
        key={props.keyGen()}
        ingredientName={igKey}
        stats={props.ingredients[igKey].block}
        pushIngredient={pushIngredient}
        popIngredient={popIngredient}
      />
    );
  });
  return (
    <Aux>
      <div className={styles.Price}>
        Current price: <strong>{props.priceToPay}</strong>$
      </div>
      <div className={styles.BuildControls}>{control}</div>
      <div className={styles.OrderNow}>
        <button
          disabled={!props.purchasable}
          className={styles.OrderButton}
          onClick={() => props.showOrder(true)}
        >
          ORDER NOW
        </button>
      </div>
    </Aux>
  );
};

export default buildControls;
