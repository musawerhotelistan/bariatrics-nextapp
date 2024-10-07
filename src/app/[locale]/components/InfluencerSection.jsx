"use client";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
const ba1 = 'https://www.youtube.com/embed/L9EemlygK_w';
const ba2 = 'https://www.youtube.com/embed/9tbny3sl9go';
const ba3 = 'https://www.youtube.com/embed/lj4noCapeJs';

const InfluencerSection = () => {
  const t = useTranslations('common');
  const data = [ba1, ba2, ba3];

  return (
    <section className="py-5 md:pt-12 px-5 text-center" id="influncers">
      <h2 className="text-primary md:text-[34px] md:text-center text-center text-[24px] family-default font-semibold mb-6">{t('yt_nfluncers')}</h2>
      <div className="md:px-[25rem]">
        <div className="flex md:flex-row flex-col justify-center gap-5 my-5">
          {data.map((item, index) => (
            <div key={index} className='md:h-96 md:w-[56rem]'>
              <iframe
                className="w-full h-full rounded-lg"
                src={item}
                title="Dr. Serhan Derin"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;
