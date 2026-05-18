import { ApplicantSidebar } from "@/components/layout/ApplicantSidebar";

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      <ApplicantSidebar />
      <div className="flex-1 w-full md:ml-72 min-h-screen">
        <main className="px-5 md:px-16 py-8 md:py-12 max-w-[1280px] mx-auto space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}
