import React from "react";
import "./NavigationItem.css";
import {NavLink} from 'react-router-dom';

const NavigationItem = props => (
  <li className={"NavigationItem"}>
    <NavLink exact={props.exact} activeClassName="active" to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
