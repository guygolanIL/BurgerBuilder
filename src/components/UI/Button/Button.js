import React from "react";
import "./Button.css";

export const Button = props => (
  <button
    className={["Button", props.btnType].join(" ")}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
