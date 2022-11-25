import React from "react";
import {
  HomeIcon,
  HeartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div
      className="fixed min-h-screen hidden  md:flex flex-col lg:w-64 md:w-20
     border shadow-xl justify-between items-center"
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

      <div className="relative my-3">
        <h2>Bottom </h2>
        <p className="absolute -top-4">absolute</p>
      </div>
    </div>
  );
};

export default Sidebar;
