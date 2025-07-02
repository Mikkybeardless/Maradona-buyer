import Breadcrumb from '@/app/_components/breadcrumb';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <main className="w-full product-details h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <div className="ml-5 md:ml-20 mt-5">
        <Breadcrumb />
      </div>
      {children}
    </main>
  );
}
