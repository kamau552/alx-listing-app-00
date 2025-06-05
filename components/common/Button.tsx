// components/common/Button.tsx
import React from 'react';


interface ButtonProps {
  label: string;
  onClick?: () => void;
}

<<<<<<< HEAD
interface AuthButtonsProps {
  onSignIn?: () => void;
  onSignUp?: () => void;
  className?: string;
  variant?: 'default' | 'mobile';
}
=======
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
>>>>>>> be3e7638178049007babb2ab895a6faf38ec3c31

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
  >
    {label}
  </button>
);

<<<<<<< HEAD

export const AuthButtons: React.FC<AuthButtonsProps> = ({ className, variant = 'default' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {variant === 'default' ? (
        // Original teal/purple style
        <>
          <button className="flex items-center rounded-full space-x-2 bg-teal-600 text-white hover:bg-teal-700 font-light py-2 px-4 transition-colors">
            <span>Sign In</span>
          </button>
          <button className="flex items-center border border-gray-300 rounded-full space-x-2 text-black hover:bg-gray-100 font-medium py-2 px-4 transition-colors">
            <span>Sign Up</span>
          </button>
        </>
      ) : (
        // Alternative mobile-friendly style
        <>
          <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
            Sign In
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700">
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default Button;
=======
export default Button;
>>>>>>> be3e7638178049007babb2ab895a6faf38ec3c31
