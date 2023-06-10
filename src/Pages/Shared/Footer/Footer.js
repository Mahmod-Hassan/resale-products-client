import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-10'>
        <footer>
          <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center text-center">
              <Link to='/' className='text-2xl font-semibold text-blue-500'>Mobile Bazar</Link>
              <div className="flex flex-wrap justify-center mt-6 -mx-4">
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>
                <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
              </div>
            </div>
            <hr className="my-6 border-gray-600 md:my-10 dark:border-gray-700" />
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>
              <div className="flex gap-5">
                <a href="#" className="text-2xl transition-colors duration-300 hover:text-blue-500 ">
                 <FaFacebook></FaFacebook>
                </a>
                <a href="#" className="text-2xl transition-colors duration-300 hover:text-blue-500 ">
                    <FaLinkedin></FaLinkedin>
                </a>
                <a href="#" className="text-2xl transition-colors duration-300 hover:text-blue-500">
                 <FaTwitter></FaTwitter>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        </div>
      </div>
    );
};

export default Footer;