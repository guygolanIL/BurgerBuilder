import React from "react";
import "./Modal.css";
import { DoNothing } from "../../../hoc/DoNothing";
import { Backdrop } from "../Backdrop/Backdrop";

export const Modal = props => {
  return (
    <DoNothing>
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
        className={"Modal"}
      >
        {props.children}
      </div>
      <Backdrop clicked={props.modalClose} show={props.show}/>
    </DoNothing>
  );
};
