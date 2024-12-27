"use client";

import { BrowserRouter } from "react-router-dom";
import "./globals.css";

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className="antialiased">
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
}
