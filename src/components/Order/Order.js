import React from 'react';
import "./Order.css";

const Order = (props) => {
    const {salad, meat, bacon, cheese} = props.ingredients;
    return(
        <div className="Order">
            <p>Ingredients: Salad ({salad}) Meat ({meat}) Bacon ({bacon}) Cheese ({cheese})</p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
};

export default Order;