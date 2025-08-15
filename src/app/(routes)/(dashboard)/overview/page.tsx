'use client';
import DynamicNav, { StateObject } from '@/app/_components/common/DetailNav';
import { IoMdCheckmark } from 'react-icons/io';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronRight, FaRegHeart } from 'react-icons/fa6';
// import { IoCartOutline } from 'react-icons/io5';
import { LuWallet } from 'react-icons/lu';
import { FiPlusCircle } from 'react-icons/fi';
import { GoShieldCheck } from 'react-icons/go';
import AddCardModal from '@/app/_components/modals/addCardModal';
import { EditPasswordModal } from '@/app/_components/modals/edit-passwordModal';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { LogoutModal } from '@/app/_components/modals/logoutModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

type DetailState = 'info' | 'payment' | 'security';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditPasswordOpen, setIsEditPasswordOpen] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] =
    useState(true);
  const [detailState, setDetailState] = useState<
    'info' | 'payment' | 'security'
  >('info');
  const NavItems = [
    { name: 'Saved', href: 'saved-items', icon: FaRegHeart },
    { name: 'History', href: 'history', icon: LuWallet },
  ];
  const dynamicStates: StateObject[] = [
    { state: 'info', label: 'Personal Info', id: 1 },
    { state: 'payment', label: 'Payment', id: 2 },
    { state: 'security', label: 'Security', id: 3 },
  ];

  const handleStateChange = (state: DetailState) => {
    setDetailState(state);
  };

  interface Card {
    bank: string;
    cvv: string;
    cardNumber: string;
    expDate: string;
  }

  const handleAddCard = (card: Card) => {
    console.log('New card added:', card);
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const res = await axios.post('/api/auth/logout');
      if (res.status === 200) {
        toast.success('Logout successful');
        Cookies.remove('buyer_token');
        router.push('/login');
      } else {
        toast.error('logout failed. pls try again');
        console.error('Logout failed:', res.data);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLogoutModalOpen(false);
      setIsLoggingOut(false);
    }
  };
  return (
    <div className=" space-y-5 w-full ">
      <div className="bg-white  flex flex-col items-center   py-5 space-y-4">
        <div className="flex flex-col border-b border-gray-200 pb-3 items-center justify-center w-full space-y-1">
          <Image
            alt="profile photo"
            src="/admin/profile.png"
            width={72}
            height={72}
            className="rounded-full object-contain"
          />
          <h1>Rosemary Sunday</h1>
        </div>

        <nav className="flex px-10 items-center justify-between w-[50%]">
          {NavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.name}
                className="flex flex-col gap-1  items-center cursor-pointer hover:text-primaryOrange transition-colors duration-300"
              >
                <div className="bg-[#FFEFE6] p-3 rounded-full">
                  {' '}
                  <Icon className="w-6 h-6 text-[#B44500] hover:text-primaryOrange" />
                </div>

                <span className="text-xs">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <AddCardModal
        onAddCard={handleAddCard}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <main>
        <div className="bg-white py-10 h-full">
          <div className="px-5">
            <DynamicNav
              states={dynamicStates}
              onStateChange={handleStateChange}
              textColor="text-[#141695]"
              borderColor="border-[#141695]"
              initialState={detailState}
            />
          </div>
          {detailState === 'info' ? (
            <section className="space-y-5 p-6 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                  <p className="text-[#5C4D58] text-xs">First Name:</p>
                  <p className="font-semibold text-[#150A13]">Rosemary</p>
                </div>

                <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                  <p className="text-[#5C4D58] text-xs">Last Name:</p>
                  <p className="font-semibold text-[#150A13]">Sunday</p>
                </div>
              </div>

              <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                <p className="text-[#5C4D58] text-xs">Email:</p>
                <p className="font-semibold text-[#150A13]">
                  rosiesunday20.aj@gmail.com
                </p>
              </div>

              <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                <p className="text-[#5C4D58] text-xs">Phone:</p>
                <p className="font-semibold text-[#150A13] ">08023456788</p>
              </div>
            </section>
          ) : detailState === 'payment' ? (
            <section className="p-5">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#F0F0F0] rounded-lg mb-1 w-full md:w-[400px] h-[200px] flex items-center gap-2 justify-center"
              >
                <FiPlusCircle size={18} /> Add new card
              </button>
              <p className="text-secondaryTextColor">
                No cards saved. Add one to get started
              </p>

              <div className="mt-5 space-y-2">
                <p className="flex items-center gap-2">
                  <GoShieldCheck size={20} className="text-[#A3A3B3]" />
                  <span className="text-darkBlue font-semibold">
                    Distress sale protects your payment information
                  </span>
                </p>
                <div>
                  <p className="flex items-center gap-2">
                    <IoMdCheckmark className="text-green-500" />
                    <span className="text-secondaryTextColor">
                      We follow the Payment Card Industry Data Security Standard
                      (PCI DSS) when handing card data
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <IoMdCheckmark className="text-green-500" />
                    <span className="text-secondaryTextColor">
                      All information remains secure and uncompromised
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <IoMdCheckmark className="text-green-500" />
                    <span className="text-secondaryTextColor">
                      All data is encrypted
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <IoMdCheckmark className="text-green-500" />
                    <span className="text-secondaryTextColor">
                      Your card information will never be mishandled or sold
                    </span>
                  </p>
                </div>
              </div>
            </section>
          ) : (
            <section className="p-5 flex flex-col space-y-5 items-start">
              <div className="flex items-center justify-between w-full pr-3">
                <p className="text-secondaryTextColor">Enable 2FA</p>

                <button
                  onClick={() => setIsTwoFactorEnabled(!isTwoFactorEnabled)}
                >
                  {isTwoFactorEnabled ? (
                    <BsToggleOn className="text-primaryOrange" size={26} />
                  ) : (
                    <BsToggleOff size={26} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between w-full pr-3">
                <p className="text-secondaryTextColor">
                  Enable email notifications
                </p>
                <button
                  onClick={() =>
                    setEmailNotificationsEnabled(!emailNotificationsEnabled)
                  }
                >
                  {emailNotificationsEnabled ? (
                    <BsToggleOn className="text-primaryOrange" size={26} />
                  ) : (
                    <BsToggleOff size={26} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between w-full pr-3">
                <p className="text-secondaryTextColor">Change Password</p>

                <button
                  onClick={() => setIsEditPasswordOpen(true)}
                  className="flex items-center gap-2 text-secondaryTextColor hover:underline"
                >
                  <p>*******</p>
                  <FaChevronRight className="text-black" />
                </button>
              </div>

              <EditPasswordModal
                isOpen={isEditPasswordOpen}
                onClose={() => setIsEditPasswordOpen(false)}
              />
            </section>
          )}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="text-red-500"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            Logout
          </button>
        </div>
        <LogoutModal
          isOpen={isLogoutModalOpen}
          onClose={() => setIsLogoutModalOpen(false)}
          onConfirm={handleLogout}
          isLoggingOut={isLoggingOut}
        />
      </main>
    </div>
  );
}
