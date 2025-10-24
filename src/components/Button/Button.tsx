import React from 'react';
import Image from 'next/image';

export interface ButtonProps {
  /**
   * The text to display in the button
   */
  text: string;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Optional icon path
   */
  icon?: string;

  /**
   * Tailwind classes for styling
   */
  className?: string;
}

/**
 * Button Component
 *
 * @example
 * ```tsx
 * <Button
 *   text="Try for free"
 *   icon="/images/left-side-arrow.svg"
 *   className="bg-yellow-500 hover:bg-yellow-600 text-black"
 * />
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all ${className}`}
    >
      {text}
      {icon && (
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
