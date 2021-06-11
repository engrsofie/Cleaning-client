import React from 'react';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const StripeHook = ({ order }) => {

  const stripe = useStripe();
  const elements = useElements();

const handlePayment = () => {
 const orders = {...order}
fetch("https://cleanerservice12.herokuapp.com/bookOrder", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(orders),
});
}

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      handlePayment();
      alert("Payment successfully completed")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="mt-3 btn btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default StripeHook;