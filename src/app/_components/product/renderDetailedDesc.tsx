import Image from 'next/image';
import { RiErrorWarningLine } from 'react-icons/ri';

export const RenderDetailedDesc = ({
  product,
  productId,
}: {
  product: ProductDetails;
  productId: number;
}) => {
  return (
    <>
      {product.type === 'CAR' ? (
        <>
          {/* left */}
          <div className="w-full md:w-[40%] space-y-3">
            <p>
              <span className="text-darkBlue font-semibold">
                Product ID: {productId}
              </span>
            </p>
            <p className="flex gap-1">
              <RiErrorWarningLine />
              <span className="text-secondaryTextColor">
                Seller assumes all responsibility for this listing.
              </span>
            </p>

            <div>
              <h4 className="text-darkBlue font-semibold text-xl">
                Car Details
              </h4>
              <ul>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Body Type:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Car).body_type}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Engine Type:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Car).engine_type}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Gear Type:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Car).gear_type}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Transmission:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Car).transmission}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">Mileage:</span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Car).mileage}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-[60%]">
            <p className="flex gap-1">
              <span> Transmission </span>

              <span className="text-darkBlue font-bold">
                {' '}
                {(product as Car).transmission}
              </span>
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="border md:p-4 p-2 rounded-lg text-sm md:text-base flex flex-col border-[#F0F0F0]">
                <Image
                  src="/product/engine.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Engine power</p>
                <p>
                  <span className="text-darkBlue">49,067 Hp</span>
                </p>
              </div>
              <div className="border md:p-4 p-2 rounded-lg text-sm md:text-base flex flex-col border-[#F0F0F0]">
                <Image
                  src="/product/mileage.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Mileage</p>
                <p>
                  <span className="text-darkBlue">
                    {' '}
                    {(product as Car).mileage}
                  </span>
                </p>
              </div>
              <div className="border md:p-4 p-2 rounded-lg flex flex-col text-sm md:text-base border-[#F0F0F0]">
                <Image
                  src="/product/acceleration.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Gear Type</p>
                <p>
                  <span className="text-darkBlue">
                    {' '}
                    {(product as Car).gear_type}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : product.type === 'LAND' ? (
        <>
          {/* left */}
          <div className="w-full md:w-[40%] space-y-3">
            <p>
              <span className="text-darkBlue font-semibold">
                Product ID: {productId}
              </span>
            </p>
            <p className="flex gap-1">
              <RiErrorWarningLine />
              <span className="text-secondaryTextColor">
                Seller assumes all responsibility for this listing.
              </span>
            </p>

            <div>
              <h4 className="text-darkBlue font-semibold text-xl">
                Land Details
              </h4>
              <ul>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Land Type:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Land).land_type}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Land size:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Land).land_size}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Accesibility:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Land).accessibility}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Topography:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Land).topography}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">Fencing:</span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as Land).fencing}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="w-0 md:w-[60%]"></div>
        </>
      ) : (
        <>
          {/* left */}
          <div className="w-full md:w-[40%] space-y-3">
            <p>
              <span className="text-darkBlue font-semibold">
                Product ID: {productId}
              </span>
            </p>
            <p className="flex gap-1">
              <RiErrorWarningLine />
              <span className="text-secondaryTextColor">
                Seller assumes all responsibility for this listing.
              </span>
            </p>

            <div>
              <h4 className="text-darkBlue font-semibold text-xl">
                House Details
              </h4>
              <ul>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    House Type:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).house_type}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Number of Bedrooms:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).house_beds}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Accesibility:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).accessibility}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Topography:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).topography}
                  </span>
                </li>
                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">Fencing:</span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).fencing}
                  </span>
                </li>

                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    House Size:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).house_size}
                  </span>
                </li>

                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    Furnishing:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).house_furnished}
                  </span>
                </li>

                <li className="flex justify-between items-center my-2">
                  <span className="text-secondaryTextColor w-24">
                    House condition:
                  </span>
                  <span className={` font-bold capitalize text-darkBlue`}>
                    {(product as House).house_condition}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className="w-0 md:w-[60%]">
            {/* <p className="flex gap-1">
              <span> Transmission </span>

              <span className="text-darkBlue font-bold">Manual</span>
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="border md:p-4 p-2 rounded-lg text-sm md:text-base flex flex-col border-[#F0F0F0]">
                <Image
                  src="/product/engine.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Engine power</p>
                <p>
                  <span className="text-darkBlue">49,067 Hp</span>
                </p>
              </div>
              <div className="border md:p-4 p-2 rounded-lg text-sm md:text-base flex flex-col border-[#F0F0F0]">
                <Image
                  src="/product/mileage.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Mileage</p>
                <p>
                  <span className="text-darkBlue">49,067 miles</span>
                </p>
              </div>
              <div className="border md:p-4 p-2 rounded-lg flex flex-col text-sm md:text-base border-[#F0F0F0]">
                <Image
                  src="/product/acceleration.png"
                  width={73}
                  height={48}
                  className="object-contain mb-4"
                  alt="part rating image"
                />
                <p>Acceleration</p>
                <p>
                  <span className="text-darkBlue">120 km/h</span>
                </p>
              </div>
            </div> */}
          </div>
        </>
      )}
    </>
  );
};
