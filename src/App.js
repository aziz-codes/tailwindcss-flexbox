import React from "react";

const App = () => {
  return (
    <div className="flex flex-wrap gap-4 mx-2 my-2 flex-col lg:flex-row">
      <div className="h-44 bg-red-500 flex-auto flex-shrink lg:max-w-lg max-w-full">
        flex-1
      </div>
      <div className="h-44 bg-sky-500 flex-auto">flex-2</div>
      <div className="h-44 bg-green-500 flex-auto">flex-3</div>
    </div>
  );
};

export default App;
