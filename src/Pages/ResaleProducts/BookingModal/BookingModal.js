
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ product, setResaleProduct }) => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { productName, resalePrice, photoUrl, _id } = product;


    const handleBookingModal = data => {
        if (!(/(\+88)?-?01[0-9]\d{8}/g).test(data.number)) {
            toast.error('please input valid number')
            return;
        }

        setResaleProduct(null);
        // it will post an order to the order collection
        fetch('https://mobile-bazar-server-jet.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

            
        // it will update the existing product
        //after complete the booking I want to add a booked property to which product user booking
        fetch(`https://mobile-bazar-server-jet.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`${user?.displayName} you booked successfylly`)
            })
            .catch(err => console.log(err.message))
    }

    
    return (
        <div>
            <input type="checkbox" id="resale-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-2xl">
                    <label onClick={() => setResaleProduct(null)} htmlFor="resale-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form onSubmit={handleSubmit(handleBookingModal)}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5'>
                            <div className="form-control">
                                <label className='text-sm'>Your Name</label>
                                <input type="text"  {...register("buyerName")} defaultValue={user?.displayName} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Email</label>
                                <input type="text"  {...register("email")} defaultValue={user?.email} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Product Name</label>
                                <input type="text" {...register("productName")} defaultValue={productName} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Price</label>
                                <input type="text"  {...register("price")} defaultValue={resalePrice} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>photo url</label>
                                <input type="text"  {...register("photoUrl")} defaultValue={photoUrl} readOnly className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Your Location</label>
                                <input type="text"  {...register("location")} placeholder="location" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className='text-sm'>Mobile Number</label>
                                <input type="number"  {...register("number")} placeholder="017*******" required className="input input-bordered" />
                            </div>
                        </div>

                        <button type='submit' className='btn'>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;