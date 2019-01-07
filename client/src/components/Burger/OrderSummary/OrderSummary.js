import React from "react";
import Aux from "../../Aux/Aux";
import styles from "./OrderSummary.css";

const orderSummary = props => {
  let ingredients = Object.keys(props.ingredients).map(igKey => (
    <li key={props.keyGen()}>
      <span style={{ textTransform: "capitalize" }}>{igKey}</span>: x
      {props.ingredients[igKey].amount}
    </li>
  ));
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p>
        Total price: $<strong>{props.priceToPay}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <button
        className={styles.Button + " " + styles.Close}
        onClick={() => props.closeModal(false)}
      >
        CLOSE
      </button>
      <button className={styles.Button + " " + styles.Continue}>
        CONTINUE
      </button>
    </Aux>
  );
};

export default orderSummary;
