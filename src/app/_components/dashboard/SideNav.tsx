'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function DashboardSideNav() {
  const pathName = usePathname();
  const [loggingOut, setIsLoggingOut] = useState(false);
  const router = useRouter();
  const NavItems = [
    { name: 'Overview', href: 'overview' },

    { name: 'Transaction History', href: 'history' },
    // { name: 'Help Centre', href: 'help-centre' },

    { name: 'Analytics', href: 'analytics' },
  ];

  const isActiveClass = (href: string) => {
    const fullPath = `/${href}`;
    return pathName.startsWith(fullPath)
      ? 'border-l-4 border-[#B44500] bg-[#F7F7F7] pr-0  transition-colors duration-300'
      : 'hover:text-[#B44500] text-[#585858] transition-colors duration-300';
  };
  const handleLogOut = async () => {
    try {
      setIsLoggingOut(true);
      const res = await axios.post('/api/auth/logout');
      if (res.status === 200) {
        toast.success('Logout successful');
        Cookies.remove('buyer_token');
        router.push('/login');
      }
    } catch (error) {
      toast.error('logout failed. pls try again');
      console.error('Logout failed:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  return (
    <div className="flex flex-col w-64 h-fit py-4   bg-white">
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-bold">Accounts</h1>
      </div>
      <nav className="flex-1 ">
        <ul className="space-y-2">
          {NavItems.map((item) => (
            <li key={item.name}>
              <Link
                href={`/${item.href}`}
                className={`block pl-4 py-2 ${isActiveClass(item.href)}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <button
            onClick={handleLogOut}
            className="block pl-4 py-2 hover:text-[#B44500] text-[#585858] transition-colors duration-300"
          >
            {loggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </ul>
      </nav>
    </div>
  );
}
