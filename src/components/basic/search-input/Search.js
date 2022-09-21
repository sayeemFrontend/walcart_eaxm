import React from "react";
import { search } from "../../../assets";
import "./search.css";

export default function Search(props) {
  const { placeholder = "", icon = true, children = "" } = props;
  const styleSheet = {
    width: props.width || "inherit",
    height: props.height || "inherit",
    background: props.bgColor || "inherit",
    paddingLeft: props.paddingL || "10px",
    borderRadius: props.borderR || "4px",
    fontSize: props.fontSize || "inherit",
  };
  return (
    <div style={styleSheet} className=" search flex w-full h-full items-center">
      {icon && <img src={search} alt="icon" />}
      <input placeholder={placeholder} />
      {children}
    </div>
  );
}
