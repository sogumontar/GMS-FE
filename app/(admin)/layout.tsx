import { AdminSidebar } from "@/components/layout/AdminSidebar";
import { AdminTopBar } from "@/components/layout/AdminTopBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#f8f9ff] min-h-screen">
      <AdminSidebar />
      <div className="ml-[260px] flex-1 flex flex-col min-h-screen">
        <AdminTopBar />
        <main className="flex-1 p-8 w-full max-w-[1440px] mx-auto flex flex-col gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
