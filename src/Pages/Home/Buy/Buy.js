import React from 'react';

const Buy = () => {
    return (
        <div className='my-10'>
           <h1 className='text-3xl text-gray-800 font-bold text-center mb-5'>How to Buy?</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center'>
                <div className='bg-yellow-200 p-5 rounded'>
                    <h3 className='text-xl font-bold mb-5'>Step : 1</h3>
                    <p className='text-md font-semibold'>You need to login first in our site. Then you will redirect our home page. Here you can see 3 category and buttons</p>
                </div>
                <div className='bg-green-200 p-5 rounded'>
                    <h3 className='text-xl font-bold mb-5'>Step : 2</h3>
                    <p className='text-md font-semibold'>Click this category button then you will goes all category page. where you can booked any phone that available.</p>
                </div>
                <div className='bg-lime-200 p-5 rounded'>
                    <h3 className='text-xl font-bold mb-5'>Step : 3</h3>
                    <p className='text-md font-semibold'>After booked you should go to dashboard page. wher you can see a buy button. clicking buy button you can complete payment.</p>
                </div>
            </div>
      </div>
    )
}
export default Buy;