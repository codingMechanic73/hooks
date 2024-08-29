import { ClientOnly } from 'remix-utils/client-only';
import useLocalStorage from '~/hooks/useLocalStorage';

export async function loader() {
  return null;
}

export default function UseLocalStoragePage() {
  const key = 'searchTerm';
  const [searchTerm, setSearchTerm] = useLocalStorage<string>(key, '');

  return (
    <div className="h-[100vh] w-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl p-5 font-bold">useLocalStorage Hook</h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 flex flex-col justify-center align-middle">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="search"
            >
              Search Term
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="font-bold text-gray-700 text-sm">
            Current State value
          </div>
          <div className="mt-3 h-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {searchTerm}
          </div>
        </div>
        <ClientOnly fallback={<div>loading</div>}>
          {() => (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="font-bold text-gray-700 text-sm">
                Local Storage value
              </div>
              <div className="mt-3 h-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                {<pre>{localStorage?.getItem(key)}</pre>}
              </div>
            </div>
          )}
        </ClientOnly>
      </div>
    </div>
  );
}
