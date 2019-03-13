import React from "react";
import { iconPath } from "./common.js";
import path from "path";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { icon, color = "black" } = pluginOptions;

  let headComponents = [
    <link rel="mask-icon" href={iconPath(icon, "/icons")} color={color} />
  ];

  setHeadComponents(headComponents);
};
