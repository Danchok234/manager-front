"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Providers;
