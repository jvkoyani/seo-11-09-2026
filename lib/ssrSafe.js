/**
 * SSR-Safe utilities
 * These utilities ensure no hydration mismatches and work safely in server/client contexts
 */

import { useEffect, useState } from 'react';

/**
 * Hook to safely detect if component is mounted (client-side)
 * Use this to avoid hydration mismatches with window/document references
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

/**
 * Safely get window object (client-side only)
 */
export function getWindow() {
  if (typeof window === 'undefined') {
    return null;
  }
  return window;
}

/**
 * Safely get document object (client-side only)
 */
export function getDocument() {
  if (typeof document === 'undefined') {
    return null;
  }
  return document;
}

/**
 * Check if code is running on client side
 */
export function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Check if code is running on server side
 */
export function isServer() {
  return !isClient();
}

/**
 * Safely get localStorage (client-only)
 */
export function getLocalStorage(key) {
  if (!isClient()) return null;
  try {
    return localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

/**
 * Safely set localStorage (client-only)
 */
export function setLocalStorage(key, value) {
  if (!isClient()) return false;
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Generate stable client-side IDs (avoid Math.random in rendering)
 */
export function useStableId(prefix = '') {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(`${prefix}-${Math.random().toString(36).substr(2, 9)}`);
  }, [prefix]);

  return id;
}

/**
 * Get environment variable safely (client vs server)
 */
export function getEnv(key, defaultValue = null) {
  if (isServer()) {
    return process.env[key] || defaultValue;
  }
  // Client-side: only access NEXT_PUBLIC_* variables
  return process.env[`NEXT_PUBLIC_${key}`] || defaultValue;
}

/**
 * Defer state update to avoid hydration mismatch
 */
export function useDeferredValue(value) {
  const [deferredValue, setDeferredValue] = useState(value);

  useEffect(() => {
    setDeferredValue(value);
  }, [value]);

  return deferredValue;
}

/**
 * Safely execute callback after hydration
 */
export function useAfterHydration(callback) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (callback) {
      callback();
    }
  }, [callback]);

  return hydrated;
}

/**
 * Generate stable index-based IDs (never use Math.random in render)
 */
export function generateStableId(baseName, index) {
  return `${baseName}-${index}`;
}

/**
 * Safe date formatting (avoid timezone issues)
 */
export function formatISODate(dateString) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (e) {
    return '';
  }
}

/**
 * Detect if reduced motion is preferred
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}
