import { TopNav } from "@/components/layout";
import "./globals.css";
import { Toaster } from "sonner";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <TopNav />
        <main className="flex-1 bg-gray-200">{children}</main>
        <Toaster
          icons={{
            error: (
              <div className="bg-red-400 rounded-full w-5 h-5 flex justify-center items-center p-0.5">
                <Cross2Icon color="white" />
              </div>
            ),
            success: (
              <div className="bg-green-400 rounded-full w-5 h-5 flex justify-center items-center p-0.5">
                <CheckIcon color="white" />
              </div>
            ),
          }}
          position="top-center"
          toastOptions={{
            className: "bg-white border border-gray-200 text-gray-900",
          }}
        />
      </body>
    </html>
  );
}
