import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { getCurrentUser } from "@/actions/getCurrentUser";
import ToasterProvider from "@/providers/ToasterProvider";
import Navbar from "@/components/home/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventsy",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />

        <div className="">{children}</div>
      </body>
    </html>
  );
}
