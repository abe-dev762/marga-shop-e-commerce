import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Marga Shop",
  description: "The best choice for shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`font-main antialiased`}>
        <div className="flex flex-col">
          <Header/>
          <main className="flex">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
