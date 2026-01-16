import { TopNav } from "@/components/layout";
import "./globals.css"; 
import { ThemeProvider } from "@/context/theme/ThemeContext";
import { WorkloadProvider } from "@/context/workload/WorkloadContext";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <WorkloadProvider>
            <TopNav />
            <main className="flex-1 bg-gray-200">{children}</main>
            <Toaster
              position="top-center"
              toastOptions={{
                className: "bg-white border border-gray-200 text-gray-900",
              }}
            />
          </WorkloadProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
