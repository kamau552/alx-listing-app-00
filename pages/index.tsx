import '@/styles/globals.css' 
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
    </div>
  );
}
