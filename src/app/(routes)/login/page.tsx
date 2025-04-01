"use client";
import SignIn from "@/app/_components/auths/SignIn";
import SignUp from "@/app/_components/auths/SignUp";
import { useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="w-screen h-screen flex bg-[#F5F5F5]">
      {/* Background Section (Hidden on Small Screens) */}
      <div className="hidden md:flex w-1/2 signInBg bg-no-repeat bg-center bg-cover"></div>

      {/* Authentication Form Section */}
      <div
        className={`${
          signUp ? "" : "items-center"
        } md:basis-[50%] overflow-y-auto flex justify-center custom-scrollbar`}
      >
        {signUp ? (
          <SignUp setSignUp={setSignUp} />
        ) : (
          <SignIn setSignUp={setSignUp} />
        )}
      </div>
    </div>
  );
}
