import { ApplicantSidebar } from "@/components/layout/ApplicantSidebar";

export default function ApplicantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#f9f9f9] min-h-screen relative overflow-x-hidden">
      <ApplicantSidebar />
      <div className="flex-1 flex flex-col min-h-screen md:ml-72 w-full transition-all duration-300">
        <main className="flex-1 px-4 md:px-16 py-6 md:py-12 max-w-[1280px] mx-auto w-full space-y-6 md:space-y-8">
          {children}
        </main>
      </div>
    </div>
  );
}
