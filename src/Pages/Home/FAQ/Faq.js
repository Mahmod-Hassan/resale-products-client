import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: 'Can I sell my Laptop ?',
      answer: 'No. You can not sell Laptop, pc or any furniture. This is only second hand mobile selling website but you can buy or sell old hadphone or charger'
    },
    {
      question: 'How can I trust you?',
      answer: 'You can see our customer review section. A lots of people give their valueble feedback. They get their products on-time and they are happy.'
    },
    {
      question: 'What is your profit?',
      answer: 'Ovbiously we have profit. when seller post for sell his/her product we take a percentige from them.'
    },
  ]
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <section className="md:my-20">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">Frequently Asked Qestions</h1>
          <hr className="my-6 border-gray-200" />
          {
          faqData.map((item, index) => (
        <div key={index}>
          <div
          className="flex items-center hover:cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <button className="text-3xl text-blue-400">{activeIndex === index ? '-' : '+'}</button>
            <p className="text-xl mx-4 text-gray-700">{item.question}</p>
          </div>
          <div className={`flex ${activeIndex === index ? 'block' : 'hidden'}`}>
           <span className="border border-blue-400 mx-2"></span>
            <p className="max-w-3xl text-gray-500 px-4">{item.answer}</p>
          </div>
          <hr className="my-4 border-gray-200 dark:border-gray-700" />
        </div>
      
      ))
      }  
      </section>
    )
}

export default Faq;

{/* <section className="bg-white dark:bg-gray-900">
<div className="container px-6 py-10 mx-auto">
  <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>
  <hr className="my-6 border-gray-200 dark:border-gray-700" />
  <div>
    <div>
      <button className="flex items-center focus:outline-none">
        
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</h1>
      </button>
      <div className="flex mt-8 md:mx-10">
        <span className="border border-blue-500" />
        <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
        </p>
      </div>
    </div>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    <div>
      <button className="flex items-center focus:outline-none">
      
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What can I expect at my first consultation ?</h1>
      </button>
    </div>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    <div>
      <button className="flex items-center focus:outline-none">
       
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What are your opening hours ?</h1>
      </button>
    </div>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    <div>
      <button className="flex items-center focus:outline-none">
      
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Do I need a referral ?</h1>
      </button>
    </div>
    <hr className="my-8 border-gray-200 dark:border-gray-700" />
    <div>
      <button className="flex items-center focus:outline-none">
      
        <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appointment covered by private health insurance ?</h1>
      </button>
    </div>
  </div>
</div>
</section> */}
