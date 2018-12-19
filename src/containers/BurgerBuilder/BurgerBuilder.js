import React, { Component } from "react";
import Aux from "../../components/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  idGenerator = () => {
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
    purchasable: false
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

  render() {
    return (
      <Aux>
        <Burger
          actualIngredients={this.state.actualIngredients}
          ingredients={this.state.ingredients}
          keyGen={this.idGenerator}
        />
        <BuildControls
          ingredients={this.state.ingredients}
          actualIngredients={this.state.actualIngredients}
          priceToPay={this.state.priceToPay}
          update={this.update}
          isPurchasable={this.isPurchasable}
          purchasable={this.state.purchasable}
          keyGen={this.idGenerator}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
