'use client';
import { useState, useEffect, useRef } from 'react';
import { Home, User, Settings, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { FaRegCircle, FaRegUser } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { CiHeart, CiWallet } from 'react-icons/ci';
import { TbCurrentLocation, TbMessage2 } from 'react-icons/tb';

export default function MobileNav({
  menuItems = [
    { name: 'Bids & Orders', href: '/', icon: CiWallet },
    { name: 'Help Centre', href: '/help', icon: TbMessage2 },
    { name: 'Saved', href: '/saved', icon: CiHeart },
    { name: 'Track Shipment', href: '/track', icon: TbCurrentLocation },
  ],
  className = '',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linksWitOutIcons = [
    { name: 'Shipping Address', href: '/' },
    { name: 'Pending reviews', href: '/' },
    { name: 'Seller log in', href: '/' },
    { name: 'Return&refund policy', href: '/' },
    { name: 'Help Center', href: '/' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed   md:hidden left-0 z-30 w-full">
      <nav
        className={`relative bg-white border-b py-5 border-gray-200 shadow-sm ${className}`}
        ref={menuRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo  & harmburger button*/}
            <div className="flex gap-3 items-center">
              <button
                onClick={toggleMenu}
                className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-1.5'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-200 ease-in-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-1.5'
                    }`}
                  />
                </div>
              </button>
              <Link href="/">
                <img
                  className="h-[40px] w-auto "
                  src={`/home/logo.svg`}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href={'/overview'} className="flex gap-2 items-center">
                <FaRegUser size={30} />
              </Link>

              <Link href={'/cart'} className="flex gap-2 items-center">
                <GrCart size={30} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex mx-auto px-4 items-center gap-3">
          <div className="w-full bg-white py-1 px-2 rounded-lg">
            <SearchBox />
          </div>

          <button className="px-4 py-2.5 rounded-lg bg-primaryOrange text-white">
            <FaRegCircle size={18} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 z-40 transition-all duration-200 ease-in-out ${
            isOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="mx-4 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="py-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center px-4 py-3  hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 mr-3  group-hover:text-gray-500" />
                    )}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </div>
            <hr />

            <div className="space-y-2 flex flex-col px-4 py-3">
              {linksWitOutIcons.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Backdrop */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
            onClick={closeMenu}
          />
        )}
      </nav>
    </header>
  );
}
