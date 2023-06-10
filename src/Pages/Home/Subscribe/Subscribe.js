import React from 'react';

const Subscribe = () => {
    return (
      <div>
          <h1 className='text-3xl font-semibold text-center mb-4'>Subscribe Our <span className='text-blue-400'>Newsletter</span></h1>
          <section className="flex flex-col overflow-hidden bg-white rounded-lg shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] md:flex-row md:h-48">
            
            <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 ">
              <div className="px-6 py-6 md:px-8 md:py-0">
                <h2 className="text-lg font-bold text-gray-700 md:text-gray-100">Sign Up For <span className="text-blue-600  md:text-blue-300">Project</span> Updates</h2>
                <p className="mt-2 text-sm text-gray-600  md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
              </div>
            </div>

            <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">

              <form>
                <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg  lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">

                <input className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />

                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">subscribe</button>
                </div>
              </form>

            </div>

          </section>

      </div>
            
    )
}

export default Subscribe;