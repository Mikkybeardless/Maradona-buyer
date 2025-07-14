'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import OTPInput from 'react-otp-input';
import Link from 'next/link';
import Done from '../../_assets/done-animation.json';

export default function ResetPassword() {
  const [phase, setPhase] = useState(1);
  const [otp, setOtp] = useState('');
  const [time, setTime] = useState(60);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // if (time === 0) {
    //   setTime(60);
    // }
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#F5F5F5] px-4">
      {phase === 1 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Reset your password
          </h1>

          <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[90%]">
            Enter your email, and we&apos;ll send instructions to reset your
            password.
          </p>

          <div className="flex flex-col gap-y-1.5 mt-8 w-full">
            <label>Email:</label>
            <input
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={() => setPhase(2)}
            className="mt-8 w-full rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Reset Password
          </button>
        </div>
      ) : phase === 2 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Enter OTP
          </h1>

          <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[90%]">
            Check your email and enter the 4-digit code sent to
            <span className="italic font-medium"> rosemary@gmail.com</span>.
          </p>

          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            inputType="number"
            containerStyle="gap-x-5 w-full justify-center mt-7"
            inputStyle="reset-password border border-primaryBorder rounded-[15px] h-[50px] !w-[50px] flex-shrink-0"
            renderInput={(props) => <input {...props} />}
          />

          <p className="mt-5 text-sm">
            {time === 60 ? '1:00' : `0:${String(time).padStart(2, '0')}`}
          </p>

          <p className="text-secondaryTextColor text-sm text-center mt-5">
            Didn&apos;t get a code?
            <span className="font-medium cursor-pointer hover:underline">
              {' '}
              Resend
            </span>
          </p>

          <button
            onClick={() => setPhase(3)}
            className="mt-8 w-full rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Verify
          </button>
        </div>
      ) : phase === 3 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center p-6 sm:p-12 rounded-2xl bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Reset Password
          </h1>

          <div className="flex flex-col gap-y-1.5 mt-8 w-full">
            <label htmlFor="password">New password:</label>
            <input
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="New password"
            />
          </div>

          <div className="flex flex-col gap-y-1.5 mt-4 w-full">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              className="w-full rounded-lg p-3 border border-primaryBorder"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
            />
          </div>

          <button
            onClick={() => setPhase(4)}
            className="mt-10 w-full rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Reset Password
          </button>
        </div>
      ) : phase === 4 ? (
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[35%] flex flex-col items-center">
          <Lottie
            className="max-w-[40%] sm:max-w-[50%]"
            loop={true}
            animationData={Done}
          />
          <p className="text-lg font-medium text-center">
            Your password has been updated successfully
          </p>
          <Link
            href="/login"
            className="mt-10 w-full text-center rounded-lg py-3 sm:py-4 text-white bg-defaultOrange hover:bg-defaultOrangeHover"
          >
            Login
          </Link>
        </div>
      ) : null}

      {phase !== 4 && (
        <Link
          className="flex items-center gap-x-1 mt-10 text-sm sm:text-base"
          href="/login"
        >
          <FaArrowLeftLong size={18} />
          <span>Back to login</span>
        </Link>
      )}
    </div>
  );
}
