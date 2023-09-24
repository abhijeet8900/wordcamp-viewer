import React from "react";
import { isEmpty } from "lodash";

const SidebarHeader = ({ title }) => {
  if (isEmpty(title)) {
    return null;
  }
  return <h2 className="w-full font-bold text-2xl text-primary">{title}</h2>;
};

export default SidebarHeader;
