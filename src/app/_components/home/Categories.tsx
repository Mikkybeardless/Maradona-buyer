import Forclose from '../../_assets/images/categories/closure.png';
import Car from '../../_assets/images/categories/car.png';
import Bus from '../../_assets/images/categories/bus.png';
import brandNew from '../../_assets/images/categories/brand-new.png';
export default function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Foreclose',
      image: Forclose.src,
    },
    {
      id: 2,
      name: 'Brand New',
      image: brandNew.src,
    },
    {
      id: 3,
      name: 'Sport Cars',
      image: Car.src,
    },
    {
      id: 4,
      name: 'Mini Buses',
      image: Bus.src,
    },
    {
      id: 5,
      name: 'Second grade',
      image: Forclose.src,
    },
  ];

  return (
    <section className="flex flex-col gap-4 px-[3%] bg-[#E8E8F466]">
      <div className="flex w-full items-center">
        <div className="w-full bg-[#DED9DD] h-[2px]"></div>
        <h2 className="w-[300px]">Distress Category</h2>
        <div className="w-full bg-[#DED9DD] h-[2px]"></div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5  md:bg-inherit gap-1 md:gap-4 md:px-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white p-4 rounded-lg flex flex-col items-center shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-contain rounded"
            />
            <h3 className="text-xs md:text-lg font-semibold mt-2">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
