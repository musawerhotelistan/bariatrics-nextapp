'use client';
import { handleClickConsul } from "@/app/utils/helpers";
import Image from "next/image";
import React from "react";
import WhatsappHeartButton from "./WhatsappHeartButton";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6" id="contact">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around space-y-4 md:space-y-0">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/images/nova/logo.webp" alt="Logo" width={250} height={90} loading="lazy" />

        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6 text-white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>

            <span className="text-[14px] font-normal">+90 (546) 559 42 85</span>
          </div>


          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[14px] font-normal">info@novavita.clinic</span>
          </div>

        </div>

        {/* Copyright */}
        <div>
          <p className="text-center  md:text-right text-[14px] font-normal">
            &copy; Copyright {new Date().getFullYear()} Nova Vita Clinic
          </p>
        </div>
        <div className="running-animation">
          <Image src="/images/nova/footer-bg.svg" width={200} height={300} alt="" loading="lazy"/>
        </div>
      </div>
      <WhatsappHeartButton /> 

      {/* <a className=" " onClick={()=>handleClickConsul()}>
      <div className="fixed bottom-0 right-0 mb-8 mr-4 h-16 w-16 bg-[#25D366]  rounded-full flex justify-center" style={{ zIndex: 1000 }}>
        <Image src="/images/nova/whatsapp.svg" width={40} height={40}/>
      </div>
      </a> */}
    </footer>
  );
};

export default Footer;
