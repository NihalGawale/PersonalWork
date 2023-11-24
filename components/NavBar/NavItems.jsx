
import React from 'react';

const NavItems = ({ isModalView, isAdmin, router }) => {
    const handleClick = (item) => {
        setshowNavModal(false);
        router.push(item.path);
      };
  
      return (
        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${
            isModalView ? "" : "hidden"
          }`}
          id="nav-items"
        >
          <div
            className={`flex flex-col p-4 md:p-0 mt-4 font-semibold  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
              isModalView ? "border-none" : "border border-gray-100 "
            }`}
          >
            {/* {isAdmin
              ? ""
              : navOptions.map((item) => (
                  <div
                    className={`cursor-pointer block py-2 pl-3 pr-4 hover:text-black text-gray-400  rounded md:p-0`}
                    onClick={() => handleClick(item)}
                    key={item.id}
                    id={item.id}
                  >
                    {item.label}
                  </div>
                ))} */}
          </div>
        </div>
      );
}

export default NavItems;
