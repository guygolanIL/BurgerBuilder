import React from 'react';
import Order from '../../components/Order/Order';
import AxiosInstance from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        AxiosInstance.get('/orders.json')
        .then(res => {
            const orders = Object.entries(res.data).reduce((accum, [key, value]) => [...accum, {...value, id: key}], []);
            console.log(orders);
            this.setState({orders: orders});
        })
        .catch(err => console.log(err))
        .finally(() => this.setState({loading: false}));
    }

    render(){
        return (
            <div>
                {this.state.orders.map(order => <Order key={order.id} price={order.price} ingredients={order.ingredients}/>)}
            </div>
        );
    }
}

export default withErrorHandler(Orders, AxiosInstance);