import React from 'react';
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from './Slider';
const slideItems = [
    {
        img: 'https://i.ibb.co/KqCZ0y4/galaxys21-1.jpg',
        brand_name: "Samsung is the best \n in the world",
        id: 1,
    },
    {
        img: 'https://i.ibb.co/LkRJBH0/iphone13pro2.jpg',
        brand_name: "i-phone is the best \n in the world",
        id: 2,
    },
    {
        img: 'https://i.ibb.co/cJPdknn/readmi1.png',
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