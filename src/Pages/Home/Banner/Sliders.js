import React from 'react';
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from './Slider';
const slideItems = [
    {
        img: 'https://png.pngitem.com/pimgs/s/127-1273741_transparent-samsung-png-samsung-galaxy-s6-edge-plus.png',
        brand_name: "Samsung is the best \n in the world",
        id: 1,
    },
    {
        img: 'https://i.pinimg.com/originals/a2/27/df/a227df4822db04573a0755bac50c7b32.png',
        brand_name: "i-phone is the best \n in the world",
        id: 2,
    },
    {
        img: 'https://www.pngitem.com/pimgs/m/367-3675422_redmi-note-7-pro-xiaomi-redmi-note-7.png',
        brand_name: "Readmi is the best \n in the world",
        id: 3,
    },
]
const Banner = () => {

    return (

        <div className="main-slider">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation
          loop
          autoplay
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
        >
          {slideItems.map((slider) => (
            <SwiperSlide key={slider.id}>
              <Slider slider={slider}></Slider>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    );
};

export default Banner;