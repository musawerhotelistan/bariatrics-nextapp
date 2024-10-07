"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import ba1 from '../../../../public/images/nova/before-after.webp';
import ba2 from '../../../../public/images/nova/before-after-1-scaled.webp';
import ba3 from '../../../../public/images/nova/before-after-2-scaled.webp';
import ba4 from '../../../../public/images/nova/before-after-3-scaled.webp';
import ba5 from '../../../../public/images/nova/before-after-4-scaled.webp';
import ba6 from '../../../../public/images/nova/before-after-5-scaled.webp';
import ba7 from '../../../../public/images/nova/before-after-6-scaled.webp';
import ba8 from '../../../../public/images/nova/before-after-7-scaled.webp';
import ba9 from '../../../../public/images/nova/before-after-8-scaled.webp';
import ba10 from '../../../../public/images/nova/before-after-9-scaled.webp';
import ba11 from '../../../../public/images/nova/before-after-10-scaled.webp';
import ba12 from '../../../../public/images/nova/before-after-11-scaled.webp';
import ba13 from '../../../../public/images/nova/before-after-12-scaled.webp';
import ba14 from '../../../../public/images/nova/before-after-13-scaled.webp';
import ba15 from '../../../../public/images/nova/before-after-14-scaled.webp';
import { handleClickConsul } from "@/app/utils/helpers";
import { useTranslations } from "next-intl";

const BeforeAfter = () => {
    const t = useTranslations('common');

    const slides = [ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8, ba9, ba10, ba11,ba12,ba13,ba14,ba15];

    return (
        <section className="py-5 md:py-10 px-5 text-center" id="before_after">
            {/* Title */}
            <h2 className="text-text text-2xl md:text-4xl family-mix font-extrabold mb-12">{t('before_after')}</h2>

            {/* Swiper Carousel */}
            <div className="mx-auto">
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation,EffectCoverflow]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {slides.map((slide, index) => (
                        <div className="w-96 h-[800px]" key={index}>
                        <SwiperSlide >
                            <Image
                                loading="lazy"
                                key={index}
                                src={slide}
                                alt={index}
                                height={900}
                                width={900}
                                className="rounded-lg shadow-lg object-cover w-full"

                            />
                        </SwiperSlide>
                        </div>
                        
                    ))}

                </Swiper>
            </div>
        </section>
    );
};

export default BeforeAfter;
