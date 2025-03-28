import CategorySideBar from "@/app/_components/CategoriesSideBar";
import NavSection from "@/app/_components/home/NavSection";

export default function Layout({ children }) {
  return (
    <section className="w-full h-screen overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col bg-[#F7F7F7]">
      <NavSection />
      {/* Main content area */}
      <div className="flex justify-between w-full h-full px-4 md:px-[8%] py-4 gap-4">
        <div className=" mt-[5.5rem] basis-[25%]">
          <CategorySideBar />
        </div>
        <div>
          <div className="flex justify-between items-center p-4 my-4">
            <div className="flex gap-4">
              <p>Sort By</p>
              <p>Recommended</p>
              <p>Any Time</p>
            </div>
            <div className="flex gap-4">
              <span>1-100 of 1000</span>
              <span>logo1</span>
              <span>logo2</span>
            </div>
          </div>
          <main className="basis-[75%]">{children}</main>
        </div>
      </div>
    </section>
  );
}
