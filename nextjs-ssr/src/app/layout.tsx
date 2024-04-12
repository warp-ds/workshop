import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/fonts/v1/finn-no.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/finn-no.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/resets.css" />
        <link rel="stylesheet" href="https://assets.finn.no/pkg/@warp-ds/css/v1/components.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
