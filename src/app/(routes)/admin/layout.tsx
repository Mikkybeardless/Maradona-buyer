'use client';

import Sidebar from '@/app/_components/admin/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegBell, FaRegHeart, FaRegUser } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <div className="flex bg-[#F2F2F2]">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <header className=" py-6 border-b w-full flex items-center justify-end  pr-5 md:pr-32">
          {pathname.startsWith('/admin/profile') ? (
            <div className="flex items-center gap-4">
              <Link href="/notification">
                <FaRegBell className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
              </Link>
              {/* <Link href="/profile"> */}
              <Image
                src="/admin/profile.png"
                className="rounded-full object-contain"
                alt="profile picture"
                width={30}
                height={30}
              />
              {/* </Link> */}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/admin/profile">
                <FaRegUser className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
              </Link>
              <Link href="/saved">
                <FaRegHeart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
              </Link>
              <Link href="/cart">
                <GrCart className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-defaultOrange" />
              </Link>
            </div>
          )}
        </header>
        {/* Main content */}
        <main className="flex-1 p-4 md:px-20 md:py-10">{children}</main>
      </div>
    </div>
  );
}
