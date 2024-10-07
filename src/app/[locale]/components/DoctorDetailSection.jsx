"use client";
import React from "react";
import Image from "next/image";
import checkbox from '../../../../public/images/dental/checkbox.svg';
import { useTranslations } from "next-intl";
const DoctorDetailSection = () => {
    const t = useTranslations('common');


    const data = [
        { title: t('contact_title_1'), desc: t('contact_desc_1'), icon: checkbox },
        { title: t('contact_title_2'), desc: t('contact_desc_2'), icon: checkbox },
        { title: t('contact_title_3'), desc: t('contact_desc_3'), icon: checkbox },
        { title: t('contact_title_4'), desc: t('contact_desc_4'), icon: checkbox },
        { title: t('contact_title_5'), desc: t('contact_desc_5'), icon: checkbox }
    ]
    return (
        <section className="">
            <div className="doctor-detail-main">
                <div className="doctor-detail-temp"></div>
                <div className="relative flex flex-col md:flex-row items-center gap-10 md:p-10 md:mx-44 p-4">

                    {/* Doctor Image */}
                    <div>
                    <h2 className="md:text-[35px] text-[24px] font-bold text-text family-default mb-4 text-center  md:hidden">{t('doc_tit1')}</h2>
                    <div className="">
                        <Image width={900} height={800} src="/images/nova/ceyhunaydogan-1-2048x1508.webp" alt="Dr. Ceyhun AYDOGAN" className="rounded-lg shadow-lg w-[96] h-[25rem] md:w-[657px] md:h-[32rem]" />
                    </div>
                    
                    </div>
                    {/* Doctor Info */}
                    <div className="w-auto md:w-[40rem] md:text-white text-primary">
                        <h2 className="md:text-[35px] text-[24px] font-bold family-default mb-4 hidden md:block">{t('doc_tit1')}</h2>
                        <p className="mb-6 font-light md:font-medium text-lg">
                           {t('doc_tit2')}
                        </p>
                        <p className="mb-6 font-light md:font-medium text-lg">
                            {t('doc_tit3')}
                        </p>
                        <div className="flex text-[22px] md:text-[42px] font-bold flex-col md:w-96 w-72">
                            <div className="flex flex-row justify-between items-center">
                               
                            </div>
                            <div className="flex flex-row gap-11 items-center border-b-2">
                                <h3>+20</h3>
                                <h3 className="text-[18px] md:text-[32px] font-bold ">{t('doc_tit4')}</h3>
                            </div>
                            <div className="flex flex-row gap-11 items-center border-b-2">
                                <h3>12K+</h3>
                                <p className="text-[18px] md:text-[32px] font-bold">{t('doc_tit5')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorDetailSection;
