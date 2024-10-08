import useWindowSize from '~/hooks/useWindowSize';

export async function loader() {
  return null;
}

export default function useWindowSizePage() {
  const { width, height } = useWindowSize();

  return (
    <div className="h-[100vh] w-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl p-5 font-bold">useWindowSize Hook</h1>
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="font-bold text-gray-700 text-sm">
            Current Screen Width
          </div>
          <div className="mt-3 h-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {width}
          </div>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="font-bold text-gray-700 text-sm">
            Current Screen Height
          </div>
          <div className="mt-3 h-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {height}
          </div>
        </div>
      </div>
    </div>
  );
}
