import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode'

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(data => setReviews(data?.data))
            .catch(error => console.log(error))
    }, [])
    const handleUserReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        if (ratings > 5) {
            return toast.error('ratings must be lessthan 5')
        }
        const review = {
            photoUrl, name, description, ratings
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                }
            })
    }


    return (
        <>
            <h1 className="text-4xl font-bold text-error text-center mt-16 mb-4">Customer Reviews</h1>
            <div className='grid lg:grid-cols-4'>
                <div className='col-span-3'>
                    <Swiper
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}
                        slidesPerView={5}
                        spaceBetween={30}
                        className="mySwiper w-full border"
                    >

                        <div className='border flex'>

                            {
                                reviews.map((review, idx) => <SwiperSlide key={idx} className='shadow-lg p-4 h-96'>
                                    <img src={review.photoUrl} alt="" className='w-28 h-28' />
                                    <p className='text-accent'>{review.name}</p>
                                    <p>{review.description.slice(0, 50)}...</p>
                                </SwiperSlide>)
                            }


                        </div>

                    </Swiper>
                </div>

                <div>
                    <h2 className="text-2xl text-purple-800 font-bold text-center">Review</h2>
                    <form onSubmit={handleUserReview} className='grid grid-cols-1 shadow-lg p-3 gap-y-5'>
                        <input name="name" type="text" className='input input-bordered' placeholder='Your Name' required />
                        <input name="photoUrl" type="text" className='input input-bordered' placeholder='Your Photo' required />
                        <input name="ratings" type="number" className='input input-bordered' placeholder='ratings' required />
                        <textarea name="description" className="textarea textarea-bordered" placeholder="write something about us..." required></textarea>
                        <button className='btn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default CustomerReview;