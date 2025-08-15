'use client';

import { usePathname } from 'next/navigation';
import Footer from '../_components/footer/Footer';
import NavSection from '../_components/home/NavSection';
import MobileNav from '../_components/MobileNav';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <div className="w-full h-full relative  flex flex-col  md:gap-10 bg-[#F7F7F7]">
      <MobileNav />
      <NavSection />
      <main className="overflow-y-auto mt-20 md:mt-10 overflow-x-hidden custom-scrollbar">
        {children}
      </main>
      {pathname !== '/login' && <Footer />}
    </div>
  );
}
