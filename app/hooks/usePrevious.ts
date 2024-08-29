import { useEffect, useRef } from 'react';

/**
 * @function usePrevious
 * @description A hook that returns the previous value of the given state.
 * This is useful when you need to compare the current value of a state
 * with the previous one.
 * @returns {T | undefined} The previous value of the given state.
 * @example
 * const [count, setCount] = useState(0);
 * const prevCount = usePrevious(count);
 *
 * console.log(prevCount); // 0
 */
function usePrevious<T>(value: T): T | undefined {
  const prevRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
}

export default usePrevious;
