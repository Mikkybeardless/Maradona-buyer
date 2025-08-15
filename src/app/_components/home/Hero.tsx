import { IoFilterOutline } from 'react-icons/io5';
import ImageCarousel from './Carousel';
interface HeroProps {
  setHomeState?: (state: HomeState) => void;
  homeState?: HomeState;
}

type HomeState = 'distress' | 'houses' | 'cars' | 'lands';
export default function HeroSection({ setHomeState, homeState }: HeroProps) {
  const handleStateChange = (state: HomeState) => {
    if (setHomeState) {
      setHomeState(state);
    }
  };
  return (
    <section className=" relative w-full flex flex-col items-center mt-[55px] md:mt-0 px-4 sm:px-[5%] ">
      <nav className="flex justify-between items-center w-full py-4 mb-2 md:mb-5">
        <div className="flex items-center justify-between md:justify-start w-full text-sm md:text-base gap-6">
          <button
            className={`${homeState === 'distress' && 'text-primaryOrange'} `}
            onClick={() => handleStateChange('distress')}
          >
            Distress deals
          </button>{' '}
          <button
            className={`${homeState === 'houses' && 'text-primaryOrange'}`}
            onClick={() => handleStateChange('houses')}
          >
            Houses
          </button>{' '}
          <button
            className={`${homeState === 'lands' && 'text-primaryOrange'}`}
            onClick={() => handleStateChange('lands')}
          >
            Lands
          </button>
          <button
            className={`${homeState === 'cars' && 'text-primaryOrange'}`}
            onClick={() => handleStateChange('cars')}
          >
            Cars
          </button>
        </div>
        <button className="md:flex hidden  items-center border-[#D0D5DD] border rounded-xl gap-2 px-4 py-2">
          <IoFilterOutline />
          Location
        </button>
      </nav>
      <hr />
      {homeState === 'distress' && <ImageCarousel />}
    </section>
  );
}
