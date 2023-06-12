import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Features</span></h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Authentic Product</h1>
              <p className="text-gray-500 dark:text-gray-300">
                When a seller post for sell his product we verify that is this product his own or not. Because 
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
               <FaArrowRight></FaArrowRight>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Check Configuration</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We discuss with seller that his/her set configuration. Because depend on product configuration we decide the price.
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Resaunable Price</h1>
              <p className="text-gray-500 dark:text-gray-300">
                The buyer and seller both are our client we want that both are win from their side. Thats why we try to fixed a real price.
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
          </div>
        </div>
      </section>
)
}
export default Features;