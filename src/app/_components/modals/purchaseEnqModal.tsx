'use client';

import { useEffect, useState } from 'react';
import ModalWrapper from './modalWrapper';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Spinner } from '../common/spinner';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export const PurchaseEnqModal = ({
  productId,
  btnText,
  btnColor = 'bg-primaryOrange   text-white',
}: {
  productId: number;
  btnText: string;
  btnColor?: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setMessage(value);
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = Cookies.get('buyer_token');

      if (!token) {
        toast.error('You must be logged in to make an enquiry.');
        const actionData = {
          name: 'postLoginEnquiry',
          message,
        };
        Cookies.set(`${actionData.name}`, JSON.stringify(actionData));
        const currentPath = window.location.pathname + window.location.search;
        router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
        // handleRestrictedAction(actionData);
        return;
      }
      // Simulate an API call
      const response = await axios.post(`/api/purchase-enq/${productId}`, {
        message,
      });
      if (response.status == 200) {
        toast.success('Enquiry sent successfully');
        setMessage('');
        setIsModalOpen(false);
      }
    } catch (error) {
      toast.error('An unknown error occured, Please try again later');
      console.error('Error submitting enquiry:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setMessage('');
    setIsModalOpen(false);
  };

  useEffect(() => {
    const savedAction = Cookies.get('postLoginEnquiry');
    if (savedAction) {
      const actionData = JSON.parse(savedAction);
      // Handle the action data (e.g., pre-fill the form)
      setMessage(actionData.message);
      setIsModalOpen(true);
      Cookies.remove('postLoginEnquiry');
    }
  }, []);

  return (
    <div>
      <button
        type="button"
        className={` my-5 ${btnColor} hover:bg-[#d6621a]     w-full rounded-lg px-2 py-2`}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {btnText}
      </button>
      <ModalWrapper
        modalWidth="md:w-[50%]  w-[95%]  my-5"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        <div className="w-full p-3 md:p-4 bg-white rounded-lg  flex flex-col gap-2">
          <button
            className="absolute hover:bg-gray-100   top-4 right-4 rounded-full p-2 "
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
            <CloseRoundedIcon />
          </button>
          <h2 className="text-lg md:text-2xl font-bold text-center">
            What would you like to know?
          </h2>
          <hr />

          {/* Card inputs form*/}
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-2 h-[151px] resize-none"
              placeholder="Write your message here..."
            ></textarea>

            <div className="flex justify-between w-full  mt-3">
              <button
                onClick={handleCancel}
                className="bg-gray-200  font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-primaryOrange text-white py-2 rounded-lg px-4"
              >
                {loading ? <Spinner /> : 'Send Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </ModalWrapper>
    </div>
  );
};
