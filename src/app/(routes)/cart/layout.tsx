import Breadcrumb from '@/app/_components/breadcrumb';
import { NavBar } from '@/app/_components/NavBar';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavBar />
      <div className="ml-5 md:ml-20 mt-5">
        <Breadcrumb />
      </div>
      {children}
    </div>
  );
}
