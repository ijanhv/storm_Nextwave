"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

interface UserMenuProps {
  currentUser?: User | undefined;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registermodal = useRegisterModal();
  const loginModal = useLoginModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full transition cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar>
              {/* @ts-ignore */}
              <AvatarImage src={currentUser?.image} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-40 rounded-b-xl rounded-l-xl shadow-md  bg-white overflow-hidden right-6 top-10 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem label="Sign Up" onClick={registermodal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
