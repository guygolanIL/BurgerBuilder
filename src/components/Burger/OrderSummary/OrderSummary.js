import React from "react";
import { DoNothing } from "../../../hoc/DoNothing";
export const OrderSummary = props => {
  let ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>${key}</span>: ${props.ingredients[key]}
      </li>
    );
  });

  return (
    <DoNothing>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>Continue to Checkout?</p>
    </DoNothing>
  );
};
