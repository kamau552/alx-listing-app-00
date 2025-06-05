import '@/styles/globals.css' 
<<<<<<< HEAD
import React from 'react';
import Header from "@/components/layout/Header";
import Hero from '../components/layout/Hero';
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";


export default function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        <Nav />
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="all">
          <div className="main_page-container">
            <div className="filters"></div>
          </div>
        </div>
      </main>
      <Footer />
=======
import { Nunito } from 'next/font/google';
import Header from "@/components/layout/Header";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen ${nunito.variable}`}>
      <Header />
      <main className="pt-4">{children}</main>
>>>>>>> be3e7638178049007babb2ab895a6faf38ec3c31
    </div>
  );
}
