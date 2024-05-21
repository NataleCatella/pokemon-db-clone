'use client'

import "./globals.css";
import MainNav from "@/app/_components/MainNav/MainNav";
import StyledComponentsRegistry from './../_lib/registry'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {useState} from "react";
import StoreProvider from "@/app/_stores/provider";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  const [client] = useState(new QueryClient())

  return (
    <StoreProvider>
      <QueryClientProvider client={client}>
        <html lang="en">
        <head></head>
        <body>
        <StyledComponentsRegistry>
          <MainNav/>
          {children}
        </StyledComponentsRegistry>
        </body>
        </html>
      </QueryClientProvider>
    </StoreProvider>
  );
}
