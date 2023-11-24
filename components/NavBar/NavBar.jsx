"use client";
import React from "react";
import "./NavBar.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useAuthUser, useshowNavModal } from "@/context/GlobalContext";
import CommonModal from "../CommonModal/CommonModal";
import { usePathname, useRouter } from "next/navigation";
import NavItems from "./NavItems";
import NavButton from "./NavButton";

const NavBar = () => {
  const pathName = usePathname();
  const isAdmin = pathName.includes("admin");

  const router = useRouter();
  const [showNavModal, setShowNavModal] = useshowNavModal();
  const [isAuthUser, setIsAuthUser] = useAuthUser();
  console.log(showNavModal);

  return (
    <>
      <nav className="nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="text-2xl font-extrabold self-center whitespace-nowrap text-gray-800 flex justify-center items-center">
            ComfortCraft
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
