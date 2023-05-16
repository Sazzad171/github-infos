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
      <Header />
      <main className={`${roboto.variable}`}>
        { children }
      </main>
      <Footer />
    </>
  )
}

export default MainLayout