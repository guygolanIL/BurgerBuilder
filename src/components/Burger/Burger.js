import React from "react";

import "./Burger.css";

//Components
import { BurgerIngredient } from "./BurgerIngredient/BurgerIngredient";

export const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients!</p>
    }

  return (
    <div style={props.style} className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
