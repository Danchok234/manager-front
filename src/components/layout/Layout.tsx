import type { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-col h-full w-full">
        <Header />
        <main className="w-full h-full">{children}</main>
      </div>
    </div>
  );
}
