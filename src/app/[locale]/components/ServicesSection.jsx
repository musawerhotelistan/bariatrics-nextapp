"use client";
import React from "react";
import Image from "next/image";
import RatingUserIcon from '../../../../public/images/nova/ratinguser.svg';
import accommdation from '../../../../public/images/nova/accommodation.svg';
import world from '../../../../public/images/nova/world.svg';
import doctor from '../../../../public/images/nova/doctor.svg';
import { handleClickConsul } from "@/app/utils/helpers";
import { useTranslations } from "next-intl";


const ServicesSection = () => {



  const services = [
    {
      iconSrc: '/images/dental/info.svg', // You will need to provide the icons
      title: ('service_t1'),
      description: ('service_t1_desc'),
    },
    {
      iconSrc: '/images/dental/message.svg',
      title: ('service_t2'),
      description: ('service_t2_desc')
    },
    {
      iconSrc: '/images/dental/car.svg',
      title: ('service_t3'),
      description: ('service_t3_desc'),
    },

    {
      iconSrc: '/images/dental/hotel.svg',
      title: ('service_t4'),
      description: ('service_t4_desc'),
    },
    {
      iconSrc: '/images/dental/plane.svg',
      title: ('service_t5'),
      description: ('service_t5_desc'),
    },
    {
      iconSrc: '/images/dental/care.svg',
      title: ('service_t6'),
      description: ('service_t6_desc'),
    },
  ];


  const t = useTranslations('common');
  // const images = [ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8, ba9, ba10, ba11];

  return (
    <section className="container flex flex-col text-center mx-auto px-4 py-8" id="services">
      <div className="">
        <h1 className="md:text-4xl family-default font-bold my-10 text-[primary] text-xl">{t('service_title')}</h1>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-acent1 p-6 rounded-lg shadow-lg flex flex-col items-center text-center min-h-[400px]">
               <Image width={100} height={100} className="mb-4 h-32" src={service?.iconSrc} alt={service?.title} loading="lazy"/>
            <h1 className="text-3xl font-bold text-primary family-mix mb-2">{t(service?.title)}</h1>
            <h3 className="text-primary family-default text-[20px]" >{t(service?.description)}</h3>
          </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-8">
        <button onClick={() => handleClickConsul()} className="custom-btn rounded-full">
          {t('more_information')}
        </button>
      </div>
    </section>

  );
};

export default ServicesSection;
