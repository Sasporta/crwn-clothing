import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IMdmbJxug3nSwK5L4IJ9hsCcMJfoGwOeBARlPa25IIRWlkYjDZ6ULlL8m01qILdPOx7TX9a37E1eiV0oV8LSRf700D9L0qVjW';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment succesful');
        }).catch(error => {
            console.log('Payment error: ' + error);
            alert('There was an issue with your payment. Please make sure you use the provided credit card');
        });
    };

    return (
        <StripeCheckout
        lable='Pay Now'
        name='Crwn Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};


export default StripeCheckoutButton;