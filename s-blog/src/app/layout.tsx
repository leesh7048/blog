import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F1F0E8]">
      <body className="flex flex-col w-full ">
        <div className="bg-[#B3C8CF]">
          <Header />
        </div>

        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
