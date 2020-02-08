import React from "react";

import {Burger} from "../../Burger/Burger";
import {Button} from "../../UI/Button/Button";

import './CheckoutSummary.css';
const CheckoutSummary = props => {
    return (
        <div className='CheckoutSummary'>
            <h1>We Hoper it tastes well!</h1>
            <div style={{ width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Button btnType="Danger" onClick={props.checkoutCancelled}>
                Cancel
            </Button>
            <Button btnType="Success" onClick={props.checkoutContinued}>
                Continue
            </Button>
        </div>
    );
};

export default CheckoutSummary;
