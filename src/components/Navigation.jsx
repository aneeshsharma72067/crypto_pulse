import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    rounded-lg
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full duration-300 py-3 text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-indigo-100 text-white"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-indigo-100 active:text-white"
}
    border-0 cursor-pointer rounded-lg capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full duration-300 py-3 text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-indigo-100 text-white"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-indigo-100 active:text-white"
}
    border-0 cursor-pointer rounded-lg capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full duration-300 py-3 text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-indigo-100 text-white"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-indigo-100 active:text-white"
}
    border-0  cursor-pointer rounded-lg capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
