import Breadcrumb from '@/app/_components/breadcrumb';
import { NavBar } from '@/app/_components/NavBar';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      {/* <NavBar /> */}
      <NavBar />
      <div className="ml-5 md:ml-20 mt-5">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
}
