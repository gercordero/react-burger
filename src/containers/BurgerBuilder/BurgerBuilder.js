import React, { Component } from "react";
import Aux from "../../components/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  keyGen = () => {
    return (
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  state = {
    ingredients: {
      meat: { amount: 0, price: 2, block: { more: false, less: true } },
      cheese: { amount: 0, price: 1, block: { more: false, less: true } },
      bacon: { amount: 0, price: 1.5, block: { more: false, less: true } },
      salad: { amount: 0, price: 0.5, block: { more: false, less: true } }
    },
    actualIngredients: [],
    priceToPay: 0,
    purchasable: false,
    showOrder: false
  };

  update = (objIng, arrIng, price) => {
    this.setState({
      ingredients: objIng,
      actualIngredients: arrIng,
      priceToPay: price
    });
  };

  updatePurchase = aBoolean => {
    this.setState({
      purchasable: aBoolean
    });
  };

  isPurchasable = () => {
    let purchase = false;
    if (this.state.ingredients["meat"].amount > 0) {
      purchase = true;
    }
    this.updatePurchase(purchase);
  };

  showOrder = aBoolean => {
    this.setState({
      showOrder: aBoolean
    });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.showOrder} closeModal={this.showOrder}>
          <OrderSummary
            ingredients={this.state.ingredients}
            closeModal={this.showOrder}
            priceToPay={this.state.priceToPay}
            keyGen={this.keyGen}
          />
        </Modal>
        <Burger
          actualIngredients={this.state.actualIngredients}
          ingredients={this.state.ingredients}
          keyGen={this.keyGen}
        />
        <BuildControls
          ingredients={this.state.ingredients}
          actualIngredients={this.state.actualIngredients}
          priceToPay={this.state.priceToPay}
          update={this.update}
          isPurchasable={this.isPurchasable}
          purchasable={this.state.purchasable}
          showOrder={this.showOrder}
          keyGen={this.keyGen}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
