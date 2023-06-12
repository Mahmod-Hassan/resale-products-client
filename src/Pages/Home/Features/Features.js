import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Features</span></h1>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
               <img className="w-20 h-20" src="https://i.ibb.co/kDVKrx2/original-Product.png" alt="" />
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Original Product</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We sell original product. We do not allow any duplicate or any type of illigal product.
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
               <img className="w-20 h-20" src="https://i.ibb.co/z2sfFLk/configuration-Icon.png" alt="" />
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Good Configuration</h1>
              <p className="text-gray-500 dark:text-gray-300">
                We alway try to approve good quality second hand product. If any mobile has majob problem we do not allow.
              </p>
              <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <FaArrowRight></FaArrowRight>
              </a>
            </div>
            <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
              <span className="inline-block p-3 bg-blue-100 rounded-full">
               <img className="w-20 h-20" src="https://i.ibb.co/GvF6wnn/resonable-Price.png" alt="" />
              </span>
              <h1 className="text-xl font-semibold text-gray-700 capitalize">Reasonable Price</h1>
              <p className="text-gray-500 dark:text-gray-300">
                The buyer and seller both are our client we always try to fixed a reasonable price so that both becomes happy.
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