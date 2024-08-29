import type { MetaFunction } from '@remix-run/node';

import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to React Hooks</h1>
      <ol className="list-disc list-inside">
        <li className="text-blue-500 font-bold">
          <Link
            className="hover:underline"
            prefetch="intent"
            to={'/useDebouncePage'}
          >
            useDebouncePage
          </Link>
        </li>
        <li className="text-blue-500 font-bold">
          <Link
            className="hover:underline"
            prefetch="intent"
            to={'/useLocalStoragePage'}
          >
            useLocalStoragePage
          </Link>
        </li>
        <li className="text-blue-500 font-bold">
          <Link
            className="hover:underline"
            prefetch="intent"
            to={'/useLocalStorageExternalPage'}
          >
            useLocalStorageExternalPage
          </Link>
        </li>
        <li className="text-blue-500 font-bold">
          <Link
            className="hover:underline"
            prefetch="intent"
            to={'/useWindowSizePage'}
          >
            useWindowSizePage
          </Link>
        </li>
        <li className="text-blue-500 font-bold">
          <Link
            className="hover:underline"
            prefetch="intent"
            to={'/useWindowSizeSimplePage'}
          >
            useWindowSizeSimplePage
          </Link>
        </li>
      </ol>
    </div>
  );
}
