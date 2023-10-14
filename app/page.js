// "use client";

import Auth from "@/components/auth";
import AuthSession from "@/components/auth_session";

// import { cookies } from "next/headers";

export default function Home() {
  // cookies().set("hello", "ummmm");

  return (
    // <Auth />
    <AuthSession />
  );
}
