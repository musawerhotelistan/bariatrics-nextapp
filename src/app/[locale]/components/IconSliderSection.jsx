"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useTranslations } from "next-intl";

const IconSliderSection = () => {
    const t = useTranslations('common');



    const data = [
        {
            img: "brand-logo-00000.webp",
        },
        {
            img: "brand-logo-00001.webp"
        },
        {
            img: "brand-logo-00002.webp",
        },
        {
            img: "brand-logo-00003.webp",
        },  
        {
            img: "brand-logo-00004.webp",
        },  
        {
            img: "brand-logo-00005.webp",
        },  
        {
            img: "brand-logo-00006.webp",
        },        
    ];

    return (
        <section className="py-5 md:py-10 px-5 text-center" id="before_after">
            {/* Swiper Carousel */}
            <div className="mx-auto p-8">
                <Swiper
                loop={true}
                freeMode={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 0,
                    }}
                    speed={5000}
                    loopAddBlankSlides={true}
                    navigation={true}
                    modules={[Autoplay, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper"
                >
                    {data.map((slide, index) => (
                        <div className="w-96 h-[500px]" key={index}>
                            <SwiperSlide>
                                <div className="relative bg-cover bg-center text-white flex justify-center py-2" >
                                    <Image src={`/images/nova/${slide?.img}`} width={200} height={200} alt=""/>
                                </div>
                            </SwiperSlide>
                        </div>

                    ))}

                </Swiper>
            </div>
        </section>
    )
};
export default IconSliderSection;
