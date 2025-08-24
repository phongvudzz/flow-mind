export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh flex-col  bg-[#020617] items-center justify-center gap-6 p-6 md:p-10 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
        }}
      />
      <div className="flex w-full max-w-sm flex-col gap-6 relative">
        {children}
      </div>
    </div>
  );
}
