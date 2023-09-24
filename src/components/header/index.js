import React from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <a href="https://central.wordcamp.org/" className="no-underline flex">
      <h1 className="w-full flex justify-center items-center text-primary font-bold text-center text-6xl my-4 leading-normal">
        <Icon
          icon="uil:wordpress"
          style={{ fontSize: "72px", marginRight: "16px" }}
        />{" "}
        WordCamp Viewer
      </h1>
    </a>
  );
};

export default Header;
