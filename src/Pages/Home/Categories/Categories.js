import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })
    const category = categories.map(category => category.category);

    return (
        <div className='text-center'>
            <h2 className="text-4xl text-primary font-bold text-center my-10">All Categories</h2>
            <div className='md:flex md:justify-evenly'>
                {
                    category?.length ?
                        [...new Set(category)].map((categoryName, idx) => <Link
                            key={idx}
                            to={`/category/${categoryName}`}
                        ><button className='btn btn-wide mb-4'>{categoryName}</button></Link>
                        )
                        :
                        <p className='text-xl font-normal text-white bg-blue-800 p-5'>there is no category found</p>
                }
            </div>

        </div>
    );
};

export default Categories;