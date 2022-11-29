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
        <div className="carousel w-full h-4/5 border-4 ">
            {
                slideItems.map(item => <div
                    key={item.id}
                    id={`slide${item.id}`}
                    className="carousel-item relative w-full mx-5">

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 place-items-center p-5'>
                        <div>
                            <h2 className="text-4xl text-purple-500 font-bold mb-5">{item.brand_name}</h2>
                            <p>{item.phone_info}</p>
                        </div>

                        <div>
                            <img src={item.img} alt="" className='h-48 lg:h-96' />
                        </div>
                    </div>

                    <div className="absolute flex gap-5 w-full mx-auto bottom-0 justify-center">
                        <a href={`#slide${item.prev}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${item.next}`} className="btn btn-circle">❯</a>
                    </div>

                </div>)
            }

        </div>

    );
};

export default Banner;