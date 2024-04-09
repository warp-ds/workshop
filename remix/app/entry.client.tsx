/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */


import '@lit-labs/ssr-react/enable-lit-ssr.js';
import '@lit-labs/ssr-react/jsx-runtime';

import { RemixBrowser } from '@remix-run/react';
// eslint-disable-next-line react/no-deprecated
import { hydrate } from 'react-dom';

hydrate(<RemixBrowser />, document);
