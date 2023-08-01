import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51M9jFfIzpViBLKyq70XBNvNq8zgQ4oxUT1j0gbbeeCDTF1dx4hk3JcActWc8EodcE1yAzKChM0wardhlI5yNrBhv00u8x8w1FA');


const Payment = () => {

    // useLoaderData is a react-router-dom method
    // go to the Routes component (path: '/dashboard/payment/:id') to see how it works
    const order = useLoaderData();
    
    return (
        <div>
            <h3 className="text-3xl text-center mt-5 font-bold">payment for <span className='text-error'>{order?.productName}</span> price <span className='text-error'>{order?.price}$</span></h3>
            <div className='border w-1/2 mx-auto mt-5'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;