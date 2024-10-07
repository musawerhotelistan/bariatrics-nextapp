"use client";
import React from "react";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { handleClickConsul } from "@/app/utils/helpers";
const FreeConsultationSection = () => {
  const t = useTranslations('common');

  return (
    <section className="px-2 md:px-0">
      <div className="bg-[#DEDEDE] w-full md:px-96 py-10">
        <div className="flex justify-around md:flex-row flex-col">
          <div className="flex gap-2 flex-col text-center md:text-start">
            <h1 className="md:text-4xl text-xl font-bold text-primary">
              {t('team_t1')}
            </h1>
            <h2 className="md:text-2xl text-xl font-normal text-primary">
            {t('team_t2')}
            </h2>
            <p className="md:text-xl text-l font-normal text-primary">
            {t('team_t1_desc')}

            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image width={120} height={120} alt="image" src="./images/dental/consul.svg" />
            <button className="custom-btn rounded-full bg-red" onClick={() => handleClickConsul()}>
              {t('contact_us')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeConsultationSection;
