import React from "react";
import Posts from "../components/Posts";
import Stories from "../components/Stories";
import MiniProfile from "../components/MiniProfile";
const Home = () => {
  return (
    <div className="relative bg-sky-500 h-screen w-screen overflow-x-hidden sm:max-w-full lg:max-w-7xl flex flex-col items-center">
      <div className="flex flex-row">
        <Stories />
        <MiniProfile />
      </div>

      <Posts />
    </div>
  );
};

export default Home;
