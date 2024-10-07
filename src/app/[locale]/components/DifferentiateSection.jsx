'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';


export default function DifferentiateSection() {
  const t = useTranslations('common');

  const data = [
    {service:t('local_transfer'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/tick.svg"},
    {service:t('complication_insurance'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
    {service:t('profess_interp'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
    {service:t('post_op_nurs'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
    {service:t('broth_service'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
    {service:t('continued_diet'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
    {service:t('5_star'),icon1:"/images/nova/tick.svg",icon2:"/images/nova/cross.svg"},
  ];


  const getColor=(imagePath)=>{
    debugger
    if (imagePath.includes('tick.svg')) {
      return 'bg-[#86C659]';
    }
      return 'bg-[#949494]';
  }
  

  return (
    <section className="mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row justify-center ">
        {/* Left Image Section */}
        <div className="hidden mb-8 md:flex">
          <Image
            src="/images/nova/ceyhunaydogan-2048x1901.webp"
            alt="Team"
            width={800} // You can adjust the size based on the design
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:flex-2 flex-auto bg-white p-6  rounded-lg">
          
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="md:px-4 px-0 py-4 text-sm font-semibold text-gray-700"><h1 className="md:text-2xl font-extrabold text-lg text-text text-center">{t('different_us')}</h1></th>
                <th className="md:px-4 px-0 py-4 md:text-md text-sm font-semibold text-primary">{t('op_dr_cey')}</th>
                <th className="md:px-4 px-0 py-4 md:text-md text-sm font-semibold text-primary">{t('other_medical_company')}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className={`border-t bg-[${index % 2===0?'#F1F8FE':"white"}]`}>
                <td className="px-4 py-4 font-medium text-primary">{item?.service}</td>
                <td className="px-4 py-4">
                  <div className={`${getColor(item?.icon1)} rounded-full md:w-10 w-7`}>
                    <Image src={item?.icon1} width={40} height={40} alt='' className='text-green-600' loading='lazy' />
                  </div>
                </td>
                <td>
                <div className={`${getColor(item?.icon2)} rounded-full md:w-10 w-7 `}>
                  <Image src={item?.icon2} width={40} height={40} alt='' className='text-green-600' loading='lazy' />
                </div>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>

  );
}
