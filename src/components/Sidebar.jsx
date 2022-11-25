import React, { useState } from "react";
import { ChartBarIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { links } from "../data/dummy";
import MoreOptions from "../layouts/MoreOptions";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [optionsOpen, setoptionsOpen] = useState(false);

  const handleMoreOptionsMenu = () => {
    setoptionsOpen(!optionsOpen);
  };
  return (
    <div
      className="fixed min-h-screen hidden  md:flex flex-col lg:w-64 md:w-20
     border shadow-xl justify-between "
    >
      <div className="w-full flex gap-3 flex-col">
        <div className="flex flex-row lg:justify-start justify-center pl-2 my-3 gap-3 items-center">
          <ChartBarIcon className="text-sky-500 h-8 w-8" />
          <h4 className="hidden lg:block text-lg tracking-tight font-semibold">
            Notify
          </h4>
        </div>
        <div className="mt-5">
          {links.map((link, index) => (
            <NavLink
              to={link.path}
              className="w-full pl-2 bg-white hover:bg-gray-200 flex flex-row gap-2 p-2 rounded-sm
             items-center cursor-pointer lg:justify-start md:justify-center mt-4"
              key={index}
            >
              <span className="icons">{link.icon}</span>
              <label className="hidden lg:block text-sm font-sm font-semibold cursor-pointer">
                {link.label}
              </label>
            </NavLink>
          ))}
        </div>
      </div>

      <div
        className="relative my-3 lg:justify-start flex flex-row items-center gap-3 w-full cursor-pointer lg:pl-2 md:justify-center"
        onClick={() => {
          handleMoreOptionsMenu();
        }}
      >
        <Bars3Icon className="icons" />
        <span className="md:hidden lg:block ">More</span>
        {optionsOpen && <MoreOptions />}
      </div>
    </div>
  );
};

export default Sidebar;
