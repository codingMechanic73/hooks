import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import useWindowSize from '~/hooks/useWindowSize';

describe('useWindowSize', () => {
  it('should return the initial window size', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(width);
    expect(result.current.height).toBe(height);
  });

  it('should return the updated value if the window size changes', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const { result } = renderHook(() => useWindowSize());
    expect(result.current.width).toBe(width);
    expect(result.current.height).toBe(height);

    act(() => {
      window.innerWidth = 1140;
      window.innerHeight = 695;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1140);
    expect(result.current.height).toBe(695);
  });
});
