import "./button.css";

import React from "react";

export default function Button(props) {
  const {
    bgColor,
    btnColor,
    border,
    borderR,
    width,
    height,
    onClick = () => {},
  } = props;
  const styleSheet = {
    backgroundColor: bgColor || "inherit",
    color: btnColor || "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: border || "inherit",
    borderRadius: borderR || "inherit",
    width: width || "inherit",
    height: height || "inherit",
  };
  return (
    <div onClick={onClick} style={styleSheet} className="button">
      {props.title && props.title}
    </div>
  );
}
