import React from "react";
import { DoNothing } from "../../../hoc/DoNothing";
import {Button} from "../../UI/Button/Button";
export const OrderSummary = props => {
  let ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>: {props.ingredients[key]}
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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button onClick={props.onCancel} btnType="Danger">CANCEL</Button>
      <Button onClick={props.onContinue} btnType="Success">CONTINUE</Button>
    </DoNothing>
  );
};
