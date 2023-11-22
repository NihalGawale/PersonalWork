"use client";
import React from "react";
import "./NavBar.css";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { useAuthUser, useshowNavModal } from "@/context/GlobalContext";
import CommonModal from "../CommonModal/CommonModal";
import { usePathname, useRouter } from "next/navigation";
import { navOptions } from "@/utils";
import Button from "./NavButton";
import NavItems from "./NavItems";
import NavButton from "./NavButton";

const NavBar = () => {
  const pathName = usePathname();
  const isAdmin = pathName.includes("admin");

  const router = useRouter();
  const [showNavModal, setshowNavModal] = useshowNavModal();
  const [isAuthUser,setIsAuthUser] = useAuthUser()
  console.log(showNavModal);

  //Function to return nav items on NavBar
  // function NavItems({ isModalView, isAdmin, router }) {
  //   const handleClick = (item) => {
  //     setshowNavModal(false);
  //     router.push(item.path);
  //   };

  //   return (
  //     <div
  //       className={`items-center justify-between w-full md:flex md:w-auto ${
  //         isModalView ? "" : "hidden"
  //       }`}
  //       id="nav-items"
  //     >
  //       <div
  //         className={`flex flex-col p-4 md:p-0 mt-4 font-semibold  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
  //           isModalView ? "border-none" : "border border-gray-100 "
  //         }`}
  //       >
  //         {isAdmin
  //           ? ""
  //           : navOptions.map((item) => (
  //               <div
  //                 className={`cursor-pointer block py-2 pl-3 pr-4 hover:text-black text-gray-400  rounded md:p-0`}
  //                 onClick={() => handleClick(item)}
  //                 key={item.id}
  //                 id={item.id}
  //               >
  //                 {item.label}
  //               </div>
  //             ))}
  //       </div>
  //     </div>
  //   );
  // }

  //Function to return buttons on NavBar

  // function NavButton({ isModalView = false, isAdmin, router }) {
  //   return (
  //     <div
  //       className={`flex flex-col md:flex md:flex-row md:order-2 gap-2 ${
  //         isModalView ? "" : "hidden"
  //       }`}
  //       id="nav-buttons"
  //     >
  //       {isAuthUser ? (
  //          <Button buttonName="Logout" />
  //       ) : (
  //         <Button buttonName="Login" />
  //       )}
  //     </div>
  //   );
  // }
  return (
    <>
      <nav className="nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <span className="text-2xl font-semibold self-center whitespace-nowrap">
              Office Chairs
            </span>
          </div>
          <div className="lg:hidden cursor-pointer">
            <MenuTwoToneIcon onClick={() => setshowNavModal(!showNavModal)} />
          </div>
          <NavItems isAdmin={isAdmin} router={router} />
        <NavButton  isAuthUser={isAuthUser} router={router} />
        </div>
      </nav>
      <CommonModal
        show={showNavModal}
        setShow={setshowNavModal}
        mainContentOne={
          <NavItems isModalView={true} isAdmin={isAdmin} router={router} />
        }
        mainContentTwo={<NavButton isModalView={true} isAuthUser={isAuthUser} router={router} />}
      />
    </>
  );
};

export default NavBar;
