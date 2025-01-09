import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#1A202C]">
      <body className="flex flex-col w-full max-w-screen-lg mx-auto">
        <Header />
        <main className="grow pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
