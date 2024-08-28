import { useSyncExternalStore } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * useWindowSize is a custom hook that returns the current width and height of
 * the browser window. It is compatible with both the client and server side
 * rendering.
 * @function useWindowSize
 * @description useWindowSize is a custom hook that returns the current width and height of
 * the browser window. It is compatible with both the client and server side
 * rendering.
 * @return {WindowSize} An object with the current width and height of the
 * browser window.
 * @example
 * const { width, height } = useWindowSize();
 */
function useWindowSize(): WindowSize {
  let prevSnapshot = {
    width: 1536,
    height: 782,
  };

  const subscribe = (onStoreChange: () => void) => {
    const resizeHandler = () => {
      onStoreChange();
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  };

  function getSnapshot() {
    const currentSnapshot = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (
      prevSnapshot.width !== currentSnapshot.width ||
      prevSnapshot.height !== currentSnapshot.height
    ) {
      prevSnapshot = currentSnapshot;
      return prevSnapshot;
    }
    return prevSnapshot;
  }

  const getServerSnapshot = (): WindowSize => prevSnapshot;

  const size = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return size;
}

export default useWindowSize;
