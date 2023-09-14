import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, className = "", children }: Props) => {
  return (
    <button
      className={`${className} px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 select-none`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
