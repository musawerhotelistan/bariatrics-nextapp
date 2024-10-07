"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useTranslations } from "next-intl";

const SuccessStoriesSection = () => {
    const t = useTranslations('common');

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setIsModalOpen(video);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



    const videos = [
        {
            thumbnail: "video-thumbs-00000.webp",
            link: "https://www.youtube.com/embed/cZGFC23GP9Y?si=HRdmimsKFKuhYCTq"
        },
        {
            thumbnail: "video-thumbs-00001.webp",
            link: "https://www.youtube.com/embed/5im0UwUkJa8?si=vT1gyOdmhsK2egmu"
        },
        {
            thumbnail: "video-thumbs-00002.webp",
            link: "https://www.youtube.com/embed/R2wnlcxfR7w?si=KeRLUUWqENqvuJxf"
        }
    ];

    return (
        <section className="py-5 md:py-10 px-5 text-center" id="before_after">
            {/* Title */}
            <h2 className="text-text text-2xl md:text-4xl family-mix font-bold mb-12">{t('success_story')}</h2>

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
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center">
                                {/* Thumbnail */}
                                <div className="relative cursor-pointer" onClick={() => openModal(video)}>
                                    <Image
                                        width={900}
                                        height={900}
                                        alt=""
                                        src={`/images/nova/${video.thumbnail}`}
                                        
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <Image
                                        width={150}
                                        height={150}
                                        alt="" 
                                        src={`/images/nova/yt-play.svg`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {Boolean(isModalOpen) && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-black p-4 rounded-lg">
            <button
              className="absolute top-[-2rem] right-[-2rem] text-2xl h-12 w-12 text-white rounded-full bg-red-950 hover:text-gray-900"
              onClick={closeModal}
            >
              ✖️
            </button>
            <div className=" h-full">
            <iframe
                src={isModalOpen?.link}
                className="w-[50rem] h-[50rem]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
            </div>
        </section>
    )
};
export default SuccessStoriesSection;
