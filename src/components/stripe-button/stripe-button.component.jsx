import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51IMdmbJxug3nSwK5L4IJ9hsCcMJfoGwOeBARlPa25IIRWlkYjDZ6ULlL8m01qILdPOx7TX9a37E1eiV0oV8LSRf700D9L0qVjW';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }

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