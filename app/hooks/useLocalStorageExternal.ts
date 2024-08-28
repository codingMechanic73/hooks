import { useSyncExternalStore } from 'react';

/**
 * useLocalStorageExternal is a custom hook that allows you to manage state values
 * that are stored in the browser's localStorage and synced with the server.
 * @function useLocalStorageExternal
 * @description useLocalStorageExternal is a custom hook that allows you to manage state values
 * that are stored in the browser's localStorage and synced with the server.
 * @param {string} key - The key used to store the value in localStorage.
 * @param {T} initialValue - The initial value of the state.
 * @return {[T, (value: T) => void]} - An array with the current value of the state
 * and a function to update it.
 * @example
 * const [searchTerm, setSearchTerm] = useLocalStorageExternal('searchTerm', '');
 */
function useLocalStorageExternal<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const subscribe = (onStoreChange: () => void) => {
    const onChangeStorageHandler = (event: StorageEvent) => {
      if (event.key === key) {
        onStoreChange();
      }
    };
    window.addEventListener('storage', onChangeStorageHandler);
    return () => window.removeEventListener('storage', onChangeStorageHandler);
  };

  const getSnapshot = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue;
    }
  };

  const getServerSnapshot = () => initialValue;

  const onValueChange = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          newValue: JSON.stringify(newValue),
        })
      );
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  };

  const store = useSyncExternalStore<T>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return [store, onValueChange];
}

export default useLocalStorageExternal;
