import Breadcrumb from "@/app/_components/breadcrumb";
import NavSection from "@/app/_components/home/NavSection";

export default function Layout({ children }) {
  return (
    <div className="w-full product-details h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      {/* <NavBar /> */}
      <NavSection />
      <div className="ml-5 md:ml-20 mt-5">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
}
