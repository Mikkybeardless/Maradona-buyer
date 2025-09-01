import ImageCarousel from './Carousel';
interface HeroProps {
  setHomeState?: (state: HomeState) => void;
  homeState?: HomeState;
}

export default function HeroSection({ setHomeState, homeState }: HeroProps) {
  const handleStateChange = (state: HomeState) => {
    if (setHomeState) {
      setHomeState(state);
    }
  };

  const heroNavs = [
    { label: 'Distress deals', value: 'distress' },
    { label: 'Houses', value: 'HOUSE' },
    { label: 'Lands', value: 'LAND' },
    { label: 'Cars', value: 'CAR' },
  ];
  return (
    <section className=" relative w-full flex flex-col items-center mt-[55px] md:mt-0 px-4 sm:px-[5%] ">
      <nav className="flex justify-between items-center w-full py-4 mb-2 md:mb-5">
        <div className="flex items-center justify-between md:justify-start w-full text-sm md:text-base gap-6">
          {heroNavs.map((item, index) => (
            <button
              key={index}
              className={`${homeState === item.value && 'text-primaryOrange'} `}
              onClick={() => handleStateChange(item.value as HomeState)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <hr />
      {homeState === 'distress' && <ImageCarousel />}
    </section>
  );
}
