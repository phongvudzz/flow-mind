"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };
  return (
    <div className="container mx-auto px-6 md:px-0 pb-8 ">
      <main className="flex-1 p-0 md:p-6 pt-0">
        <Button onClick={handleLogout}>Log out</Button>
      </main>
    </div>
  );
}
