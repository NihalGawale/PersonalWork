import { useRouter } from "next/navigation";
import React from "react";

const NavButton = ({
  isModalView,
  isAuthUser,
  router,
  setShowNavModal,
  showNavModal,
}) => {
  function Button({ buttonName }) {
    const handleClick = () => {
      setShowNavModal(!showNavModal);
      if (buttonName === "Login") {
        router.push("/login");
      } else {
        router.push("/logout");
      }
    };
    return (
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-semibold px-6  py-2 text-center inline-flex justify-center items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
      >
        {buttonName}
      </button>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex md:flex-row md:order-2 gap-2 ${
        isModalView ? "" : "hidden"
      }`}
      id="nav-buttons"
    >
      {isAuthUser ? (
        <Button buttonName="Logout" />
      ) : (
        <Button buttonName="Login" />
      )}
    </div>
  );
};

export default NavButton;
