import React, { useState } from "react";
import {
  HomeIcon,
  HeartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  ChartBarIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import MoreOptions from "../layouts/MoreOptions";

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
      <div className="w-full flex gap-2 flex-col">
        <div className="flex flex-row lg:justify-start justify-center pl-2 my-3 gap-3 items-center">
          <ChartBarIcon className="text-sky-500 h-8 w-8" />
          <h4 className="hidden lg:block text-lg tracking-tight font-semibold">
            Notify
          </h4>
        </div>

        <div className="w-full flex flex-col gap-6 mt-10">
          <div className="relative w-full flex flex-row gap-2 hover:bg-gray-200 hover:ease-in-out rounded-sm items-center sm:justify-center lg:justify-start lg:pl-2 cursor-pointer p-2">
            <HomeIcon className="icons" />
            <span className="hidden lg:block text-lg font-sm font-semibold">
              Home
            </span>
          </div>

          <div className="w-full flex flex-row gap-2 hover:bg-gray-200 hover:ease-in-out rounded-sm items-center sm:justify-center lg:justify-start lg:pl-2 cursor-pointer p-2">
            <HeartIcon className="icons" />
            <span className="hidden lg:block text-lg font-sm font-semibold">
              Notifications
            </span>
          </div>

          <div className="w-full flex flex-row gap-2 hover:bg-gray-200 hover:ease-in-out rounded-sm items-center sm:justify-center lg:justify-start lg:pl-2 cursor-pointer p-2">
            <MagnifyingGlassIcon className="icons" />
            <span className="hidden lg:block text-lg font-sm font-semibold">
              Search
            </span>
          </div>

          <div className="w-full flex flex-row gap-2 hover:bg-gray-200 hover:ease-in-out rounded-sm items-center sm:justify-center lg:justify-start lg:pl-2 cursor-pointer p-2">
            <UserIcon className="icons" />
            <span className="hidden lg:block text-lg font-sm font-semibold">
              Profile
            </span>
          </div>

          <div className="w-full flex flex-row gap-2 hover:bg-gray-200 hover:ease-in-out rounded-sm items-center sm:justify-center lg:justify-start lg:pl-2 cursor-pointer p-2">
            <ClockIcon className="icons" />
            <span className="hidden lg:block text-lg font-sm font-semibold">
              Explore
            </span>
          </div>
        </div>
      </div>

      <div
        className="relative my-3 lg:justify-start flex flex-row items-center gap-3 w-full cursor-pointer lg:pl-2 md:justify-center"
        onClick={() => {
          handleMoreOptionsMenu();
        }}
      >
        <Bars3Icon className="icons" />
        <p className="md:hidden lg:block">More</p>
        {optionsOpen && <MoreOptions />}
      </div>
    </div>
  );
};

export default Sidebar;
