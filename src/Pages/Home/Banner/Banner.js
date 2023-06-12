import React from 'react';

// const slideItems = [
//     {
//         img: 'https://png.pngitem.com/pimgs/s/127-1273741_transparent-samsung-png-samsung-galaxy-s6-edge-plus.png',
//         brand_name: 'Sumsung',
//         phone_info: 'In our mind, Samsung is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
//         prev: 3,
//         id: 1,
//         next: 2,
//     },
//     {
//         img: 'https://i.pinimg.com/originals/a2/27/df/a227df4822db04573a0755bac50c7b32.png',
//         brand_name: 'iphone',
//         phone_info: 'In our mind, iphone is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
//         prev: 1,
//         id: 2,
//         next: 3
//     },
//     {
//         img: 'https://www.pngitem.com/pimgs/m/367-3675422_redmi-note-7-pro-xiaomi-redmi-note-7.png',
//         brand_name: 'Readmi',
//         phone_info: 'In our mind, Readmi is the best phone brand you can choose in 2022. It produces excellent phones across a range of prices and has even managed to improve its lackluster record of software updates.',
//         prev: 2,
//         id: 3,
//         next: 1,
//     },
// ]
const Banner = () => {

    return (

        <div className="py-16 mx-auto">
        <div className="items-center md:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl uppercase">Best Place to sell <br /> <span className="text-blue-500 ">& Buy Old Mobile</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="px-5 py-2 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
            </div>
        </div>
    </div>

    );
};

export default Banner;