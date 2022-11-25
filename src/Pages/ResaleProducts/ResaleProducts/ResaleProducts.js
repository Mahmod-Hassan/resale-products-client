
import React from 'react';

const ResaleProducts = ({ product, setResaleProduct }) => {
    const { img, product_name, resale_price, original_price, using, seller_location, seller_name, } = product;
    return (
        <div className='shadow-xl p-5 rounded'>
            <img className='w-full h-48' src={img} alt="" />
            <h2 className="text-2xl mt-5 text-pink-600 font-bold">{product_name}</h2>
            <p className='text-purple-400 italic'>seller name : {seller_name}</p>
            <p className='text-purple-400 italic'>location : {seller_location}</p>
            <p className='text-purple-400 italic'>used : {using}</p>
            <p className='text-xl text-purple-700 font-bold'>Resale Price : {resale_price}$</p>
            <p className='text-xl text-purple-700 font-bold '>Original Price : <span className='line-through'>{original_price}</span>$</p>
            <label
                onClick={() => setResaleProduct(product)}
                htmlFor="resale-product-modal" className='btn btn-primary'>Book Now</label>
        </div>
    );
};

export default ResaleProducts;