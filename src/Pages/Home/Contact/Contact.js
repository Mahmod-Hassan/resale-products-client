
import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {

    return (
      
        <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="lg:w-1/2 lg:mx-6">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                Contact us for <br /> more info
              </h1>
              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-center -mx-2">
                   <FaLocationArrow></FaLocationArrow>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                   Brahmanbaria, Sadar
                  </span>
                </p>
                <p className="flex items-center -mx-2">
                  <FaPhone></FaPhone>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">(+880) 1314890047</span>
                </p>
                <p className="flex items-center -mx-2">
                  <FaEnvelope></FaEnvelope>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">mahmodhasan7788@gmail</span>
                </p>
              </div>
              <div className="mt-6 w-80 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
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
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium text-gray-700">What do you want to ask</h1>
                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                    <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
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
          </div>
        </div>
      </section>
    );
};

export default Contact;