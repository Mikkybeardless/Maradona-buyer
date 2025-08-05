import { repeatedComponents } from '../common/repeatComp';
import { ProductCard } from './cards/product';

export default function MoreForYou() {
  return (
    <section id="more-for-you" className="mt-20 ">
      <div className="flex items-center gap-3 px-4 sm:px-8 lg:px-[8%]">
        <h1 className="text-[20px] md:text-[32px] w-[200px] md:w-[20%] font-semibold  text-[#040421]">
          More For You
        </h1>

        <div className="w-[80%] h-[2px]  bg-[#DED9DD]" />
      </div>
      <div className="grid md:px-[5%] px-2 grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
        {repeatedComponents(
          4,
          <ProductCard
            productType="sale"
            imageUrl="/home/auction-house.png"
            title="2601 Apapa close, Lekki"
            isActive={false}
          />
        )}
        {repeatedComponents(
          4,
          <ProductCard
            productType="auction"
            imageUrl="/home/land/image1.png"
            title="50km2 land in Gwarimpa"
          />
        )}
        {repeatedComponents(
          4,
          <ProductCard
            productType="sale"
            imageUrl="/home/carshop.png"
            title="2020 Toyota Camry"
          />
        )}
      </div>
    </section>
  );
}
