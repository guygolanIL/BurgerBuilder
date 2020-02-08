import React from 'react';
import {Route} from 'react-router-dom'; 
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary.js';
import ContactData from './ContactData/ContactData';
class Checkout extends React.Component {

    state = {
        ingredients: {}
    }

    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let [key, value] of query.entries()){
            ingredients[key] = +value;
        }
        this.setState({ ingredients: ingredients });
    }

    checkoutCancelledHandler = () => {
        console.log('checkout cancelled');
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        console.log('continuing to checkout');
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;