import React from "react";
import {
  HomeIcon,
  HeartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
const BottomNavigation = () => {
  return (
    <div className="fixed md:hidden bottom-0 h-10 shadow-md border w-full">
      <div className="w-screen flex flex-row h-full justify-between pl-2 pr-2 items-center">
        <HomeIcon className="icons" />
        <HeartIcon className="icons" />
        <MagnifyingGlassIcon className="icons" />
        <UserIcon className="icons" />
        <ClockIcon className="icons" />
      </div>
    </div>
  );
};

export default BottomNavigation;
