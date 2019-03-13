const fs = require("fs");
const path = require("path");

const svgo = require("./svgo");
const { iconPath } = require("./common");

exports.onPostBootstrap = async (_args, pluginOptions) => {
  const { icon, color = "black" } = pluginOptions;

  if (icon == null || !fs.existsSync(icon)) {
    throw `icon (${icon}) does not exist as defined in gatsby-config.js. Make sure the file exists relative to the root of the site.`;
  }

  const outDirectory = path.join("public", "icons");
  const outPath = iconPath(icon, outDirectory);
  const iconData = fs.readFileSync(icon);

  //create destination directory if it doesn't exist
  if (!fs.existsSync(outDirectory)) {
    fs.mkdirSync(outDirectory, { recursive: true });
  }

  const optimizedIconData = await svgo.optimize(iconData.toString("utf8"));
  fs.writeFileSync(outPath, optimizedIconData.data);
};
