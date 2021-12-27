# Gmail Chrome Extension

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

This is a custom extension I use to make Gmail more readable in Chrome.

# How to use

1.  Download this repo on your machine.
2.  _Optional:_ Customise the styles (see below).
3.  Visit `chrome://extensions/`
4.  Turn on [developer mode](https://developer.chrome.com/docs/extensions/mv3/faq/#faq-dev-01)
5.  Click **Load Unpacked** and upload the folder you downloaded in step 1. You'll need to repeat this step every time you update any of the files inside the folder.
6.  Visit [gmail.com](https://mail.google.com/mail/u/0/). Voilà!

# Customise

## Focus mode

Visit `chrome://extensions/` and click on the extension's **Details** button. Scroll down to **Extension options**. This should open a popup that lets you hide various part of the Gmail interface, such as Hangouts and Meets. The side panel isn't an option since Gmail already lets you do collapse it.

## Highlight color

Update the `--primary` and `--primary-light` variables in `styles.css`.

## Typography

Import your font in `typography.css` and update the `font-family` in `styles.css`.

## Customise labels

Update `labels` in `scripts.js` with the labels you want to customise and the colors. You can add a new label in the following ways:

**Option 1:** Use the colors values
You should be able to use any value that is valid in CSS (hex, rgb, rgba, etc...)

```js
{ displayName: "Payments", bgColor: "#FFE6E2", color: "#CA3214" }
```

**Option 2:** Use Radix UI color combinations
In `scripts.js`, there is a list of 19 `presetColors` based on the [Radix UI](https://www.radix-ui.com/colors) accessible color palette. You can use them like this:

```js
{ displayName: "Payments", ...colorPresets.red }
```

# Contribute

Please feel free to submit PRs or [create an issue](https://github.com/serenastorm/gmail-chrome-extension/issues/new).\
\
Made by ♥ by [Serena Antonetti](https://github.com/serenastorm)
