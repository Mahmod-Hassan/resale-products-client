import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ResaleProducts = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className=' grid md:grid-cols-3 gap-10'>
            {
                products.map(product => <div className='shadow-xl p-5 rounded'>
                    <img className='w-full h-48' src={product.img} alt="" />
                    <h2 className="text-2xl mt-5 text-pink-600 font-bold">{product.product_name}</h2>
                    <p className='text-purple-400 italic'>seller : {product.seller_name}</p>
                    <p className='text-xl text-purple-700 font-bold'>Resale Price : {product.resale_price}$</p>
                    <p className='text-xl text-purple-700 font-bold'>Original Price : {product.original_price}$</p>
                    <button className='btn btn-primary'>Book Now</button>
                </div>)
            }
        </div>
    );
};

export default ResaleProducts;