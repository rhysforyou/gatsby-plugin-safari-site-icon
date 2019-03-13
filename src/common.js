const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

function createContentDigest(content) {
  let digest = crypto
    .createHash(`sha1`)
    .update(content)
    .digest(`hex`);

  return digest;
}

exports.iconPath = function iconPath(icon, directory) {
  const iconData = fs.readFileSync(icon);
  const iconDigest = createContentDigest(iconData);
  return path.join(directory, `pinned-tab-icon.${iconDigest}.svg`);
};
