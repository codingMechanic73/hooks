import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useDebounce from '~/hooks/useDebounce';

describe('useDebounce', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    expect(result.current).toBe('initial');
  });

  it('should update the value after delay', () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    rerender({ value: 'updated', delay: 500 });
    act(() => vi.advanceTimersByTime(500));
    expect(result.current).toBe('updated');
  });

  it('should reset the timer if the value changes before the delay', () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    rerender({ value: 'updated', delay: 500 });
    act(() => vi.advanceTimersByTime(400));
    expect(result.current).toBe('initial');

    rerender({ value: 'updated again', delay: 500 });
    act(() => vi.advanceTimersByTime(500));
    expect(result.current).toBe('updated again');
  });
});
