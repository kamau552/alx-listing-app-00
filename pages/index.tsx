import '@/styles/globals.css' 
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
    </div>
  );
}
