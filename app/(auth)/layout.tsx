import { Wrapper } from "@/components/wrapper-layout";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
