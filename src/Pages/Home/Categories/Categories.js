import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Categories = () => {
   
    return (
        <div className='text-center p-5 mt-10'>
            <div className='mb-4 space-y-3'>
                <h1 className="text-3xl font-semibold text-center text-gray-900">Our Category</h1>
                <p className='text-center text-gray-500'>Click any category and see a lots of product under the category</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                
                    {/*how to remove duplicate property from array of objects
                    you can try category-items.json. 
                    categories?.length &&
                    [...new Set(categories.map(category => category.category))].map((categoryName, index) => {} */}
                  
          
                      <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] p-5 rounded-md'>
                           <img className='w-20 h-20 mx-auto' src="https://i.pinimg.com/originals/a2/27/df/a227df4822db04573a0755bac50c7b32.png" alt="" />
                            <Link
                            to={`/category/iphone`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>iphone <HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
                      <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] p-5 rounded-md'>
                           <img className='w-20 h-20 mx-auto' src="https://png.pngitem.com/pimgs/s/127-1273741_transparent-samsung-png-samsung-galaxy-s6-edge-plus.png" alt="" />
                            <Link
                            to={`/category/Samsung`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>Samsung <HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
                      <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] p-5 rounded-md'>
                           <img className='w-20 h-20 mx-auto' src="https://www.pngitem.com/pimgs/m/367-3675422_redmi-note-7-pro-xiaomi-redmi-note-7.png" alt="" />
                            <Link
                            to={`/category/Readmi`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>Readmi<HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
            </div>
            </div>

   
    )
            };

export default Categories;