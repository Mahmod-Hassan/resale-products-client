import React from "react";

const AboutUs = () => {
    return (
        <section className="my-8 space-y-4">

             <h1 className="text-3xl text-gray-800 font-semibold text-center">About Us</h1>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="w-full max-w-xs bg-white rounded shadow-lg">

                    <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

                    <div className="text-center p-5">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Philops</h3>
                        <p className="text-md font-semibold text-blue-500 dark:text-gray-200">
                            Founder
                        </p>
                        <p className="text-gray-700">I am the owner of this company. I start this buisness since 2022</p>
                    </div>

                </div>

                <div className="w-full max-w-xs bg-white rounded shadow-lg">

                    <img className="object-cover w-full h-56" src="https://i.ibb.co/4p0zjF2/man1.jpg" alt="managing director" />

                    <div className="text-center p-5">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Wizard</h3>
                        <p className="text-md font-semibold text-blue-500 dark:text-gray-200">
                           Managing Director
                        </p>
                        <p className="text-gray-700">I am the managing director of this company. I start this buisness since 2022</p>
                    </div>
                
                </div>
                

                <div className="w-full max-w-xs bg-white rounded shadow-lg">

                    <img className="object-cover w-full h-56" src="https://i.ibb.co/k0rg3dq/man3.jpg" alt="delivery boy" />

                    <div className="text-center p-5">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Archar</h3>
                        <p className="text-md font-semibold text-blue-500 dark:text-gray-200">
                            Deliver Worker
                        </p>
                        <p className="text-gray-700">I am the delivery boy of this company. I start this buisness since 2022</p>
                    </div>
                
                </div>
            </div>
        </section>
       
    )
}
export default AboutUs;