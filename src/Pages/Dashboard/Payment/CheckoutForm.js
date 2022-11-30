import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({ order }) => {

    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, buyerName, _id } = order;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data?.clientSecret));
    }, [price]);



    const handleSubmit = async event => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error?.message);
        } else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent?.status === 'succeeded') {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                orderId: _id
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        setSuccess('Congratulations your payment successful');
        setTransactionId(paymentIntent?.id);
        setProcessing(false);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='mt-5 btn btn-primary btn-xs' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay Now
                </button>
            </form>
            <p className="text-xl text-red-500">{cardError}</p>

            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className='text-red-500'>Your transaction Id is {transactionId}</p>
                </div>
            }

        </>
    );
};

export default CheckoutForm;