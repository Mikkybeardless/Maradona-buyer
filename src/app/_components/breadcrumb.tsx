'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive: boolean;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  //match numeric IDs and UUID patterns
  const pathSegments = pathname.split('/').filter(
    (segment) =>
      segment &&
      !/^\d+(\[.+\])?$/.test(segment) && // Numeric IDs
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        segment
      ) // UUIDs
  );

  const breadcrumbs: BreadcrumbItem[] = [
    // { label: 'Auction Deals', href: '/', isActive: pathname === '/' },
    ...pathSegments.map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
      return {
        label: decodeURIComponent(segment.replace(/-/g, ' ')),
        href,
        isActive: pathname.startsWith(href),
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full flex space-x-px text-sm text-[#000929]"
    >
      {breadcrumbs.map((breadcrumb, index) => (
        <div
          key={breadcrumb.href}
          className={`
            flex items-center capitalize
          `}
        >
          {index !== 0 && (
            <ArrowForwardIosSharpIcon
              sx={{ fontSize: '14px' }}
              className="mx-2"
            />
          )}
          {breadcrumb.isActive ? (
            <span className="text-[#000929] font-bold">
              {breadcrumb.label === 'cart'
                ? 'my cart'
                : breadcrumb.label === 'saved'
                  ? 'saved items'
                  : breadcrumb.label}
            </span>
          ) : (
            <Link
              href={breadcrumb.href}
              className="hover:text-[#000929] transition-colors"
            >
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
