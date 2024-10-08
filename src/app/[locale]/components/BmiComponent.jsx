"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import { useRouter } from "next/router";
import { isValidPhoneNumber } from "libphonenumber-js";
const BmiComponent = () => {
    const t = useTranslations('common');

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [description, setDescription] = useState("");


    const [disabled, setDisabled] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        watch,
        reset,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (data?.height && data?.weight) {
            const heightInMeters = data?.height / 100;
            const bmiValue = (data?.weight / (heightInMeters * heightInMeters)).toFixed(1);
            console.log(bmiValue);
            setBmi(bmiValue);
            if (bmiValue < 18.5) {
                setDescription(t('underweight'));
            } else if (bmiValue < 24.9) {
                setDescription(t('healthy'));
            } else if (bmiValue < 29.9) {
                setDescription(t("overweight"));
            } else {
                setDescription(t("obese"));
            }
        }

        // reset({
        //     height: "",
        //     weight: ""
        // });

    }


    const getSliderColor = () => {
        if (bmi < 18.5) return "bg-blue-400";
        if (bmi >= 18.5 && bmi <= 24.9) return "bg-green-400";
        if (bmi >= 25 && bmi <= 29.9) return "bg-yellow-400";
        if (bmi >= 30) return "bg-red-400";
        return "bg-gray-400";
    };



    return (
        <div className="bmi-section-content">
            <div className="bg-white p-2  md:p-0 rounded-lg  w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-2">{t('calculate_bmi')}</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-center">
                        <div className="mt-10">
                            <Image src="/images/nova/bmi-icon.webp" width={150} height={150} alt="" />
                        </div>
                        <div>
                            {/* Height Input */}
                            <div className="flex flex-col mb-4">
                                <label htmlFor="height" className="text-gray-600 font-medium mb-1">{t('height')}</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        placeholder={t('cm')}
                                        className="flex-1 border border-gray-300 p-3 rounded-md"
                                        
                                        {...register('height', { required: t('required') })}
                                    />
                                    <span className="p-3 bg-gray-100 border border-l-0 rounded-md">{t('cm')}</span>

                                    {/* <input
                                type="number"
                                id="height"
                                placeholder="CM"
                                className="flex-1 border border-gray-300 p-3 rounded-md"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            /> */}

                                </div>
                                {errors.height && <span className="text-red-500">{errors.height.message}</span>}
                            </div>

                            {/* Weight Input */}
                            <div className="flex flex-col mb-6">
                                <label htmlFor="weight" className="text-gray-600 font-medium mb-1">{t('weight')}</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        placeholder={t('kg')}
                                        className="flex-1 border border-gray-300 p-3 rounded-md"
                                        
                                        {...register('weight', { required: t('required') })}
                                    />

                                    {/* <input
                                    type="number"
                                    id="weight"
                                    placeholder="KG"
                                    className="flex-1 border border-gray-300 p-3 rounded-md"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                /> */}
                                    <span className="p-3 bg-gray-100 border border-l-0 rounded-md">{t('kg')}</span>
                                </div>
                                {errors.weight && <span className="text-red-500">{errors.weight.message}</span>}
                            </div>

                            {/* Calculate Button */}
                            <button
                                className="w-full bg-primary font-bold text-white py-3 rounded-md"
                            >
                                {t('calculate_bmi')}
                            </button>
                        </div>
                    </div>
                </form>


                {/* BMI Display */}
                <div className="mt-6 text-center">
                    <p className="text-lg font-semibold">{t('your_score')} <span className="font-bold text-xl">{bmi}</span></p>
                </div>

                <div className="flex flex-col items-center p-4">
                    <input
                        type="range"
                        min="0"
                        max="40"
                        value={bmi}
                        readOnly
                        className="w-full h-5 bg-gradient-to-r from-green-400 to-red-400 rounded-lg appearance-none bmi-bar"
                    />
                    {/* <div className="mt-4 text-lg font-semibold">
                    {t('value')} {bmi}
                </div> */}
                </div>

                {/* Dynamic BMI Slider */}
                {/* <div className="w-full h-4 rounded-full flex justify-center text-center overflow-hidden mt-4 relative bg-gray-200 bmi-bar">
                <div
                    className={`absolute bg-primary h-5 w-1 rounded-full`}
                    style={{ marginLeft: `${(bmi / 40) * 100}%` }}
                ></div>
            </div> */}

                {/* BMI Information Text */}
                <h3 className="text-center text-lg font-bold mt-0">
                    {description}
                </h3>

                <p className="text-sm text-gray-600 text-center mt-3 font-medium">
                    {t('bmi_desc')}
                </p>

                {/* Contact Us Button */}
                <button className="w-full bg-text text-white py-3 rounded-md mt-6 custom-btn h-16">
                    {t('contact_us')}
                </button>
            </div>
        </div>
    );
};

export default BmiComponent;
