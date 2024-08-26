import { useState, useEffect } from 'react';

/**
 * @function useDebounce
 * @description Debounces a value by a given number of milliseconds.
 * @param {T} value The value to debounce.
 * @param {number} delay The number of milliseconds to debounce the value.
 * @returns {T} The debounced value.
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   // Perform a search with the debounced term
 * }, [debouncedSearchTerm]);
 */
function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
