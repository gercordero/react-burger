import React, { Component } from "react";
import Aux from "../../components/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  updateIngredient = objIng => {
    this.setState({
      ingredients: objIng
    });
  };

  ingredientHandler = (igKey, operator) => {
    let objIng = {
      ...this.state.ingredients
    };
    if ((operator === "less") & (this.state.ingredients[igKey] > 0)) {
      objIng[igKey] = --objIng[igKey];
    } else if ((operator === "more") & (this.state.ingredients[igKey] < 4)) {
      objIng[igKey] = ++objIng[igKey];
    }
    this.updateIngredient(objIng);
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          update={this.ingredientHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
