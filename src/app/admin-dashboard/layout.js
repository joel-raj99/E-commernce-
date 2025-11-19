import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
    
        <div className="hidden md:block">
          <Sidebar />
        </div>


        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto ml-62 mt-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
