"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { logout } from "@/app/actions/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh(); // This will cause the server component to re-render, fetching the new session state
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="flex items-center gap-2"
    >
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
}
