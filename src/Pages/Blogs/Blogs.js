import React from 'react';

const Blogs = () => {
    const blogs = [
        {
          title: 'The Top 10 Smartphones of 2023',
          author: 'John Smith',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum urna non egestas commodo. Integer sollicitudin, urna sed consequat pellentesque, nunc lorem rutrum tellus, nec interdum neque enim at elit.',
          img: 'https://i.ibb.co/q546f2x/10phone.jpg'
        },
        {
          title: 'Comparing iPhone 13 and Samsung Galaxy S21',
          author: 'Jane Doe',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum urna non egestas commodo. Integer sollicitudin, urna sed consequat pellentesque, nunc lorem rutrum tellus, nec interdum neque enim at elit.',
          img: 'https://i.ibb.co/61fGcdN/iphone-samsung.jpg'
        },
        {
          title: 'The Future of Foldable Phones',
          author: 'David Johnson',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum urna non egestas commodo. Integer sollicitudin, urna sed consequat pellentesque, nunc lorem rutrum tellus, nec interdum neque enim at elit.',
          img: 'https://i.ibb.co/CHT6h7Y/foldable-Phone.jpg'
        },
        {
          title: 'Tips for Extending Your Phone Battery Life',
          author: 'Sarah Thompson',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum urna non egestas commodo. Integer sollicitudin, urna sed consequat pellentesque, nunc lorem rutrum tellus, nec interdum neque enim at elit.',
          img: 'https://i.ibb.co/DVSYDkv/battery-Life.jpg'
        },
      ];
 
    return (
        <section>
        <div className="py-10 mx-auto">
       
            <h1 className="text-2xl font-semibold text-gray-500 capitalize lg:text-3xl dark:text-white">recent posts </h1>
          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
{
    blogs.map((blog,i) =>   <div key={i} className='shadow-md p-5 rounded border-t'>
    <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={blog.img} alt="" />
    <div className="mt-8">
      <span className="text-blue-500 uppercase">category</span>
      <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
        {blog.title}
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        {blog.content}
      </p>
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
            {blog.author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">February 1, 2022</p>
        </div>
        <a href="#" className="inline-block text-blue-500 underline hover:text-blue-400">Read more</a>
      </div>
    </div>
  </div>)
}
          
          </div>
        </div>
      </section>
    );
};

export default Blogs;