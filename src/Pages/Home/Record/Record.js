import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper";

const Record = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div className="swiper-slide">Slide ' + --prependNumber + "</div>"
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>"
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
        '<div className="swiper-slide">Slide ' + ++appendNumber + "</div>",
      ]);
    };
    const records = [
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
    ]
    return (
        <div className="my-16">
            <h1 className="text-3xl font-semibold text-center my-5">Total <span className="text-blue-400">Selling</span> Record</h1>
        <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
          {
            records.map((product,idx) => <SwiperSlide className="h-full p-5 border border-gray-500 rounded" key={idx}>
                <img className="h-1/3 w-1/3 mx-auto" src={product.productImage} alt="" />
                <div className="w-60">
                <p >Product &nbsp;&nbsp;: {product.productName}</p>
                <p >Buyer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {product?.buyerName}</p>
                <p >Seller &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {product?.sellerName}</p>
                <p >Delivered : {product?.deliveryDate}</p>
                </div>
            </SwiperSlide>)
          }
        </Swiper>
      </div>
    )
}
export default Record;
