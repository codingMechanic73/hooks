import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, expect, it } from 'vitest';
import usePrevious from '~/hooks/usePrevious';

describe('usePrevious', () => {
  it('should show undefined as initial value', () => {
    const { result, rerender } = renderHook(({ value }) => usePrevious(value), {
      initialProps: { value: 1 },
    });
    expect(result.current).toBe(undefined);

    act(() => {
      rerender({ value: 2 });
    });

    expect(result.current).toBe(1);

    act(() => {
      rerender({ value: 3 });
    });

    expect(result.current).toBe(2);
  });
});
