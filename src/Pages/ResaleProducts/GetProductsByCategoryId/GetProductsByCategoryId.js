
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ResaleProducts from '../ResaleProducts/ResaleProducts';

const GetProductsByCategoryId = () => {
    const products = useLoaderData();
    const [resaleProduct, setResaleProduct] = useState(null);
    return (
        <div>

            <div className=' grid md:grid-cols-3 gap-10'>
                {
                    products.map(product => <ResaleProducts
                        key={product._id}
                        product={product}
                        setResaleProduct={setResaleProduct}
                    ></ResaleProducts>)
                }
            </div>
            {
                resaleProduct && <>
                    <BookingModal
                        product={resaleProduct}
                        setResaleProduct={setResaleProduct}
                    ></BookingModal>
                </>
            }
        </div>
    );
};

export default GetProductsByCategoryId;