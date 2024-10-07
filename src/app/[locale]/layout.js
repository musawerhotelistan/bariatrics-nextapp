import { NextIntlClientProvider } from 'next-intl';
import Head from 'next/head';

import { getMessages } from 'next-intl/server';
import './globals.css'; // Ensure no conflicting styles here
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  preload: true,
});

export const metadata = {
  title: 'Ceyhun Aydogan',
  description: 'Dr. Ceyhun Aydogan is an Advanced Bariatric Surgeon, specialized in the field of Obesity, Bariatric and Metabolic Surgery. To date, he has successfully performed more than 12000 procedures.',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}) {
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <Head>
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
        <link rel="icon" href="images/nova/cropped-adsiz-tasarim-32x32.webp" type='image/webp' sizes="32x32"></link>
        <link rel="icon" href="images/nova/cropped-adsiz-tasarim-192x192.webp" type='image/webp' sizes="192x192"></link>
        <link rel="icon" href="images/nova/cropped-adsiz-tasarim-180x180.webp" type='image/webp' sizes="180x180"></link>
        <meta name="msapplication-TileImage" content="images/nova/cropped-adsiz-tasarim-270x270.webp"></meta>
        {/* No need for Google Fonts link here as next/font handles it */}
      </Head>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
