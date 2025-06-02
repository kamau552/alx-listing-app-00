// components/common/Button.tsx
import React from 'react';


interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      {/* Sign In Button - Teal */}
      <button className="flex items-center rounded-full space-x-2 bg-teal-600 text-white hover:text-teal-800 font-light py-2 px-4">
          <title>Sign In</title>
          <span>Sign In</span>
      </button>

      {/* Sign Up Button - Purple */}
      <button className="flex items-center border rounded-full space-x-2 text-black hover:text-teal-800 font-medium py-2 px-4">
          <title>Sign up</title>
          <span>Sign Up</span>
      </button>
    </div>
  );
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;