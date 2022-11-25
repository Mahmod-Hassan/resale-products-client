import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className="text-4xl text-primary font-bold text-center my-10">All Categories</h2>
            <div className='flex justify-evenly'>
                {
                    categories.map(category => <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                    ><button className='btn btn-wide'>{category.name}</button></Link>
                    )
                }
            </div>

        </div>
    );
};

export default Categories;