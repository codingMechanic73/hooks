import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import useLocalStorage from '~/hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  it('should return the value from localStorage if initial value is null and key exists in localStorage', () => {
    localStorage.setItem('key', JSON.stringify('value'));

    const { result } = renderHook(
      ({ key, valueOrFn }) => useLocalStorage(key, valueOrFn),
      {
        initialProps: { key: 'key', valueOrFn: null },
      }
    );

    expect(result.current[0]).toBe('value');
    expect(localStorage.getItem('key')).toBe(JSON.stringify('value'));
  });

  it("should return the null from localStorage if initial value is null and key does't exist in localStorage", () => {
    const { result } = renderHook(
      ({ key, valueOrFn }) => useLocalStorage(key, valueOrFn),
      {
        initialProps: { key: 'key', valueOrFn: null },
      }
    );

    const [value] = result.current;
    expect(value).toBe(null);
  });

  it('should return the initial value', () => {
    const { result } = renderHook(
      ({ key, valueOrFn }) => useLocalStorage(key, valueOrFn),
      {
        initialProps: { key: 'key', valueOrFn: 'value' },
      }
    );

    const [value] = result.current;
    expect(value).toBe('value');
  });

  it('should presits the value in localStorage', () => {
    const { result } = renderHook(
      ({ key, value }) => useLocalStorage(key, value),
      {
        initialProps: { key: 'key', value: 'value' },
      }
    );

    expect(result.current[0]).toBe('value');

    act(() => {
      result.current[1]('updated');
    });

    expect(localStorage.getItem('key')).toBe(JSON.stringify('updated'));
    expect(result.current[0]).toBe('updated');
  });
});
