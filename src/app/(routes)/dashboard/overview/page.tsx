'use client';
import DynamicNav, { StateObject } from '@/app/_components/common/DetailNav';
// import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronRight, FaRegHeart } from 'react-icons/fa6';
import { LuWallet } from 'react-icons/lu';
import AddCardModal from '@/app/_components/modals/addCardModal';
import { EditPasswordModal } from '@/app/_components/modals/edit-passwordModal';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { LogoutModal } from '@/app/_components/modals/logoutModal';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { NoItem } from '@/app/_components/common/no-item';
import { fetchFn } from '@/app/api/fetchFn';
import { formatIsoString } from '@/app/Utils/util';
import { DetailLoadingState } from '@/app/_components/common/detailsLoading';
import { ErrorComponent } from '@/app/_components/common/error';
import ProfilePictureUpload from '@/app/_components/ProfilePictureUpload';
import { persistor } from '@/app/redux/store';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/redux/slices/authSlice';
type DetailState = 'info' | 'payment' | 'security';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditPasswordOpen, setIsEditPasswordOpen] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
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
    { state: 'security', label: 'Security', id: 3 },
  ];
  const [isUpdatingPic, setIsUpdatingPic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
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
  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchFn('/api/auth/profile');
      setProfile(response.data.data);
      // const active =
      //   response.data.data.profile.availability === 'available';
      // setIsActive(active);
    } catch (error) {
      console.error('profile fetch error:', error);
      setError('Failed to load profile. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const res = await axios.post('/api/auth/logout');
      if (res.status === 200) {
        dispatch(logout());
        await persistor.purge();
        toast.success('Logout successful');
        router.push('/login');
      }
    } catch (error) {
      toast.error('logout failed. pls try again');
      console.error('Logout failed:', error);
    } finally {
      setIsLogoutModalOpen(false);
      setIsLoggingOut(false);
    }
  };
  return isLoading ? (
    <DetailLoadingState />
  ) : error ? (
    <ErrorComponent
      refetchFn={fetchProfile}
      error={error}
      message="Error loading user profile"
    />
  ) : (
    <div className=" space-y-5 w-full ">
      <div className="bg-white  flex flex-col items-center   py-5 space-y-4">
        <div className="flex flex-col border-b border-gray-200 pb-3 items-center justify-center w-full space-y-1">
          {/* <Image
            alt="profile photo"
            src={
              profile.profile.profile_pic_url ||
              `/no_images/default-profile.png`
            }
            width={72}
            height={72}
            className="rounded-full object-contain"
          /> */}
          <div
            className={`rounded-full  ${
              isUpdatingPic ? 'animate-pulse' : ''
            } border-[4px] w-fit`}
          >
            <ProfilePictureUpload
              onUpdating={setIsUpdatingPic}
              // apiImage={'/no_images/default-profile.png'}
            />
          </div>
          <h1>{profile?.user.name}</h1>
        </div>

        <section
          id="nav-items"
          className="flex  items-center justify-between w-[50%]"
        >
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
        </section>
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
                  <p className="text-[#5C4D58] text-xs">Name:</p>
                  <p className="font-semibold text-[#150A13]">
                    {profile?.user.name}
                  </p>
                </div>
              </div>

              <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                <p className="text-[#5C4D58] text-xs">Email:</p>
                <p className="font-semibold text-[#150A13]">
                  {profile?.user.email}
                </p>
              </div>

              <div className=" bg-[#F7F7F7] px-5 py-2 space-y-2 w-full">
                <p className="text-[#5C4D58] text-xs">Date Joined:</p>
                <p className="font-semibold text-[#150A13]">
                  {formatIsoString(profile?.user.created_at).formattedDate}
                </p>
              </div>
            </section>
          ) : detailState === 'payment' ? (
            <section>
              <NoItem text="No Payments Available" />
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
