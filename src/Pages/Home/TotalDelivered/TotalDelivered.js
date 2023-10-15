import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const TotalDelivered = () => {
  
 
    const records = [
        {
            productImage: 'https://i.ibb.co/52QXxkK/iphone.png',
            productName: 'iphone 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/fXF5XsW/samsung1.png',
            productName: 'Samsung A11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/brGnKcw/samsung2.png',
            productName: 'Samsung J7',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/Tky7KzW/readmi4.png',
            productName: 'Readmi 9',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/s6q7L2D/readmi3.png',
            productName: 'Readmi 9 pro',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/s30t0dR/readmi2.png',
            productName: 'Readmi 10',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
        {
            productImage: 'https://i.ibb.co/4gW1Qdw/readmi1.png',
            productName: 'Readmi 11',
            buyerName: 'Miraz',
            sellerName: 'Mahmod',
            deliveryDate: '01-11-2022'
        },
  
    ]


    return (
        <div className="my-10">
            <h1 className="text-3xl font-semibold text-center my-5">Total <span className="text-blue-400">Delivered</span> Phone</h1>
        <Swiper 
          autoplay={{
            delay: 1000,
          }}
    
          pagination={{
            clickable: true,
          }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          0 : {
            slidesPerView : 1,
            spaceBetween : 30,
          },
          400 : {
            slidesPerView : 2,
            spaceBetween : 30,
          },
          768: {
            slidesPerView : 3,
            spaceBetween : 30,
          },
          1024: {
            slidesPerView : 4,
            spaceBetween : 30,
          },
        }}
      >
          {
            records.map((product,idx) => <SwiperSlide className="h-full p-5 mb-10 border hover:border-0 hover:bg-blue-600 hover:transition-colors hover:duration-500 hover:text-white border-gray-500 rounded" key={idx}>
                <img className="h-40 mx-auto" src={product.productImage} alt="" />
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
export default TotalDelivered;

