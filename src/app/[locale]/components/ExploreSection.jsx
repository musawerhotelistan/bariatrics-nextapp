"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useTranslations } from "next-intl";

const ExploreSection = () => {
    const t = useTranslations('common');


    const data = [
        {
            img: "arpanu-medical-istanbul-00000.webp",
        },
        {
            img: "arpanu-medical-istanbul-00001.webp",
        },
        {
            img: "arpanu-medical-istanbul-00002.webp",
        },  
        {
            img: "arpanu-medical-istanbul-00001.webp",
        },
        {
            img: "arpanu-medical-istanbul-00002.webp",
        },  
        {
            img: "arpanu-medical-istanbul-00000.webp",
        },
        {
            img: "arpanu-medical-istanbul-00001.webp",
        },
        {
            img: "arpanu-medical-istanbul-00002.webp",
        },
        {
            img: "arpanu-medical-istanbul-00001.webp",
        },
        {
            img: "arpanu-medical-istanbul-00002.webp",
        },
       
             
    ];

    return (
        <section className="py-5 md:py-10 px-5 text-center" id="before_after">
            {/* Title */}
            <h2 className="text-text text-lg md:text-4xl family-mix font-extrabold mb-4">{t('explore_istan')}</h2>
            <h4 className="text-primary text-sm md:text-lg family-mix font-medium mb-5">{t('explore_istan_desc')}</h4>

            {/* Swiper Carousel */}
            <div className="mx-auto p-8">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {data.map((slide, index) => (
                        <div className="w-96 h-[500px]" key={index}>
                            <SwiperSlide>
                                <div className="relative bg-cover bg-center text-white flex justify-center py-2 h-[22rem] w-[20rem] md:h-[35rem] md:w-[35rem]">
                                    <Image src={`/images/nova/${slide?.img}`} width={800} height={800} alt="img"/>
                                </div>
                            </SwiperSlide>
                        </div>

                    ))}

                </Swiper>
            </div>
        </section>
    )
};
export default ExploreSection;
