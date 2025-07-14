'use client';
import { Button, Drawer, MenuItem, Select } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegCircle, FaRegUser } from 'react-icons/fa6';
// import { GrCart } from 'react-icons/gr';
import SearchBox from '../SearchBox';
import { usePathname } from 'next/navigation';

export default function NavSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const path = usePathname();

  const handleSearch = () => {
    console.log('Search Query:', searchQuery);
  };
  return (
    <header>
      <nav className="hidden fixed left-0 z-30 md:flex justify-between items-center py-2 bg-white  w-full px-3 sm:px-4 md:px-[5%]">
        {/* Left side - Logo and Mobile Menu Button */}

        <Link href="/">
          <img
            className="h-[60px] w-auto hidden md:flex"
            src={`/home/logo.svg`}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Select
            defaultValue="all"
            variant="standard"
            disableUnderline
            className="ml-2 text-gray-600 rounded-lg px-3 py-1 bg-[#F0F0F0]"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Houses">Houses</MenuItem>
            <MenuItem value="Lands">Lands</MenuItem>
          </Select>
          <div className="w-64 bg-white py-1 px-2 rounded-lg">
            <SearchBox onSearch={setSearchQuery} />
          </div>

          {path !== '/search' ? (
            <Link
              href={`/search?query=${searchQuery}`}
              className="px-4 py-2.5 rounded-lg bg-primaryOrange text-white"
            >
              <FaRegCircle size={18} />
            </Link>
          ) : (
            <button
              onClick={handleSearch}
              className="px-4 py-2.5 rounded-lg bg-primaryOrange text-white"
            >
              <FaRegCircle size={18} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center">
            <Link href={'/overview'} className="flex gap-2 items-center">
              <FaRegUser size={30} />
            </Link>
            <div className="flex flex-col">
              <span>Welcome</span>
              <Link href={'/login'} className="text-darkBlue  font-bold">
                Signin / Register
              </Link>
            </div>
          </div>

          {/* <Link href={'/cart'} className="flex gap-2 items-center">
            <GrCart size={30} />
            <div className="flex flex-col items-center">
              <span className="bg-[#6A2900] rounded-2xl px-5 text-white py-1">
                0
              </span>
              <span className="text-darkBlue font-bold">Cart</span>
            </div>
          </Link> */}
        </div>
        {/* Mobile Drawer Menu */}
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <div className="w-56 p-4 flex flex-col gap-4">
            <img className="h-[40px] w-auto" src={`home/logo.svg`} alt="Logo" />

            {/* Mobile Navigation Links */}
            <Link href="/" className="hover:text-defaultOrange text-sm">
              Home
            </Link>
            <a href="#services" className="hover:text-defaultOrange text-sm">
              Our Services
            </a>
            <a
              href="#testimonials"
              className="hover:text-defaultOrange text-sm"
            >
              Testimonials
            </a>
            <a href="#help" className="hover:text-defaultOrange text-sm">
              Help
            </a>

            {/* Mobile Login/Register Buttons */}
            <Button
              variant="contained"
              sx={{
                background: '#14199C',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 700,
                height: '38px',
                borderRadius: '8px',
                width: '100%',
              }}
            >
              Login
            </Button>
            <Link href="/admin/profile">
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#14199C',
                  color: '#14199C',
                  fontSize: '14px',
                  fontWeight: 700,
                  height: '38px',
                  borderRadius: '8px',
                  width: '100%',
                }}
              >
                Dashboard
              </Button>
            </Link>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}
