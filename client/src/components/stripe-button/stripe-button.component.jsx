import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_TZ5KXElfT1clvnGlJIQRwHdn00YdVdkcQK";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        token,
        amount: priceForStripe
      }
    })
      .then(response => {
        alert("Payment Successful");
      })
      .catch(error => {
        console.log('Payment error:', error);
        alert(
          "There was an issue with your payment, please make sure you use the provided credentials"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="React Ecommerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
