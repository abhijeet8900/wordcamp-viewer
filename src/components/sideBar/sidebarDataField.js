import { isEmpty } from "lodash";
import React from "react";

const SidebarDataField = ({ label, value, valueLink }) => {
  if (isEmpty(value) || isEmpty(label)) {
    return null;
  }
  return (
    <div>
      <span className="w-full mt-2 text-xl font-semibold ">{`${label} : `}</span>
      {valueLink ? (
        <a className="text-base" href={valueLink}>
          <span>{value}</span>
        </a>
      ) : (
        <span className="text-base">{value}</span>
      )}
    </div>
  );
};

export default SidebarDataField;
