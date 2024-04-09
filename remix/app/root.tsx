import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './app.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/components.css" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
