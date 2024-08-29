import { useState } from 'react';
import usePrevious from '~/hooks/usePrevious';

export async function loader() {
  return null;
}

export default function usePreviousPage() {
  const [count, setCount] = useState(500);
  const prevousCount = usePrevious(count);

  return (
    <div className="h-[100vh] w-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl p-5 font-bold">useDebounce Hook</h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="delay"
            >
              Count
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="delay"
              type="number"
              min={0}
              max={2000}
              placeholder="Delay"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
            />
          </div>
        </form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="font-bold text-gray-700 text-sm">Previous Count</div>
          <div className="mt-3 h-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {prevousCount}
          </div>
        </div>
      </div>
    </div>
  );
}
