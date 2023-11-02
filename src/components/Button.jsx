import React from "react";
import "./../App.scss";

export const Button = ({ children, type, props }) => {
  return (
    <button {...props} className={"btn btn-" + type}>
      {children}
    </button>
  );
};
