import Image from "next/image";
import { InputHTMLAttributes } from "react";

interface InputElProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  id: string;
  name?: string;
  icon?: React.ReactNode;
  imgSrc?: string;
}

export function InputEl({
  placeholder,
  className = "border border-gray-300 rounded-md px-4 py-2",
  id,
  name,
  icon,
  imgSrc,
  ...rest
}: InputElProps) {
  return (
    <div className={`${name ? "flex flex-col gap-1" : ""}`}>
      {name && <label htmlFor={id}>{name}</label>}
      <div
        className={` ${
          (icon || imgSrc) && "flex items-center gap-2"
        }  ${className}`}
      >
        <input
          id={id}
          {...rest}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent"
        />
        {icon && icon}
        {imgSrc && (
          <div className="relative w-11 h-6">
            <Image
              src={imgSrc}
              fill
              className="object-contain"
              alt={`${placeholder} icon`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
