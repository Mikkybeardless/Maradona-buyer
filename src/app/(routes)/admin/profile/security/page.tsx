"use client";
import { InputEl } from "@/app/_components/common/input";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

export default function Page() {
  const [phase, setPhase] = useState(1);
  // const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time === 0) {
      setTime(60);
    }
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);
  return (
    <div className="">
      {/* step 1 */}

      {phase === 1 ? (
        <div className=" flex flex-col bg-white w-full p-10 h-auto gap-4">
          <h1 className="text-3xl font-bold">Two Factor Authentication</h1>
          <p className="text-secondaryTextColor md:w-[60%]">
            Enter the email address you used to sign up and we&apos;ll send you
            instructions to reset your password
          </p>

          <InputEl name="Email" id="email" placeholder="Email" />
          <div className="flex justify-center px-[5rem] mt-14">
            <button
              onClick={() => setPhase(2)}
              className="bg-secondaryOrange w-full hover:border-secondaryOrange hover:bg-inherit hover:text-secondaryOrange border text-white  px-4 py-2 rounded-md mt-4"
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full  flex flex-col items-center h-auto p-4 md:p-10 md:px-32 bg-white shadow-md">
          <h1 className="text-2xl sm:text-3xl text-center font-medium">
            Enter OTP
          </h1>

          <p className="text-secondaryTextColor text-sm text-center mt-2.5 max-w-[90%]">
            Please check your mail, and enter the 4 digit code that was sent to
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
            {time === 60 ? "1:00" : `0:${String(time).padStart(2, "0")}`}
          </p>

          <p className="text-secondaryTextColor text-sm text-center mt-5">
            Didn't get a code?
            <span className="font-medium cursor-pointer hover:underline">
              {" "}
              Resend
            </span>
          </p>

          <div className="flex justify-center w-full px-[4rem] mt-14">
            <button
              onClick={() => setPhase(1)}
              className="bg-secondaryOrange w-full hover:border-secondaryOrange hover:bg-inherit hover:text-secondaryOrange border text-white  px-4 py-2 rounded-md mt-4"
            >
              Verify
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
