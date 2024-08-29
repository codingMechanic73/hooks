import { useLayoutEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * @function useWindowSizeSimple
 * @description Returns the current width and height of the browser window
 * @return {WindowSize} An object with `width` and `height` properties
 * @example
 * const { width, height } = useWindowSizeSimple();
 *
 * @remarks
 * This hook should only be used on the client side.
 */
function useWindowSizeSimple(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>(() => {
    return {
      width: typeof window === 'object' ? window.innerWidth : 0,
      height: typeof window === 'object' ? window.innerHeight : 0,
    };
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSizeSimple;
