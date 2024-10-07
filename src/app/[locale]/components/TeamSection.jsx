"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const FreeConsultationSection = dynamic(() => import("./FreeConsultationSection"), { ssr: false });
const TeamSection = () => {

  const t = useTranslations('common');
  // const images = [ba1, ba2, ba3, ba4, ba5, ba6, ba7, ba8, ba9, ba10, ba11];

  return (
    <>
      <section className="py-10 md:px-5 text-center md:h-[52rem] bg-accent" id="team">
        <div className="py-8">
          {/* Title */}
          <h2 className="text-primary text-4xl family-default font-bold mb-12">{t('team')}</h2>
          <div className="flex justify-center">
            <Image width={900} height={600} className="mb-4 md:w-[60%] sm:w-[100%]" src={'/images/dental/team-novavita.webp'} alt="Hospital" loading="lazy" />
          </div>
        </div>
      </section>
      <FreeConsultationSection />
    </>

  );
};

export default TeamSection;
