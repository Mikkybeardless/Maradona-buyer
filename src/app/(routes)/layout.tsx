import NavSection from "../_components/home/NavSection";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
        {/* <NavSection /> */}
        {children}
      </body>
    </html>
  );
}
