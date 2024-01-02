import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Categories = () => {
   const categories = [
    {
        title: 'iphone',
        image: 'https://i.ibb.co/LkRJBH0/iphone13pro2.jpg'
    },
    {
        title: 'Samsung',
        image: 'https://i.ibb.co/KqCZ0y4/galaxys21-1.jpg'
    },
    {
        title: 'Readmi',
        image: 'https://i.ibb.co/cJPdknn/readmi1.png'
    },

   ]
    return (
        <div className='text-center p-5 mt-10'>
            <div className='mb-4 space-y-3'>
                <h1 className="text-3xl font-semibold text-center text-gray-900">Our Category</h1>
                <p className='text-center text-gray-500'>Click any category and see a lots of product under the category</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

                  {
                    categories.map(({title,image}, index) => (
                        <div key={index} className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] p-5 rounded-md'>
                        <img className='w-20 h-20 mx-auto' src={image} alt="" />
                         <Link
                         to={`/category/${title}`}
                     >
                         <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>{title}<HiOutlineArrowRight></HiOutlineArrowRight></button>
                         </Link>
                     </div>
                    ))
                  }

            </div>
            </div>

   
    )
            };

export default Categories;