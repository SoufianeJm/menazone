'use client';

import { RefObject, useEffect } from 'react';

/**
 * useOverlayFocus
 *
 * This hook traps keyboard focus within a given overlay container while it's open.
 * It also restores focus to the previously active element when the overlay closes.
 *
 * - Automatically focuses the first focusable element inside the container (or a specific one if provided)
 * - Prevents Tab and Shift+Tab from escaping the overlay
 * - Cleans up listeners and restores previous focus on unmount
 *
 * @param containerRef - Ref to the element that wraps your overlay content
 * @param isOpen - Boolean that determines if the overlay is active
 * @param initialFocusRef - Optional element to focus first instead of the default behavior
 */
export function useOverlayFocus(
    containerRef: RefObject<HTMLElement>,
    isOpen: boolean,
    initialFocusRef?: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Save the element that was focused before opening the overlay
    const previousActiveElement = document.activeElement as HTMLElement;

    // Set initial focus
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      // Find the first focusable element inside the overlay
      const focusableElements = containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }

    // Function to trap Tab/Shift+Tab inside the overlay
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !containerRef.current) return;

      const focusableElements = containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      // Handle Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      }
      // Handle Tab
      else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Listen for Tab navigation while the overlay is open
    document.addEventListener('keydown', handleFocusTrap);

    return () => {
      // Restore original focus on unmount
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
      document.removeEventListener('keydown', handleFocusTrap);
    };
  }, [isOpen, containerRef, initialFocusRef]);
}