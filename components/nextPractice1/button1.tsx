import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  color: string;
  isLoading: boolean;
  disabled: boolean;
  className?: string;
  children?: ReactNode;
}

interface ButtonSizes {
  [key: string]: string;
}

interface ButtonColors {
  [key: string]: string;
}

function Button1({
  size,
  color,
  isLoading,
  disabled,
  children,
  className,
  ...props
}: Props) {
  const sizeClasses: ButtonSizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const colorClasses: ButtonColors = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const btnClass = classNames(
    "rounded focus:outline-none focus:ring-2 focus:ring-offset-2",
    sizeClasses[size],
    colorClasses[color],
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
      "flex justify-center items-center": isLoading,
    }
  );

  return (
    <button
      className={btnClass + ` ${className}`}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="loader ease-linear rounded-full border-4 border-gray-200 h-6 w-6"></span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button1;
