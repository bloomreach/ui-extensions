# Bloomreach OSM Location picker
This project is a Bloomreach [OpenUI extension](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html). The purpose of the extension is to make it easy for editors to pick locations. In this case by using a map and a search bar.

![screenshot](./images/screenshot_dialog.png?raw=true)

The extension uses OpenStreetMaps because there isn't any kind of quota or accout needed, so it's easier to set up.

## How to setup the extension in your project?

1. You will have to load the extension, either on its own server (npm/apache) or somehow inside Bloomreach (cms/site).
2. You'll have to define the extension under `/hippo:configuration/hippo:frontend/cms/ui-extensions`. For example:
![screenshot](./images/Screenshot_console.png?raw=true)
3. [Add this extension to a document type](https://documentation.bloomreach.com/library/concepts/open-ui/configure-a-document-field-extension.html).
