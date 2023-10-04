"use client";
import React from "react";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";

interface NavbarProps {
  currentUser?: User;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <h1 className="text-2xl font-semibold text-blue-600 ">Enventsy</h1>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
