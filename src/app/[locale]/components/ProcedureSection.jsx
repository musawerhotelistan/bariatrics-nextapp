"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { capitalizeFirstLetter } from "@/app/utils/helpers";
const ProcedureSection = () => {
    const t = useTranslations('common');


    const [activeTab, setActiveTab] = useState('sleeve');

    // Dummy data for each procedure
    const procedures = {
        sleeve: {
            title: t('proce_tit_1-title'),
            description: t('proce_tit_1_desc'),
            details: {
                stay: t('proce_tit_1_avg_stay_val'),
                operationDuration: t('proce_tit_1_avg_opera_durati_val'),
                anesthesia: t('proce_tit_1_anesth_value'),
                recoveryDuration: t('proce_tit_1_recovery_value'),
                weightLoss: t('proce_tit_1_excess_value')
            },
            image: "/images/nova/bypass-2048x1394.webp"
        },
        balloon: {
            title: t('proce_tit_2-title'),
            description: t('proce_tit_2_desc'),
            details: {
                stay: t('proce_tit_2_avg_stay_val'),
                operationDuration: t('proce_tit_2_avg_opera_durati_val'),
                anesthesia: t('proce_tit_2_anesth_value'),
                recoveryDuration: t('proce_tit_2_recovery_value'),
                weightLoss: t('proce_tit_2_excess_value')
            },
            image: "/images/nova/baloon.webp"
        },
        bypass: {
            title: t('proce_tit_3-title'),
            description: t('proce_tit_3_desc'),
            details: {
                stay: t('proce_tit_3_avg_stay_val'),
                operationDuration: t('proce_tit_3_avg_opera_durati_val'),
                anesthesia: t('proce_tit_3_anesth_value'),
                recoveryDuration: t('proce_tit_3_recovery_value'),
                weightLoss: t('proce_tit_3_excess_value')
            },
            image: "/images/nova/bypass-2048x1394.webp"
        }
    };

    const currentProcedure = procedures[activeTab];

    const button = [
        { text: capitalizeFirstLetter(t('proce_tit_1')), activeTab: "sleeve" },
        { text: capitalizeFirstLetter(t('proce_tit_2')), activeTab: "balloon" },
        { text: capitalizeFirstLetter(t('proce_tit_3')), activeTab: "bypass" },
    ]

    return (
        <div className="container mx-auto py-0 md:py-12">
            <h1 className="md:text-[32px] text-[24px] font-extrabold text-center text-text">{t('proce_tit')}</h1>
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8 p-2">
                {button.map((item, index) => (
                    <button
                        key={index}
                        className={`md:px-6 px-3 py-3 hover:bg-text hover:text-white rounded-t-lg w-80 font-bold  ${activeTab === item.activeTab ? 'bg-text text-white border-b-4 border-[#89B7E2]' : 'bg-[#89B7E2] text-gray-600'}`}
                        onClick={() => setActiveTab(item.activeTab)}
                    >
                        {item.text}
                    </button>
                ))}

            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row text-primary">
                {/* Image */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <Image
                        height={500}
                        width={500}
                        src={currentProcedure.image}
                        alt={currentProcedure.title}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                    />
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 md:pl-10">
                    <h2 className="text-[28px] md:text-[32px] font-semibold mb-4">{currentProcedure.title}</h2>
                    <p className="mb-6">{currentProcedure.description}</p>

                    {/* Details */}
                    <div className="flex gap-4 flex-wrap">
                        <div className="w-72 border-b-2 border-[#E0E0E0]">
                            <div className="flex justify-start items-center gap-3 ">
                                <Image src={'/images/nova/hosp.svg'} width={30} height={30} alt="" loading="lazy" />
                                <div className="flex flex-col">
                                    <span className="mr-4 font-bold">{t('proce_tit_2_avg_stay_key')}</span>
                                    <span>{currentProcedure.details.stay}</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-72 border-b-2 border-[#E0E0E0]">
                            <div className="flex justify-start items-center gap-3">
                                <Image src={'/images/nova/fill.svg'} width={30} height={30} alt="" loading="lazy" />
                                <div className="flex flex-col">
                                    <span className="mr-4 font-bold">{t('proce_tit_3_opera_durati_key')}</span>
                                    <span>{currentProcedure.details.operationDuration}</span>
                                </div>
                            </div>
                        </div>


                        <div className="w-72 border-b-2 border-[#E0E0E0]">
                            <div className="flex justify-start items-center gap-3">
                                <Image src={'/images/nova/injec.svg'} width={30} height={30} alt="" loading="lazy" />
                                <div className="flex flex-col">
                                    <span className="mr-4 font-bold">{t('proce_tit_3_anesth_key')}</span>
                                    <span>{currentProcedure.details.anesthesia}</span>
                                </div>
                            </div>
                        </div>


                        <div className="w-72 border-b-2 border-[#E0E0E0]">
                            <div className="flex justify-start items-center gap-3">
                                <Image src={'/images/nova/heal.svg'} width={30} height={30} alt="" loading="lazy" />
                                <div className="flex flex-col">
                                    <span className="mr-4 font-bold">{t('proce_tit_3_recovery_key')}</span>
                                    <span>{currentProcedure.details.recoveryDuration}</span>
                                </div>
                            </div>
                        </div>


                        <div className="w-72 border-b-2 border-[#E0E0E0]">
                            <div className="flex justify-start items-center gap-3">
                                <Image src={'/images/nova/bag.svg'} width={30} height={30} alt="" loading="lazy" />
                                <div className="flex flex-col">
                                    <span className="mr-4 font-bold">{t('proce_tit_3_excess_key')}</span>
                                    <span>{currentProcedure.details.weightLoss}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* CTA Button */}
                            <button className=" bg-text md:block hidden text-white font-semibold px-6 custom-btn rounded-lg">
                                {t('request_quote')}
                            </button>
                        </div>
                        <button className=" bg-text w-full md:hidden block text-white font-semibold px-6 custom-btn rounded-lg">
                            {t('request_quote')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcedureSection;
