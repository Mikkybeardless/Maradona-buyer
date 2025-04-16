"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";

export const ProfileNav = () => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const profileItems = [
    { title: "Profile Information", icon: FaRegUser, href: "/admin/profile" },
    {
      title: "Payment Method",
      icon: AccountBalanceWalletIcon,
      href: "/admin/profile/payment-method",
    },
    { title: "Security", icon: LockIcon, href: "/admin/profile/security" },
    {
      title: "Document",
      icon: FolderSharedOutlinedIcon,
      href: "/admin/profile/documents",
    },
  ];

  useEffect(() => {
    menuRefs.current = new Array(profileItems.length + 2).fill(null);
  }, []);

  const getItemStyles = (isActive: boolean, isLinkHovered: boolean) => {
    return `
      ${
        isActive || isLinkHovered
          ? "text-defaultBlue"
          : "text-secondaryTextColor hover:text-[#7065F0]"
      } 
       
      my-5 flex items-center font-medium text-[1.125rem] px-4 py-3 w-full transition-colors duration-200 
    `;
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLAnchorElement | HTMLButtonElement>,
    index: number
  ) => {
    const keys = ["ArrowDown", "ArrowUp", "Enter"];
    if (!keys.includes(event.key)) return;

    const maxIndex = profileItems.length + 2;

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

  return (
    <div className=" w-full md:w-[284px] h-fit px-4 py-2 bg-white">
      <nav className="w-full flex-1">
        <ul role="menu">
          {profileItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isLinkHovered = hoveredItem === index;

            return (
              <li key={item.title} role="menuitem">
                <Link
                  href={`${item.href}`}
                  className={getItemStyles(isActive, isLinkHovered)}
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
                    className={`capitalize whitespace-nowrap overflow-hidden transition-all duration-300 ${"w-auto opacity-100"}`}
                  >
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
