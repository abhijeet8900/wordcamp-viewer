import { isEmpty } from "lodash";
import React from "react";

const Tabs = ({ options = [], onClick }) => {
  if (isEmpty(options)) {
    return null;
  }

  return (
    <div className="y w-full flex  gap-x-2 justify-evenl px-4 mb-5 ">
      {options.map((tab, index) => (
        <span
          key={index}
          className="w-full px-4 shadow-md border-b-2 text-black font-bold text-center cursor-pointer hover:bg-blue-400 "
          onClick={() => {
            onClick(tab.id);
          }}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
