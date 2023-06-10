import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://assigntment-12-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <svg className="animate-spin w-16 h-16 feather feather-loader mx-auto" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>
    }
    
    const category = categories.map(category => category.category);
   
    return (
        <div className='text-center p-5 mt-10'>
            <div className='mb-4 space-y-3'>
                <h1 className="text-3xl font-semibold text-center text-gray-900">Our Category</h1>
                <p className='text-center text-gray-500'>Click any category and see a lots of product under the category</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                
                {
                    category?.length &&
                    [...new Set(category)].map((categoryName, idx) => 
                    <div className="shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] p-5 rounded-md">
                        
                      {
                        categoryName === 'iphone' && <div>
                            <img className='w-20 h-20 mx-auto' src="https://i.ibb.co/vxJ02B1/iphone-png.png" alt="" />
                            <Link
                            key={idx}
                            to={`/category/${categoryName}`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>{categoryName} <HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
                      }
                      {
                        categoryName === 'Samsung' && <div>
                           <img className='w-20 h-20 mx-auto' src="https://i.ibb.co/68h6m6n/samsung-png.png" alt="" />
                            <Link
                            key={idx}
                            to={`/category/${categoryName}`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>{categoryName} <HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
                      }
                      {
                        categoryName === 'Readmi' && <div>
                            <img className='w-20 h-20 mx-auto' src="https://i.ibb.co/ZMkDBw6/redmi-png.png" alt="" />
                            <Link
                            key={idx}
                            to={`/category/${categoryName}`}
                        >
                            <button className='btn w-full mb-4 flex gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 '>{categoryName} <HiOutlineArrowRight></HiOutlineArrowRight></button>
                            </Link>
                        </div>
                      }
                        </div>
                    )

                }
            </div>
            </div>

   
    )
            };

export default Categories;