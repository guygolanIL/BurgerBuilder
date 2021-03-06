import React from "react";

import "./BuildControls.css";

//Components
import { BuildControl } from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export const BuildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(control => {
      return (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => {
            props.ingredientAdded(control.type);
          }}
          removed={() => {
            props.ingredientRemoved(control.type);
          }}
          disabled={props.disabled[control.type]}
        />
      );
    })}
    <button onClick={props.ordered} disabled={!props.purchasable} className="OrderButton">
      ORDER NOW
    </button>
  </div>
);
