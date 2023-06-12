
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {

    return (
          <div className="md:flex my-10">

               {/* left side div */}
            <div className="flex flex-col items-center justify-center md:w-1/2">
              <h1 className="text-2xl md:-ml-28 font-semibold text-gray-800 capitalize  md:text-3xl">
                Contact With Us
              </h1>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex gap-5 items-center">
                   <FaLocationArrow></FaLocationArrow>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400"> Our Location : 
                   Brahmanbaria, Sadar
                  </span>
                </p>
                <p className="flex gap-5 items-center">
                  <FaPhone></FaPhone>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Mobile Number : (+880) 1314890047</span>
                </p>
                <p className="flex gap-5 items-center">
                  <FaEnvelope></FaEnvelope>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">Email : mahmodhasan7788@gmail</span>
                </p>
              </div>
              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us with: </h3>
                <div className="flex mt-4 -mx-1.5 ">
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaFacebook></FaFacebook>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                   <FaTwitter></FaTwitter>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                  <FaInstagram></FaInstagram>
                  </a>
                  <a className="text-2xl mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="#">
                   <FaLinkedin></FaLinkedin>
                  </a>
                </div>
              </div>
            </div>

            {/* right side div */}
            <div className="md:w-1/2 px-8 py-10 mx-auto rounded-lg shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] shadow-gray-300/50">
                <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                    <textarea className="block w-full px-5 py-3 mt-2  border border-gray-200 rounded-md" placeholder="Message" defaultValue={""} />
                  </div>
                  <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    get in touch
                  </button>
                </form>
              </div>
          </div>
    );
};

export default Contact;