import React from 'react';
import Image from 'next/image';

export interface BadgeProps {
  /**
   * The text to display in the badge
   */
  text: string;

  /**
   * Optional image path or URL to display instead of lightning icon
   */
  icon?: string;

  /**
   * Tailwind classes for styling - fully customizable
   */
  className?: string;

  /**
   * Inline styles for dynamic styling
   */
  style?: React.CSSProperties;
}

/**
 * Badge Component
 *
 * Simple badge component with lightning icon. Use Tailwind classes for all styling.
 *
 * @example
 * ```tsx
 * <Badge
 *   text="PROOF IT WORKS"
 *   className="bg-yellow-500/20 border-yellow-500 text-yellow-500 px-6 py-3 text-base"
 * />
 *
 * <Badge
 *   text="Ship fearlessly. Find root cause in under 60 seconds."
 *   className="bg-blue-950/80 border-blue-800 text-yellow-400 px-8 py-3 text-base"
 * />
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  text,
  icon,
  className = '',
  style,
}) => {
  // Extract gradient or color for icon and text
  const badgeTextGradient = style?.['--badge-text-gradient' as keyof React.CSSProperties] as string | undefined;
  const iconColor = badgeTextGradient ? '#FDB022' : (style?.color || 'var(--badge-icon)');

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full border ${className}`}
      style={style}
    >
      {icon ? (
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className="w-4 h-4 flex-shrink-0"
        />
      ) : (
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ color: iconColor }}
        >
          <path
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      )}
      <span
        className="tracking-wide whitespace-nowrap"
        style={badgeTextGradient ? {
          backgroundImage: badgeTextGradient,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        } : undefined}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
