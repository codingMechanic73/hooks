import { useState, useEffect } from 'react';

/**
 * useLocalStorage is a custom hook that allows you to manage state values
 * that are stored in the browser's localStorage.
 * @function useStorage
 * @description useStorage is a custom hook that allows you to manage state values
 * that are stored in the browser's localStorage.
 * @param {string} key - The key used to store the value in localStorage.
 * @param {T} initialValue - The initial value of the state.
 * @return {[T, (value: T) => void]} - An array with the current value of the state
 * and a function to update it.
 * @example
 * const [searchTerm, setSearchTerm] = useStorage('searchTerm', '');
 */
function useStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => initialValue);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  return [storedValue, setValue];
}

export default useStorage;
