'use client';

import { useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Image from 'next/image';
import { StarRating } from '../common/starRating';

export const ReviewModal = ({
  btnText,
  btnColor,
}: {
  btnText: string;
  btnColor?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [review, setReview] = useState('');

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setReview(value);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform validation and any other logic here

    console.log('review:', review);
    // Perform any further actions with the card details here
  };

  const handleCancel = () => {
    setReview('');
    setIsModalOpen(false);
  };

  const handleRatingChange = (index: number) => {
    console.log('Selected rating:', index);
  };

  return (
    <div>
      <button
        type="button"
        className={` mt-10 ${
          btnColor
            ? btnColor
            : 'border-primaryOrange border  hover:bg-primaryOrange text-primaryOrange hover:text-white'
        }   w-full rounded-lg px-2 py-2`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {btnText}
      </button>
      <ModalWrapper
        modalWidth="md:w-[50%]  w-[90%]  my-5"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <div className="w-full p-4 bg-white rounded-lg  flex flex-col gap-2">
          <button
            className="absolute hover:bg-gray-100   top-4 right-4 rounded-full p-2 "
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-2xl font-bold text-center">
            How was the Purchase?
          </h2>
          <hr />

          <div className="flex flex-col  justify-center items-center">
            {/* image */}
            <div className="relative w-full h-40 md:w-[250px]  md:h-[160px]">
              <Image
                className="w-full h-full object-contain"
                src="/categories/car.png"
                alt="product image"
                fill
              />
            </div>
            <p className="text-xl font-semibold">Toyota Camery</p>
            <p className="text-secondaryTextColor mb-2">
              Order ID: Distresssale23456
            </p>
            <p className="text-[#00A800]">Delivered - Mar 16, 2024</p>
            <StarRating ratedIndex={handleRatingChange} />
          </div>

          {/* Card inputs form*/}
          <form className="flex flex-col gap-1">
            <label htmlFor="review">Tell us about your experience</label>
            <textarea
              id="review"
              value={review}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 h-[151px] resize-none"
              placeholder="Write your review here..."
            ></textarea>

            <div className="flex justify-between w-full  mt-3">
              <button
                onClick={handleCancel}
                className="bg-gray-200  font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                Clancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(
                    e as unknown as React.FormEvent<HTMLFormElement>
                  );
                }}
                className="bg-primaryOrange text-white py-2 rounded-lg px-4"
              >
                Publish Review
              </button>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </div>
  );
};
