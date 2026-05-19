import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PublicHeader />
      <main className="flex-grow flex flex-col items-center w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
