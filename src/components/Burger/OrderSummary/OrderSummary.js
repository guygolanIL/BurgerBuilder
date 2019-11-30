import React from "react";
import { DoNothing } from "../../../hoc/DoNothing/DoNothing";
import { Button } from "../../UI/Button/Button";

export class OrderSummary extends React.Component {

    // This could be a functional comp, doesnt have to be a class 
    componentWillUpdate() {
      console.log("Order summary will update")
    }

    render() {
        let ingredientsSummary = Object.keys(this.props.ingredients).map(
            key => {
                return (
                    <li key={key}>
                        <span style={{ textTransform: "capitalize" }}>
                            {key}
                        </span>
                        : {this.props.ingredients[key]}
                    </li>
                );
            }
        );

        return (
            <DoNothing>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientsSummary}</ul>
                <p>
                    <strong>Total Price: {this.props.price.toFixed(2)}</strong>
                </p>
                <p>Continue to Checkout?</p>
                <Button onClick={this.props.onCancel} btnType="Danger">
                    CANCEL
                </Button>
                <Button onClick={this.props.onContinue} btnType="Success">
                    CONTINUE
                </Button>
            </DoNothing>
        );
    }
}
