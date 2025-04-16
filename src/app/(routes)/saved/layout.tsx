import Breadcrumb from "@/app/_components/breadcrumb";
import { NavBar } from "@/app/_components/NavBar";

export default function Layout({ children }) {
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
