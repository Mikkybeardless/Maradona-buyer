"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BookUser, LogOut, Menu, X } from "lucide-react";

import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ContactsIcon from "@mui/icons-material/Contacts";
import GradeIcon from "@mui/icons-material/Grade";
import { useWindowResizer } from "@/app/hooks/useWindowResize";

interface SidebarPropsType {
  onSidebarHoverChange?: (isHovered: boolean) => void;
}

export default function Sidebar({ onSidebarHoverChange }: SidebarPropsType) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { windowWidth } = useWindowResizer();

  const siderbarItems = [
    { title: "My Profile", icon: FaRegUser, href: "/profile" },
    { title: "Orders", icon: LocalMallIcon, href: "/orders" },
    { title: "Addresses", icon: ContactsIcon, href: "/addresses" },
    { title: "Wallet", icon: AccountBalanceWalletIcon, href: "/wallet" },
    { title: "Pending Reviews", icon: GradeIcon, href: "/pending-reviews" },
    {
      title: "Resently viewed",
      icon: BookUser,
      href: "/recently-viewed",
    },
    { title: "Saved Items", icon: FaRegHeart, href: "/saved" },
  ];

  useEffect(() => {
    menuRefs.current = new Array(siderbarItems.length + 2).fill(null);
  }, []);

  // useEffect(() => {
  //   const checkIfMobile = () => {
  //     windowWidth < 768 && setIsSidebarHovered(true);
  //   };

  //   checkIfMobile();
  //   window.addEventListener("resize", checkIfMobile);

  //   return () => {
  //     window.removeEventListener("resize", checkIfMobile);
  //   };
  // }, [windowWidth]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    index: number
  ) => {
    const keys = ["ArrowDown", "ArrowUp", "Enter"];
    if (!keys.includes(event.key)) return;

    const maxIndex = siderbarItems.length + 2;

    if (event.key === "Enter") {
      event.currentTarget.click();
      return;
    }

    event.preventDefault();
    const nextIndex =
      event.key === "ArrowDown"
        ? (index + 1) % maxIndex
        : (index - 1 + maxIndex) % maxIndex;

    const nextElement = menuRefs.current[nextIndex];
    if (nextElement) {
      nextElement.focus();
    }
  };

  const getItemStyles = (
    isActive: boolean,
    isLinkHovered: boolean,
    isSidebarVisible: boolean
  ) => {
    return `
      ${
        isActive || isLinkHovered
          ? "text-defaultBlue"
          : "text-secondaryTextColor hover:text-[#7065F0]"
      } 
    
      my-5 flex items-center font-medium text-[1.125rem] px-4 py-3 w-full transition-colors duration-200 
    `;
  };

  const handleLogout = async () => {
    console.log("Logout button clicked");
    // try {
    //   const userConfirmed = confirm('Do you want to logout?');

    //   if (userConfirmed) {
    //     const response = await fetch('/api/logout', { method: 'GET' });

    //     if (response.ok) {
    //       toast.success('You have logged out successfully.');
    //       router.push('/');
    //     } else {
    //       const data = await response.json();
    //       console.error('Logout failed:', data.message);
    //       toast.error('Failed to log out. Please try again.');
    //     }
    //   }
    // } catch (error) {
    //   console.error('Error logging out:', error);
    //   toast.error('Something went wrong. Please try again.');
    // }
  };

  const handleMouseEnter = () => {
    if (windowWidth >= 1024) {
      setIsSidebarHovered(true);
      onSidebarHoverChange?.(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 1024) {
      setIsSidebarHovered(false);
      onSidebarHoverChange?.(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed lg:sticky top-0 z-20 h-screen bg-[#F2F2F2] border-r shadow-md
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? "left-0" : "-left-full"}
          lg:left-0
          ${isMobileMenuOpen || isSidebarHovered ? "w-60" : "w-16"}
          flex flex-col overflow-y-auto custom-scrollbar`}
        role="navigation"
        aria-label="Main Sidebar"
      >
        {/* Close Button */}
        <button
          className="md:hidden absolute top-4 right-4 z-50 p-2 rounded-md bg-[#F2F2F2]  shadow-md"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <X className="size-6" />
        </button>

        {/* Logo Section */}
        <div
          className={`${
            isSidebarHovered || isMobileMenuOpen ? "pl-8" : "pl-5"
          } sticky top-0 w-full flex items-center bg-[#F2F2F2]  py-12 z-40`}
        >
          <div className="w-fit">
            <div className="flex justify-between">
              <Link href="/" aria-label="Go to homepage">
                {isSidebarHovered || isMobileMenuOpen ? (
                  <Image
                    src="/home/logo.svg"
                    width={150}
                    height={30}
                    alt="Distress Sales Logo"
                  />
                ) : (
                  <Image
                    src="/home/logo.svg"
                    width={30}
                    height={30}
                    alt="Distress Sales Logo"
                  />
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="w-full flex-1">
          <ul role="menu">
            {siderbarItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(`/admin${item.href}`);
              const isLinkHovered = hoveredItem === index;
              const isSidebarVisible =
                isMobileMenuOpen || windowWidth < 1024 || isSidebarHovered;

              return (
                <li key={item.title} role="menuitem">
                  <Link
                    href={`/admin${item.href}`}
                    className={getItemStyles(
                      isActive,
                      isLinkHovered,
                      isSidebarVisible
                    )}
                    aria-label={`Navigate to ${item.title}`}
                    aria-current={isActive ? "page" : undefined}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    ref={(el) => {
                      menuRefs.current[index] = el;
                    }}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  >
                    <div className="w-10">
                      <Icon className="size-6" />
                    </div>
                    <span
                      className={`capitalize whitespace-nowrap overflow-hidden transition-all duration-300 ${
                        isSidebarVisible
                          ? "w-auto opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Logout Button */}
          <div className="mt-2">
            <button
              //   variant="ghost"
              className={`text-red-500 hover:bg-red-50 my-5 flex items-center font-medium text-[1.125rem] px-4 py-3 w-fit transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-1`}
              aria-label="Logout"
              onClick={handleLogout}
              ref={(el) => {
                if (el) {
                  menuRefs.current[siderbarItems.length + 1] =
                    el as unknown as HTMLAnchorElement;
                }
              }}
              onKeyDown={(e) => handleKeyDown(e, siderbarItems.length + 1)}
            >
              <div className="w-10">
                <LogOut className="size-6" />
              </div>
              <span
                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${
                  windowWidth < 1024 || isSidebarHovered
                    ? "w-auto opacity-100"
                    : "w-0 opacity-0"
                }`}
              >
                Logout
              </span>
            </button>
          </div>
        </nav>
      </aside>

      {!isMobileMenuOpen && (
        <button
          // variant="ghost"
          className="md:hidden fixed top-4 left-1 z-20 p-2 border !size-10 rounded-md bg-[#F2F2F2]  shadow-md"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label={"Open menu"}
        >
          <Menu className="!size-6" />
        </button>
      )}
    </>
  );
}
