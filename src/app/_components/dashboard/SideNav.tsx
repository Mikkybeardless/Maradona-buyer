'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function DashboardSideNav() {
  const pathName = usePathname();
  const router = useRouter();
  const NavItems = [
    { name: 'Overview', href: 'overview' },
    { name: 'Transaction Histrory', href: 'history' },
    { name: 'Help Centre', href: 'help-centre' },
    // { name: 'Saved', href: 'saved-items' },
    // { name: 'Shipping Address', href: 'addresses' },
    { name: 'Analytics', href: 'analytics' },
    // { name: 'Pending Reviews', href: 'pending-reviews' },
    // { name: 'Recently Viewed', href: 'recently-viewed' },
  ];

  const isActiveClass = (href: string) => {
    const fullPath = `/${href}`;
    return pathName.startsWith(fullPath)
      ? 'border-l-4 border-[#B44500] bg-[#F7F7F7] pr-0  transition-colors duration-300'
      : 'hover:text-[#B44500] text-[#585858] transition-colors duration-300';
  };
  const handleLogOut = () => {
    router.push('/login');
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
            Log Out
          </button>
        </ul>
      </nav>
    </div>
  );
}
