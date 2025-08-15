import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Breadcrumb from '@/app/_components/breadcrumb';
import DashboardSideNav from '@/app/_components/dashboard/SideNav';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const token = cookies().get('buyer_token')?.value;

  if (!token) {
    redirect('/login');
  }

  return (
    <div className="flex   flex-col gap-4 md:gap-8 md:px-16  px-0">
      <main className="flex gap-10 relative ">
        <div className="fixed left-16 top-20 space-y-2 hidden md:block z-30">
          <Breadcrumb />
          <DashboardSideNav />
        </div>

        <div className="w-full md:pl-72 pl-0">
          <div className="pt-16 md:pt-7"> {children}</div>
        </div>
      </main>
    </div>
  );
}
