import React from "react";
import { Button } from "../../../components/UI/Button/Button";
import "./ContactData.css";
import AxiosInstance from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
class ContactData extends React.Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    };

    orderHandler = e => {
        e.preventDefault();
        console.log(this.props);
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // should be calculated on the server in a real app
            customer: {
                name: "Guy Golan",
                address: "Test Address",
                country: "IL"
            },
            email: "test@test.com",
            deliveryMethod: "fastest"
        };
        // .json is mandatory for firebase db
        AxiosInstance
            .post("/orders.json", order)
            .finally(() => { 
                this.setState(state => ({ ...state, loading: false }));
                this.props.history.push('/');
            });
    };

    render() {
        let form = (
            <form>
                <input
                    className="Input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                />
                <input
                    className="Input"
                    type="text"
                    name="email"
                    placeholder="Your email"
                />
                <input
                    className="Input"
                    type="text"
                    name="street"
                    placeholder="Your street"
                />
                <input
                    className="Input"
                    type="text"
                    name="postal"
                    placeholder="Your postal code"
                />

                <Button onClick={this.orderHandler} btnType="Success">
                    ORDER
                </Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
                <h4>Enter you Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
