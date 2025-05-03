import { ProfileNav } from '@/app/_components/admin/profileNav';
interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-10">
      <ProfileNav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
