"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from "next-intl";

import uKFlag from '../../../../public/images/nova/ukFlag.svg';



const PatientFeedback = () => {

    const t = useTranslations('common');


    const slides = [
        { id: "64a2bf2a2203356713557300", name: "Kim Fisher", flag: uKFlag, feedback: t('feedback_1') },
        { id: "6509f2836b10d6fd9b4b9af7", name: "Amanda Donaldson", flag: uKFlag, feedback: t('feedback_2') },
        { id: "6509d4c6b5955306e52b1228", name: "Helena Amoakohene", flag: uKFlag, feedback: t('feedback_3') },
        { id: "65159934040f74ede96c8e7a", name: "Silvija Stulaite", flag: uKFlag, feedback: t('feedback_4') },
        { id: "650b3ad759522dd1a23f57b4", name: "Emilia Wiatr", flag: uKFlag, feedback: t('feedback_5') },
        { id: "650c5718d531db8e4f833862", name: "Colosseo Restaurant", flag: uKFlag, feedback: t('feedback_6')},
        { id: "64fae7551f956421a77b48c2", name: "Laura Munar", flag: uKFlag, feedback: t('feedback_7') },
        { id: "64b9079b0fdfad7debb80e1a", name: "Stephen Gowland", flag: uKFlag, feedback: t('feedback_8') },

        { id: "6504868f11c0d28f1061090e", name: "Lulia", flag: uKFlag, feedback: t('feedback_9') },
    ];

    return (
        <section className="py-20 px-5 text-center">

            {/* Title */}
            <div className="flex justify-center">
                <Image className="text-center" alt="image" src={"/images/nova/trustpilot-comment.webp"} width={900} height={100} loading="lazy"/>

            </div>
            <h1 className="text-text text-xl md:text-4xl family-mix pt-3 font-extrabold mb-4">{t('patient_reviews')}</h1>
            <h4 className="text-l md:text-2xl text-primary font-semibold pb-10">{t('patient_reviews_title')}</h4>
            {/* Swiper Carousel */}
            <div className="mx-auto h-96  flex justify-center items-center">
                <Swiper

                    spaceBetween={20}
                    height={550}
                    loop={true}
                    freeMode={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 0,
                    }}
                    speed={5000}
                    loopAddBlankSlides={true}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,

                        },
                        768: {
                            slidesPerView: 3,
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
                        <SwiperSlide key={index} className="w-44 h-[24rem] mt-11">
                            <div key={index} className="flex h-74 p-4 flex-col bg-text text-white gap-4">
                                <div className="flex justify-start flex-row gap-4">
                                    <Image src={slide?.flag} height={32} className="rounded-full" width={32} alt="" loading="lazy" />
                                    <div>
                                        <h2 className="family-mix font-bold text-[20px]">{slide?.name}</h2>
                                        <div className="flex flex-row">
                                            <Image src={"/images/nova/star.svg"} height={20} width={20} alt="" loading="lazy" />
                                            <Image src={"/images/nova/star.svg"} height={20} width={20} alt="" loading="lazy" />
                                            <Image src={"/images/nova/star.svg"} height={20} width={20} alt="" loading="lazy" />
                                            <Image src={"/images/nova/star.svg"} height={20} width={20} alt="" loading="lazy" />
                                            <Image src={"/images/nova/star.svg"} height={20} width={20} alt="" loading="lazy" />
                                        </div>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-8 h-96 md:h-64">
                                    <p className="text-justify font-medium family-mix text-lg h-28">
                                        {slide?.feedback}
                                    </p>
                                    {/* <div className="text-start mt-2">
                                <a link target="_blank" href={`https://www.trustpilot.com/reviews/${slide?.id}`} className="left-0 family-mix font-bold text-[16px]">{t('read_more')}</a>
                                </div> */}
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </section>
    );
};

export default PatientFeedback;
