
import React from 'react';

const ResaleProducts = ({ product, setResaleProduct }) => {
    const { image, productName, price, using, location, sellerName } = product;
    return (
        <div className='shadow-xl p-5 rounded'>
            <img className='w-full h-48' src={image} alt="" />
            <h2 className="text-2xl mt-5 text-pink-600 font-bold">{productName}</h2>
            <p className='text-purple-400 italic'>seller name : {sellerName}</p>
            <p className='text-purple-400 italic'>location : {location}</p>
            <p className='text-purple-400 italic'>used : {using}</p>

            <p className='text-xl text-purple-700 font-bold '>Original Price : <span className='line-through'>{price}</span>$</p>
            <label
                onClick={() => setResaleProduct(product)}
                htmlFor="resale-product-modal" className='btn btn-primary'>Book Now</label>
        </div>
    );
};

export default ResaleProducts;