import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => (
    <ul className={"NavigationItems"}>
        <NavigationItem link={"Yoog"} active>Burger Builder</NavigationItem>
        <NavigationItem link={"Yoog"}>Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;