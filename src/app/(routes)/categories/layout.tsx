import CategorySideBar from '@/app/_components/CategoriesSideBar';
import NavSection from '@/app/_components/home/NavSection';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwapVertSharpIcon from '@mui/icons-material/SwapVertSharp';
import { AuctionCard } from '@/app/_components/cards/auction';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <section className="">
      <NavSection />
      {/* Main content area */}
      <div className="flex justify-between w-full h-full px-4 md:px-[8%] py-4 gap-4">
        <div className=" mt-[5.5rem] basis-[25%]">
          <CategorySideBar />
        </div>
        <div>
          <div className="flex justify-between items-center p-4 my-4">
            <div className="flex gap-4">
              <p>Sort By: </p>
              <p className="cursor-pointer hover:text-defaultBlue">
                <SwapVertSharpIcon
                  sx={{ fontSize: '22px', color: '#E65800' }}
                />
                Recommended
              </p>
              <p className="cursor-pointer hover:text-defaultBlue">
                <AccessTimeIcon sx={{ fontSize: '22px', color: '#E65800' }} />{' '}
                Any Time
              </p>
            </div>
            {/* <div className="flex gap-4">
              <span>1-100 of 1000</span>
              <LanguageIcon sx={{ fontSize: "22px", color: "#E65800" }} />
              <span>logo2</span>
            </div> */}
            <AuctionCard />
          </div>
          <main className="basis-[75%]">{children}</main>
        </div>
      </div>
    </section>
  );
}
