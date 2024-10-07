'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export default function FaqSection() {
    const t = useTranslations('common');


    const faqData = [
      {
        question: 'faq_1',
        answer: 'faq_ans',
      },
      {
        question: 'faq_2',
        answer: 'faq_ans_2',
      },
      {
        question: 'faq_3',
        answer: 'faq_ans_3',
      },
      {
        question: 'faq_4',
        answer: 'faq_ans_4',
      },
      {
        question: 'faq_5',
        answer: 'faq_ans_5',
      },
      {
        question: 'faq_6',
        answer: 'faq_ans_6',
      },
      {
        question: 'faq_7',
        answer: 'faq_ans_7',
      },
    ];

    const [openIndex, setOpenIndex] = useState(0); // Initially open the first FAQ item
    const contentRefs = useRef([]); // Use ref to dynamically store each FAQ content height
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? -1 : index); // Toggle the clicked item
    };

    useEffect(() => {
        if (contentRefs.current[openIndex]) {
          contentRefs.current[openIndex].style.maxHeight = `${contentRefs.current[openIndex].scrollHeight}px`;
        }
      }, [openIndex]);

  return (
    <section className="container mx-auto px-4 py-16">
    <div className="flex md:flex-row flex-col-reverse gap-10">
      {/* Left Side - Image */}
      <div className="">
        <Image
          src="/images/nova/form.webp" // You should add this image to the public folder in your project
          alt="Dental team"
          className="w-full h-full object-cover rounded-lg shadow-lg"
          height={600}
          width={900}
        />
      </div>

      {/* Right Side - FAQ Section */}
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-3xl text-text font-extrabold md:text-start text-center mb-6">{t('faq')}</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="border-b text-secondary bg-[#F4F9FF] mt-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-text">{t(faq.question)}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)} // Store the ref to access height
              style={{
                maxHeight: openIndex === index ? contentRefs.current[index]?.scrollHeight : 0,
              }}
              className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0`}
            >
              <div className="p-4 text-primary opacity-100 transform transition-all duration-500 ease-in-out">
                <p>{t(faq.answer)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
   
  );
}
