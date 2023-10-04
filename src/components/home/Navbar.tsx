"use client";
import React, { useEffect } from "react";
import Container from "../Container";

import { Role, User } from "@prisma/client";
import UserMenu from "../navbar/UserMenu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import axios from "axios";
import { apiUrl } from "@/lib/url";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import userUserStore from "@/hooks/useUserStore";

interface NavbarProps {
  currentUser?: User;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const [user, setUser] = userUserStore((state) => [state.user, state.setUser]);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])

  const router = useRouter();

  const handleVendorRole = () => {
    try {
      axios
        .put(`${apiUrl}/user/${currentUser?.id}`, {
          role: Role.Vendor,
        })
        .then((response) => {
          console.log("User updated successfully:", response.data);
          toast.success("Role Updated Successfully");
          router.push("/vendors");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } catch (error) { }
  };
  const handleOrgainzerRole = () => {
    try {
      axios
        .put(`${apiUrl}/user/${currentUser?.id}`, {
          role: Role.Organizer,
        })
        .then((response) => {
          console.log("User updated successfully:", response.data);
          toast.success("Role Updated Successfully");
          router.push("/dashboard");
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    } catch (error) { }
  };

  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <h1 className="text-2xl font-bold text-[#00252e] font-Poppins">
              {" "}
              Eventsy{" "}
            </h1>
            <div className="flex gap-4 items-center">
              {currentUser && currentUser?.role === "Vendor" && (
                <div className="flex items-center">
                  <Link
                    href="/vendors"
                    className="text-sm text-[#00252e] flex gap-2 hover:underline"
                  >
                    Go To Dashboard
                    <ArrowUpRight />
                  </Link>
                </div>
              )}
              {currentUser && currentUser?.role === "Organizer" && (
                <div className="flex">
                  <Link
                    href="/dashboard"
                    className="text-sm text-[#00252e] flex items-center gap-2 hover:underline"
                  >
                    Go To Dashboard <ArrowUpRight />
                  </Link>
                </div>
              )}

              {currentUser &&
                currentUser?.role === "Attendee" && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="rounded-2xl">
                        Continue As
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[400px] space-y-3">
                      <DialogHeader className="items-center">
                        <DialogTitle className="text-md text-center ">
                          {" "}
                          Are you a Vendor or a an Event Planner?
                        </DialogTitle>
                      </DialogHeader>

                      <div className="mx-auto flex flex-col gap-4">
                        <div
                          onClick={handleOrgainzerRole}
                          className="font-bold text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 cursor-pointer"
                        >
                          Event Planner
                        </div>
                        <div
                          onClick={handleVendorRole}
                          className="font-bold text-center text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-110 cursor-pointer"
                        >
                          Vendor
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
