'use client';

import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { login } from '@/app/redux/slices/authSlice';
import { Spinner } from '../common/spinner';
import axios from 'axios';

interface SignUpProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignIn({ setSignUp }: SignUpProps) {
  const [togglePasswordShow, setTogglePasswordShow] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePasswordShow() {
    setTogglePasswordShow(!togglePasswordShow);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    const { email, password } = formData;
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post('/api/auth/login', formData);

      if (response.status == 200) {
        const data = response.data.data;
        toast.success('Login successful');
        Cookies.set('buyer_token', data.token);
        dispatch(login(data.user));

        //  Check if we have a redirect URL
        const redirect = searchParams.get('redirect');
        // redirect user
        router.push(redirect || '/overview');
      }
    } catch (err: unknown) {
      console.error('Login error:', err);
      setError(() => {
        const status =
          axios.isAxiosError(err) && err.response
            ? err.response.status
            : undefined;

        switch (status) {
          case 401:
            return 'Invalid credentials';
          case 403:
            return 'You are not authorized to access this page';
          case 404:
            return 'User not found';
          default:
            return 'An unknown error occurred. Please try again.';
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[70%] flex flex-col py-10 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Welcome to Distress Sale
      </h1>
      <p className="text-sm text-[#585858] mt-2.5 text-center">
        Shop the quality and affordable items in the comfort of your home.
      </p>

      <div className="w-full flex flex-col gap-y-1.5 mt-5">
        <label className="">Email</label>
        <input
          className="p-3 px-4 rounded-[8px] border-primaryBorder border-[1px] outline-none bg-white"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
      </div>

      <div className="w-full flex flex-col gap-y-1.5 mt-4">
        <label className="">Password</label>
        <div className="w-full flex gap-x-2 items-center px-4 py-3 rounded-[8px] border-primaryBorder border-[1px] bg-white">
          <input
            className="outline-none w-[95%]"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type={!togglePasswordShow ? 'password' : 'text'}
            placeholder="Password"
          />
          {!togglePasswordShow ? (
            <FaRegEye
              onClick={handlePasswordShow}
              size={20}
              className="cursor-pointer flex-shrink-0"
            />
          ) : (
            <FaRegEyeSlash
              onClick={handlePasswordShow}
              className="cursor-pointer flex-shrink-0"
              size={20}
            />
          )}
        </div>
      </div>

      <Link
        href="/reset-password"
        className="text-[#585858] ml-auto mt-4 hover:underline"
      >
        Forgot password?
      </Link>

      <button
        onClick={handleLogin}
        className="w-full py-3 flex items-center justify-center rounded-[8px] mt-8 text-white bg-defaultOrange hover:bg-defaultOrangeHover text-sm"
      >
        {isLoading ? <Spinner /> : 'Login'}
      </button>
      {error && (
        <>
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        </>
      )}

      {/* <div className="mt-8 relative flex items-center justify-center">
        <p className="text-center bg-[#F5F5F5] px-3 z-10">Or Sign up with</p>
        <div className="h-[1.6px] w-full bg-[#DED9DD] absolute -z-0"></div>
      </div>

      <div className="flex gap-x-4 items-center justify-center mt-8">
        <button
          className="flex justify-center items-center h-[48px] px-10 gap-x-3 rounded-[8px] border border-[#6D6D6D] hover:bg-black/5"
          type="button"
        >
          <img
            className="w-[39px] h-[39px]"
            src={'/home//google-icon.svg'}
            alt="google logo"
          />
          <span>Google</span>
        </button>
        <button
          className="flex justify-center items-center h-[48px] px-10 gap-x-3 rounded-[8px] border border-[#6D6D6D] hover:bg-black/5"
          type="button"
        >
          <img
            className="w-[24px] h-[24px]"
            src={'/home/facebook-logo.png'}
            alt="facebook logo"
          />
          <span>Facebook</span>
        </button>
      </div> */}

      <p className="text-[#6D6D6D] text-center mt-5">
        Don&apos;t have an account?{' '}
        <button
          onClick={() => setSignUp(true)}
          className="hover:underline cursor-pointer font-medium text-black"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
