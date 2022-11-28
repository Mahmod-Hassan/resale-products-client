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
        <div>
            <h2 className="text-4xl text-primary font-bold text-center my-10">All Categories</h2>
            <div className='flex justify-evenly'>
                {
                    category?.length &&
                    [...new Set(category)].map((categoryName, idx) => <Link
                        key={idx}
                        to={`/category/${categoryName}`}
                    ><button className='btn btn-wide'>{categoryName}</button></Link>
                    )
                }
            </div>

        </div>
    );
};

export default Categories;