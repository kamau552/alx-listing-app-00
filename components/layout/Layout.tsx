import React from "react";
import "@/styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";
<<<<<<< HEAD
import Hero from "./Hero";

=======
>>>>>>> be3e7638178049007babb2ab895a6faf38ec3c31

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
<<<<<<< HEAD
      <main className="flex-grow">{children}</main>
      <Header />
      <Hero />
    
      <Footer />
    </div>
  );
};
=======
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
>>>>>>> be3e7638178049007babb2ab895a6faf38ec3c31

export default Layout