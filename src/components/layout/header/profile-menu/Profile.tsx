"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div>
        <span>{session?.user.name}</span>
        <Link href={"/signout"}>Sign Out</Link>
      </div>
    );
  return (
    <div>
      <Link href={"/login"}>Login</Link>
    </div>
  );
}
