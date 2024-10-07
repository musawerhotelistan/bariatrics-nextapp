"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const FreeConsultationSection = dynamic(() => import("./FreeConsultationSection"), { ssr: false });
const ClinicSection = () => {
  const t = useTranslations('common');
  return (
    <>
      <section className="py-5 md:pt-12 px-5 text-center" id="clinic_section">
        <h2 className="text-primary md:text-[34px] md:text-center text-center text-[24px] family-default font-semibold mb-6">{t('clinic')}</h2>
        <div className="md:px-[25rem]">
          <div className="flex md:flex-row flex-col justify-center gap-5 my-5">
            <Image width={400} height={400} alt="image" className="rounded-lg" src={'/images/dental/hosptal-novavita-1.webp'} />
            <Image width={400} height={400} alt="image" className="rounded-lg" src={'/images/dental/hospital-novavita-2.webp'} />
            <Image width={400} height={400} alt="image" className="rounded-lg" src={'/images/dental/hospital-desktop-3@2x.webp'} />
          </div>
          <div className="flex md:flex-row flex-col justify-start gap-5">
            <Image width={400} height={600} alt="image" className="rounded-lg md:h-[45rem] md:w-[25rem] h-72" src={'/images/dental/hospital-desktop-4@2x.webp'} />
            <Image width={820} height={600} alt="image" className="rounded-lg md:h-[45rem] md:w-[51rem]" src={'/images/dental/hospital-desktop-5@2x.webp'} />
          </div>
        </div>
      </section>
      <FreeConsultationSection />
    </>
  );
};

export default ClinicSection;
