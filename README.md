# gatsby-plugin-safari-site-icon

![GitHub](https://img.shields.io/github/license/rhysforyou/gatsby-plugin-safari-site-icon.svg?style=flat-square) ![npm (scoped)](https://img.shields.io/npm/v/@rhysforyou/gatsby-plugin-safari-site-icon.svg?style=flat-square)

Adds support for shipping a Safari site icon with your site. Safari site icons
are monochrome, SVG icons which safari uses in place of favicons where provided.

[This section of Apple's developer documentation][docs] gives a good overview of
the subject, though it's worth noting these icons are now used in many other
cases than just pinned sites nowadays.

[docs]: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html

## Installation

```sh
# Yarn
yarn add @rhysforyou/gatsby-plugin-safari-site-icon

# npm
npm install --save @rhysforyou/gatsby-plugin-safari-site-icon
```

## Usage

Add the plugin and its options to your `gatsby-config.js` like so:

```js
module.exports = {
  plugins: [
    {
      resolve: "@rhysforyou/gatsby-plugin-safari-site-icon",
      options: {
        icon: "./src/images/pinned-tab-icon.svg",
        color: "#FF374B"
      }
    }
  ]
};
```

### Options

| Name    | Required | Description                                      |
| :------ | :------- | :----------------------------------------------- |
| `icon`  | ✅       | The path to your icon, relative to the site root |
| `color` | ❌       | The color your icon should be tinted with        |
