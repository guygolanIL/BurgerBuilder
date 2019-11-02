import React from 'react';
import { Burger } from '../../components/Burger/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import { DoNothing } from '../../hoc/DoNothing';

export class BurgerBuilder extends React.Component{
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    };

    render(){
        return (
            <DoNothing>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </DoNothing>
        );
    }
}