import React from "react";
import "@/styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Header />
      <Hero />
    
      <Footer />
    </div>
  );
};

export default Layout