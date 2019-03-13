import React from "react";
import { iconPath } from "./common.js";
import path from "path";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { icon, color = "black" } = pluginOptions;
  const publicPath = path.join("public", "icons");

  let headComponents = [
    <link rel="mask-icon" href={iconPath(icon, publicPath)} color={color} />
  ];

  setHeadComponents(headComponents);
};
