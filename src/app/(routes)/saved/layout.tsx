import { NavBar } from "@/app/_components/NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
