# Bynder CKEditor Plugin for Bloomreach Experience

With the [Bynder Open UI Extension](../) you can use Bynder images seamlessly in document fields. But what if you (also) want pick images from Bynder and insert them directly into rich text fields? For that you need a custom CKEditor plugin. We provide a reference implementation of such a plugin here, which can be copied/forked and adapted to the specific needs of your project.

## Requirements
- A running Bloomreach Experience Manager (brXM) project.
- An account with Bynder with access to a brand portal (yourDomain.getbynder.com).

## Installation 

Start with copying the source code in this sample plugin to your project. Information on how to install a custom CKEditor plugin in your Bloomreach project can be found on [this documentation page](https://documentation.bloomreach.com/library/concepts/document-types/html-fields/ckeditor-plugins.html), in the section titled "Add a custom CKEditor plugin". The following additional steps need to be taken to use this plugin:

#### Add iframedialog plugin
The bynder plugin has a dependency on the *iframedialog* CKEditor plugin. This plugin is not installed by default, the code can be downloaded from [here](https://ckeditor.com/cke4/addon/iframedialog). Follow the same steps to install this plugin as well.

#### Allow custom data attributes on image tag
The plugin adds an `<img>` tag to the edited document, and sets a few additional data attributes on the tag: a data-btype attribute to indicate that it is an image from bynder and a data-bid attribute containing the Bynder UUID of the selected image. You may want to add additional custom attributes for your project as well.

With the default settings of the CKEditor HTML cleaner, these custom attributes will be removed when the document is saved. To make sure this does not happen, add the `data-btype` and `data-bid` to the node `/hippo:configuration/hippo:modules/htmlprocessor/hippo:moduleconfig/richtext/img/attributes`. Make sure this is also auto-exported or manually added to bootstrap configuration.

#### Optional: add translation for the toolbar button label

If you want to have the toooltip for the Bynder Image Picker button available in a language other than english, you can add additional translation files in the `/lang` folder.


## Resources
- [Bynder Open UI Extension](../)
- [Bloomreach CKEditor plugins documentation](https://documentation.bloomreach.com/library/concepts/document-types/html-fields/ckeditor-plugins.html)
- [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
- [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/)
