import React from 'react';
import {Button} from '../../../components/UI/Button/Button';
import './ContactData.css';
class ContactData extends React.Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render(){
        return (
            <div className="ContactData">
                <h4>Enter you Contact Data</h4>
                <form>
                    <input className="Input" type='text' name="name" placeholder='Your name'/>
                    <input className="Input" type='text' name="email" placeholder='Your email'/>
                    <input className="Input" type='text' name="street" placeholder='Your street'/>
                    <input className="Input" type='text' name="postal" placeholder='Your postal code'/>

                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }


}

export default ContactData;