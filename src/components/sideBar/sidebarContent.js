import { isEmpty } from "lodash";
import React from "react";

function SidebarContent({ excerpt }) {
  if (isEmpty(excerpt)) {
    return null;
  }
  return (
    <p
      className="mt-4 h-[454px] max-h-[454px] leading-[24px] text-lg  overflow-ellipsis overflow-hidden"
      dangerouslySetInnerHTML={{ __html: excerpt }}
    ></p>
  );
}

export default SidebarContent;
