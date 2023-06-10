import React from 'react';

const slideItems = [
    {
        img: 'https://png.pngitem.com/pimgs/s/127-1273741_transparent-samsung-png-samsung-galaxy-s6-edge-plus.png',
        brand_name: 'Sumsung',
        phone_info: 'In our mind, Samsung is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
        prev: 3,
        id: 1,
        next: 2,
    },
    {
        img: 'https://i.pinimg.com/originals/a2/27/df/a227df4822db04573a0755bac50c7b32.png',
        brand_name: 'iphone',
        phone_info: 'In our mind, iphone is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
        prev: 1,
        id: 2,
        next: 3
    },
    {
        img: 'https://www.pngitem.com/pimgs/m/367-3675422_redmi-note-7-pro-xiaomi-redmi-note-7.png',
        brand_name: 'Readmi',
        phone_info: 'In our mind, Readmi is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
        prev: 2,
        id: 3,
        next: 1,
    },
]
const Banner = () => {

    return (
    
        // <div className='bg-violet-100 h-[300px] w-full grid place-items-center mb-12 mt-4'>
        //     <div className='text-center space-y-4'>
        //         <h1 className='text-3xl md:text-5xl font-bold'>Welcome To Mobile Bazar</h1>
        //         <h3 className='text-sm md:text-base w-1/2 mx-auto text-gray-500 font-medium'>This is an online old mobile phone selling website. In this website you can sell your old phone and you can buy second hand phone also.</h3>
        //         <input className='w-1/2 rounded-full py-1 px-5 outline-none' type='text' placeholder="search your phone"></input>
        //     </div>
        // </div>
    <div className="py-16 mx-auto bg-blue-50/25 -mx-20">
        <div className="items-center lg:flex px-20">
            <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Best Place To Buy <br /><span className="text-primary">Old Mobile Phone</span></h1>
                <p className="mt-3 text-gray-600">This is an online old mobile phone selling website. In this website you can sell your old phone and you can buy second hand phone also.</p>
                <button className='btn btn-sm mt-4 btn-primary'>Order Now</button>
            </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/XJrzYD2/cropimage.png" alt="Catalogue-pana.svg" />
            </div>
        </div>
     </div>

    );
};

export default Banner;