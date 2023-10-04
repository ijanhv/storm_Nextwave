import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import { getCurrentUser } from "./actions/getCurrentUser";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { User } from "@prisma/client";

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

  const currentUserData = await getCurrentUser();
  const currentUser: User | undefined = currentUserData
    ? {
        ...currentUserData,
        createdAt: new Date(currentUserData.createdAt),
        updatedAt: new Date(currentUserData.updatedAt),
      }
    : undefined;
  console.log(currentUser);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
