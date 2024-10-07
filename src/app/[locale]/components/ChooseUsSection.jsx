"use client";
import React from "react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useTranslations } from "next-intl";

const ChooseUsSection = () => {
    const t = useTranslations('common');


    const data = [
        {
            title: t('choose_1_tit'),
            desc: t('choose_1_desc'),
            img: "why-us-5.webp"
        },
        {
            title: t('choose_2_tit'),
            desc: t('choose_2_desc'),
            img: "why-us-3.webp"
        },
        {
            title: t('choose_3_tit'),
            desc: t('choose_3_desc'),
            img: "why-us-4.webp"
        },

        {
            title: t('choose_4_tit'),
            desc: t('choose_4_desc'),
            img: "why-us-2.webp"
        },

        {
            title: t('choose_5_tit'),
            desc: t('choose_5_desc'),
            img: "why-us-1.webp"
        },
    ];

    return (
        <section className="py-5 md:py-20 px-5 text-center" id="before_after">
            {/* Title */}
            <h2 className="text-text text-2xl md:text-4xl family-mix font-extrabold mb-12">{'Why Choose Us'}</h2>

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
                                <div className="relative bg-cover bg-center text-white flex justify-center py-2 h-[22rem] w-[20rem] md:h-[35rem] md:w-[35rem]" style={{ backgroundImage: `url(/images/nova/${slide?.img})` }}>
                                    <div className="flex justify-center flex-col">
                                        <h2 className="text-white text-lg md:text-3xl font-bold mt-4">{slide?.title}</h2>
                                        <p className="text-white text-sm md:text-lg font-normal mt-4 text-wrap">{slide?.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>

                    ))}

                </Swiper>
            </div>
        </section>
    )
};
export default ChooseUsSection;
