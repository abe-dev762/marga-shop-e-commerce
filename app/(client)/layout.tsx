import type { Metadata } from "next";
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
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="flex-1"></main>
          <Footer/>
        </div>
    </ClerkProvider>
  );
};
