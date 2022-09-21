import "./button.css";

import React from "react";

export default function Button(props) {
  const { bgColor, color, border, borderR, width, height } = props;
  const styleSheet = {
    backgroundColor: bgColor || "inherit",
    color: color || "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: border || "inherit",
    borderRadius: borderR || "inherit",
    width: width || "inherit",
    height: height || "inherit",
  };
  return (
    <div style={styleSheet} className="button">
      {props.title && props.title}
    </div>
  );
}
