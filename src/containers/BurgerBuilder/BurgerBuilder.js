import React from "react";
import { Burger } from "../../components/Burger/Burger";
import { BuildControls } from "../../components/Burger/BuildControls/BuildControls";
import { DoNothing } from "../../hoc/DoNothing/DoNothing";
import { Modal } from "../../components/UI/Modal/Modal";
import { OrderSummary } from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import AxiosInstance from "../../axios-orders";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1.7
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };

    componentDidMount() {
        AxiosInstance.get("/ingredients.json")
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch(err => {
                this.setState({error: true});
            });
    }

    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0 });
    };

    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    };

    purchaseContinueHandler = () => {
        // alert("You continued!");
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice.toFixed(2), // should be calculated on the server in a real app
        //     customer: {
        //         name: "Guy Golan",
        //         address: "Test Address",
        //         country: "IL"
        //     },
        //     email: "test@test.com",
        //     deliveryMethod: "fastest"
        // };
        // // .json is mandatory for firebase db
        // AxiosInstance.post("/orders.json", order)
        //     .then(res => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(err => this.setState({ loading: false, purchasing: false }));
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    };

    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if (this.state.ingredients) {
            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    onContinue={this.purchaseContinueHandler}
                    onCancel={this.purchaseCancelHandler}
                    ingredients={this.state.ingredients}
                />
            );

            burger = (
                <DoNothing>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        price={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </DoNothing>
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>;
        }

        return (
            <DoNothing>
                <Modal
                    modalClose={this.purchaseCancelHandler}
                    show={this.state.purchasing}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </DoNothing>
        );
    }
}

export default withErrorHandler(BurgerBuilder, AxiosInstance);
