import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  width?: string;
  color?: string;
  icon?: React.ReactNode;
}
export const Button = ({
  btnText,
  width = "",
  color = "text-white bg-primaryOrange ",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${width} ${color} py-2 rounded-lg flex justify-center items-center gap-3  px-4`}
    >
      {btnText} {rest.icon && rest.icon}
    </button>
  );
};
