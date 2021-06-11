import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeHook from '../StripeHook/StripeHook';

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const Stripe = ({ order }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeHook order={order}></StripeHook>
    </Elements>
  );
};

export default Stripe;