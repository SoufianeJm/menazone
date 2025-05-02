'use client';

import { ReactNode } from 'react';

type BaseButtonProps = {
  /**
   * Describes the purpose of the button for screen readers
   */
  'aria-label': string;

  /**
   * Function to call when the button is clicked
   */
  onClick: () => void;

  /**
   * Icon or label elements inside the button
   */
  children: ReactNode;

  /**
   * Optional additional classes to extend or override the base style
   */
  className?: string;
};

/**
 * BaseButton
 *
 * A reusable, styled button wrapper used across Menazone’s header components.
 *
 * - Provides common Tailwind classes for layout, colors, border, and transitions
 * - Ensures consistent padding and rounded corners
 * - Accepts children to support icon + text combos
 * - Optionally extendable via `className`
 *
 *
 */
export function BaseButton({
                             'aria-label': ariaLabel,
                             onClick,
                             children,
                             className = '',
                           }: BaseButtonProps) {
  return (
      <button
          aria-label={ariaLabel}
          onClick={onClick}
          className={`flex items-center justify-center p-3 rounded-xl dark-gray text-xs border border-solid text-white/60 border-dark-50 bg-dark-900 hover:bg-zinc-800 transition ${className}`}
      >
        {children}
      </button>
  );
}
