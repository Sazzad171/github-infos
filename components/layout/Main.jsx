import React from 'react';

// font
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

// components import
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header roboto={roboto} />
      <main className={`${roboto.variable} font-roboto min-h-[calc(100vh-124px)]`}>
        { children }
      </main>
      <Footer roboto={roboto} />
    </>
  )
}

export default MainLayout