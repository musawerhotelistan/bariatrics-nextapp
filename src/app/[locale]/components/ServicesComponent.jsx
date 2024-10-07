"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from "next-intl";
import { servicesConst } from "@/app/utils/consts";
import { handleClickConsul } from "@/app/utils/helpers";

const CardComponent = ({ title, imageSrc, description, packages, onClick, detail }) => {
    const t = useTranslations('common');
    return (
        <div className="bg-accent shadow-lg rounded-t-lg p-6 flex flex-col items-center">
        <Image width={500} height={500} src={imageSrc} alt={title} loading="lazy"/>
        <h1 className="text-2xl text-center font-bold mb-2 bg-secondary w-full text-white p-2 rounded-b-lg">{title}</h1>
        <h1 className="text-center family-default text-primary text-[19px] md:text-[22px] font-bold mb-4">{description}</h1>
        <h3 className={`text-[20px] text-primary family-default ${detail ? "h-28" : ""}`}>{detail ?? ""}</h3>
        <div className="">
            <ul className={`mb-4 flex text-lg flex-col text-primary gap-3 ${detail ? "h-10" : "h-72"}`}>
                {packages && packages.map((pkg, idx) => (
                    <li key={idx}>
                        -&nbsp;
                        <a href="#" className="hover:underline">{t(pkg)}</a>
                    </li>
                ))}
            </ul>
            <button onClick={onClick} className="custom-btn flex items-center">
                <span className="mr-2">{t('more_information')}</span>
                {/* <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" /> */}
            </button>
        </div>
    </div>
    )
}


const ServicesComponent = () => {

    const t = useTranslations('common');


    return (
        <section className="container mx-auto px-4 py-8">
            {/* Title */}

            {/* Swiper Carousel */}
            <div className="md:grid gap-8 md:grid-cols-3 hidden">
                {servicesConst.map((service, idx) => (
                    <CardComponent
                        key={idx}
                        title={t(service?.title)}
                        imageSrc={service?.imageSrc}
                        description={service?.description?t(service?.description):""}
                        packages={service?.packages}
                        detail={service?.detail?t(service?.detail):""}
                        onClick={() => handleClickConsul()}
                    />
                ))}
            </div>
            <div className="md:hidden sm:block">
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
                    <div className="md:grid gap-8 md:grid-cols-3 hidden">
                        {servicesConst.map((service, idx) => (
                            <SwiperSlide key={idx}>
                                <CardComponent
                                    title={t(service?.title)}
                                    imageSrc={service?.imageSrc}
                                    description={service?.description?t(service?.description):""}
                                    packages={service?.packages}
                                    detail={service?.detail?t(service?.detail):""}
                                    onClick={() => console.log('clicked')}
                                />
                            </SwiperSlide>

                        ))}
                    </div>

                </Swiper>
            </div>


        </section >
    );
};

export default ServicesComponent;
