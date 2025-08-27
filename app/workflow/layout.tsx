import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

function WorkflowLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      {children}
      <Separator />
      <footer className="flex items-center justify-between p-2">
        <Logo />
        <ThemeToggle />
      </footer>
    </div>
  );
}

export default WorkflowLayout;
