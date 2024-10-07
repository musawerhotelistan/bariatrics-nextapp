"use client";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

const HomeSection = () => {
    const t = useTranslations('common');
    return (
        <section>
            <div className="home-section-main">
            <div className="home-section"></div> {/* Overlay */}

            <div className="relative z-10 text-center px-4">
                {/* Logo */}
                <Image src="/images/nova/logo-white-2048x580.webp" width={150} height={100} alt="Nova Vita" className="mx-auto mb-6 w-96" />
                <Image src="/images/nova/hero-icon.svg" width={32} height={32} alt="Nova Vita" className="mx-auto mb-6 w-32" />

                {/* Title */}
                <h1 className="text-[23px] lg:text-[50px] font-light mb-4">{t('home_tit1')}</h1>

                {/* Subtitle */}
                <p className="lg:text-[38px] text-[16px] font-semibold family-mix text-center lg:text-start">
                    {t('home_tit2')}
                </p>
                <p className="lg:text-[40px] text-[28px] font-bold family-mix text-center lg:text-start">
                {t('home_tit3')}
                </p>

                {/* Logos */}
                <div className="flex justify-center space-x-6 mb-8">
                    <Image src="/images/nova/logo-tscrs.webp" height={113} width={113} alt="Certification 1" className="w-20 h-20 lg:w-28 lg:h-auto" />
                    <Image src="/images/nova/logo-mcd.webp" height={113} width={113} alt="Certification 2" className="w-20 h-20 lg:w-28 lg:h-auto" />
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-center space-x-4">
                    <button className="custom-btn capitalize lg:w-96 h-20 bg-primary hover:bg-text">
                        {t('home_btn1')}
                    </button>
                    <button className="custom-btn capitalize lg:w-96 h-20  bg-text hover:bg-primary">
                        {t('home_btn2')}
                    </button>
                </div>
            </div>
            </div>
        </section>

    );
};

export default HomeSection;
