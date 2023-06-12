import React, { useState } from "react";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    {
      question: 'Can I sell my motor bike ?',
      answer: 'No. You can not sell by-cycle, motor bike or any type of car or any furniture. This is only second hand mobile selling website but you can buy or sell old hadphone or charger'
    },
    {
      question: 'How can I trust you?',
      answer: 'You can see our customer review section. A lots of people give their valueble feedback. They get their products on-time and they are happy.'
    },
    {
      question: 'What is your profit?',
      answer: 'Ovbiously we have profit. when seller post for sell his/her product we take a percentige from them.'
    },
    {
      question: 'How to buy a phone?',
      answer: '1. You need to login first. 2. Click our category and choice your phone and booked it. 3. Then go to the dashboard page and click the buy button and complete the order with stripe payment get way.'
    },
  ]
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return (
        <section className="md:my-20">
          <h1 className="text-2xl text-center font-semibold text-gray-800 lg:text-3xl mb-5">Frequently Asked Qestions</h1>
   
          {
          faqData.map((item, index) => (
            <div key={index} className="border-2 w-2/3 mx-auto border-gray-100 rounded-lg mb-5">
            <button onClick={() => toggleAccordion(index)} className="flex items-center justify-between w-full p-8">
              <h1 className="text-xl font-semibold text-gray-700">{item.question}</h1>
              <p className="text-3xl bg-white text-blue-500">
              {activeIndex === index ? <HiMinusCircle></HiMinusCircle> : <HiPlusCircle></HiPlusCircle> }
              </p>
            </button>
            <hr className="border-gray-200 dark:border-gray-700" />
            {
              activeIndex === index && <p className="p-8 text-md text-gray-500">
              {item?.answer}
           </p>
            }
            
          </div>

      
      ))
      }  
      </section>
    )
}

export default Faq;