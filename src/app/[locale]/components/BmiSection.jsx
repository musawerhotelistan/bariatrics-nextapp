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
const BmiSection = () => {
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

    const onSubmit = async (data) => {

        const phoneNumber = isValidPhoneNumber(data.phone?.phone, data?.phone?.country);

        if (!phoneNumber) {
            setError('phone', { message: t('phone_invalid') });
            return false;
        }

        setDisabled(true);
        const leadForm = {
            "name": data?.name,
            "phone": data?.phone?.phone,
            "email": data?.email,
            "lead_source": "Google/Web Form",
            "language": "English",
            "source_language": "English",
            "interest": [
                "Bariatrics"
            ],
            "procedure": [
                "Bariatrics"
            ],
            "doctor": "Dr. Ceyhun AYDOGAN",
            "utm_source": "",
            "utm_medium": "",
            "utm_matchtype": "",
            "utm_keyword": "",
            "utm_network": "",
            "gclid": "",
            "ip": ""
        }
        console.log('country', leadForm)
        debugger
        // console.log(JSON.stringify(leadForm));
        const response = await fetch('https://zoho.hotelistan.net/api/form-patient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadForm),
        });

        const result = await response.json();
        if (response?.status === 200 && result?.success) {
            setDisabled(false);
            reset({
                name: "",
                phone: "",
                email: ""
            });
            Swal.fire({
                icon: "success",
                title: t('form_submited'),
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const handlePhoneChange = (value, country) => {
        debugger
        setValue('phone', { phone: value, country: country.countryCode?.toUpperCase() }); // Set the value for the 'phone' field
        trigger('phone'); // Trigger validation manually
    };


    const calculateBMI = () => {

        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            console.log(bmiValue);
            setBmi(bmiValue);
            if (bmiValue < 18.5) {
                setDescription("Underweight");
            } else if (bmiValue < 24.9) {
                setDescription("Healthy weight range");
            } else if (bmiValue < 29.9) {
                setDescription("Overweight");
            } else {
                setDescription("Obese");
            }
        }

    };

    const getSliderColor = () => {
        if (bmi < 18.5) return "bg-blue-400";
        if (bmi >= 18.5 && bmi <= 24.9) return "bg-green-400";
        if (bmi >= 25 && bmi <= 29.9) return "bg-yellow-400";
        if (bmi >= 30) return "bg-red-400";
        return "bg-gray-400";
    };



    return (
        <section>
            <div className="bmi-section-main md:h-[38rem] h-auto">
                <div className="bmi-section"></div> {/* Overlay */}
                <div className="relative z-10 flex flex-col-reverse  md:flex-row gap-9">
                    <div className="bmi-section-content">
                        <div className="bg-white p-2  md:p-0 rounded-lg  w-full max-w-md">
                            <h1 className="text-2xl font-bold text-center mb-2">{t('calculate_bmi')}</h1>

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
                                                id="height"
                                                placeholder="CM"
                                                className="flex-1 border border-gray-300 p-3 rounded-md"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                            />
                                            <span className="p-3 bg-gray-100 border border-l-0 rounded-md">{t('cm')}</span>
                                        </div>
                                    </div>

                                    {/* Weight Input */}
                                    <div className="flex flex-col mb-6">
                                        <label htmlFor="weight" className="text-gray-600 font-medium mb-1">{t('wight')}</label>
                                        <div className="flex">
                                            <input
                                                type="number"
                                                id="weight"
                                                placeholder="KG"
                                                className="flex-1 border border-gray-300 p-3 rounded-md"
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                            />
                                            <span className="p-3 bg-gray-100 border border-l-0 rounded-md">{t('kg')}</span>
                                        </div>
                                    </div>

                                    {/* Calculate Button */}
                                    <button
                                        onClick={calculateBMI}
                                        className="w-full bg-primary font-bold text-white py-3 rounded-md"
                                    >
                                        {t('calculate_bmi')}
                                    </button>
                                </div>
                            </div>

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

                    {/* Right Section - Form */}
                    <div className="p-4 md:p-2 py-6 mt-6 w-auto md:w-[35rem] align-middle h-96 z-10 rounded-lg shadow-lg text-primary">
                        <div className="">
                            <h2 className="text-lg text-center text-white md:text-center family-default font-semibold md:font-semibold mb-6">{t('contact_form')}</h2>
                            <h3 className="mb-6 family-default text-center text-white md:text-center">+90 538 490 9302</h3>

                            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder={t('name_surname')}
                                        className="w-full p-3 rounded-lg bg-white text-black"
                                        {...register('name', { required: t('name_required') })}
                                    />
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                </div>

                                <div className="text-black">
                                    <PhoneInput
                                        inputStyle={{ width: '100%', height: '50px', color: '#000000' }}
                                        country={'tr'}
                                        value={watch('phone', '')?.phone ?? ""}
                                        onChange={(value, country) => handlePhoneChange(value, country)} // Update form value and trigger validation
                                        placeholder="Phone"
                                        className="w-full rounded-lg"
                                    />

                                    <input
                                        type="hidden"
                                        {...register('phone', { required: t('phone_required') })}
                                    />
                                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder={t('mail_opt')}
                                        className="w-full p-3 rounded-lg bg-white text-black"
                                        {...register('email')} // Optional field, no validation needed
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>

                                <button
                                    disabled={disabled}
                                    type="submit"
                                    className={`rounded w-full bg-text text-center flex flex-row justify-center items-center ${disabled ? 'disabled-btn' : "custom-btn"}`}
                                >
                                    {disabled ? <>
                                        <Image src="/images/nova/send.svg" width={30} height={30} alt="" loading="lazy" />...
                                    </> : t('schedule_free_consul')}


                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BmiSection;
