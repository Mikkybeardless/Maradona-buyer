import { ProfileNav } from "@/app/_components/admin/profileNav";

export default function Layout({ children }) {
  return (
    <div className="flex md:flex-row flex-col gap-5 md:gap-10">
      <ProfileNav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
