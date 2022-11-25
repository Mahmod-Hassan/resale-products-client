import { fromJSON } from 'postcss';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { product_name, resale_price } = product;

    const handleBookingProduct = event => {
        event.preventDefault();
        const form = event.target;
        form.reset();
        toast.success(`${user?.displayName} you booked successfylly`)
    }

    return (
        <div>
            <input type="checkbox" id="resale-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-2xl">
                    <label htmlFor="resale-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleBookingProduct}>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5'>

                            <div className="form-control">
                                <label className='text-sm'>Your Name</label>
                                <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Email</label>
                                <input type="text" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Product Name</label>
                                <input type="text" defaultValue={product_name} readOnly className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Price</label>
                                <input type="text" defaultValue={resale_price} readOnly className="input input-bordered w-full max-w-xs" />
                            </div>

                            <div className="form-control">
                                <label className='text-sm'>Your Location</label>
                                <input type="text" placeholder="location" required className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className='text-sm'>Mobile Number</label>
                                <input type="number" placeholder="017*******" required className="input input-bordered w-full max-w-xs" />
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