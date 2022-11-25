import React from "react";

const Sidebar = () => {
  return (
    <div
      className="fixed min-h-screen hidden  md:flex flex-col lg:w-64 md:w-20
     border shadow-xl justify-between items-center"
    >
      <div>Logo</div>
      <div>
        <h2>Links</h2>
      </div>

      <div className="relative my-3">
        <h2>Bottom </h2>
        <p className="absolute -top-4">absolute</p>
      </div>
    </div>
  );
};

export default Sidebar;
