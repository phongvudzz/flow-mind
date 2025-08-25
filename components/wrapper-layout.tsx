import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Logo } from "./logo";
import { APP_NAME } from "@/constants";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute pointer-events-none inset-0 md:flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] hidden"></div>
      <div className="bg-white dark:bg-black border-b py-2 flex justify-between items-center border-border absolute z-50 w-full lg:w-8/12 px-4 md:px-1">
        <Link href="/">
          <div className="flex gap-2 cursor-pointer">
            <Logo />
            <p className="dark:text-white text-black">{APP_NAME}</p>
          </div>
        </Link>
        <div className="z-50 flex items-center">
          <ThemeToggle />
        </div>
      </div>
      <div className="mt-20 lg:w-7/12 w-full">{children}</div>
    </div>
  );
}
