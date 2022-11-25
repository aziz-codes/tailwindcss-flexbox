import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Sidebar from "./components/Sidebar";
import { Home, Explore, Notifications, Profile, Search } from "./pages/index";
const App = () => {
  return (
    <div className="flex relative">
      <div className="lg:w-64 md:w-20">
        <Sidebar />
        <BottomNavigation />
      </div>
      <div className="ml-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
