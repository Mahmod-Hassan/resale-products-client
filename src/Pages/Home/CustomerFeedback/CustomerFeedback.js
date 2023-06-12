import React from "react";

const CustomerFeedback = () => {
 
  return (
    <section className="bg-white">
      {/* this is heading of the section */}
      <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl">
        What our <span className="text-blue-500 ">clients</span> say
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500">
         We bought positive reply from our clients that's prove we are faithful.
      </p>
      <section className="text-gray-500 grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">

        {/* client no 1 feedback */}
        <div className="p-8 border rounded-lg hover:bg-blue-500 hover:text-gray-100 transition:colors duration-700">
          <p className="leading-loose">
          I bought 1 iphone the set is fresh though it is second hand product. You can buy here without no doubt
          </p>
          <div className="flex items-center mt-8">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-bold">Robert</h1>
              <span className="text-sm">CTO, Robert Consultency</span>
            </div>
          </div>
        </div>

        {/* client no 2 feedback */}
        <div className="p-8 border rounded-lg hover:bg-blue-500 hover:text-gray-100 transition:colors duration-700">
          <p className="leading-loose">
          You can trust them because I get my product after 1 day of order.
          </p>
          <div className="flex items-center mt-8">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-bold">Jeny Doe</h1>
              <span className="text-sm">CEO, Jeny Consultency</span>
            </div>
          </div>
        </div>

        {/* client no 3 feedback */}
        <div className="p-8 border rounded-lg hover:bg-blue-500 hover:text-gray-100 transition:colors duration-700">
          <p className="leading-loose">
          I bought 2 redmi phone. There is no problem with delivery.
          </p>
          <div className="flex items-center mt-8">
            <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="mx-2">
              <h1 className="font-bold">Ema Watson </h1>
              <span className="text-sm">Marketing Manager at Stech</span>
            </div>
          </div>
        </div>
        
      </section>
  </section>
  );
};

export default CustomerFeedback;
