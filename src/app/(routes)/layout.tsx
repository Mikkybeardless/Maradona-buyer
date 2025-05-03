interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
        {/* <NavSection /> */}
        {children}
      </body>
    </html>
  );
}
