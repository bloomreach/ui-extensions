# Bynder UI Extension for Bloomreach Experience

This UI Extension integrates Bloomreach Experience with Bynder's digital asset management platform. It leverages Bynder's Compact View component to browse media from Bynder and use these within Bloomreach powered sites.

![Bynder Integration](Bynder.gif)
The Bynder UI Extension in action

## How does the UI Extension work?

From a Bloomreach document, a picker dialog can be opened that loads Bynder's compact view. On first use, this dialog asks the user for a username and password to authenticate with Bynder. The dialog can then be used to browse and select media, for which references are stored in the Bloomreach document. Sites can then use these references to add the selected media to pages.

## Requirements

- A Bloomreach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Bynder with access to a brand portal (yourDomain.getbynder.com).

## Use the Bynder UI Extension in your brXM project

### Step 1: Configure the extension in brXM

Open the console of your brXM instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```yaml
/bynder:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '{"dataMode":"single", "dataAssetTypes":"image","dataDefaultEnvironment":"https://yourDomain.getbynder.com"}'
  frontend:displayName: Bynder
  frontend:extensionPoint: document.field
  frontend:url: https://bloomreach.github.io/ui-extensions/samples/bynder/
```

The config property holds a JSON object that (partly) controls the behavior of the Bynder Compact View module. The value of the 'dataDefaultEnvironment' should always be changed to match your Bynder environment, the other attributes can be changed according to the Bynder Compact View [developer documentation](https://developer-docs.bynder.com/UI%20components/).

### Step 2: Add a Bynder field to your document type(s)

Using the document type editor, add an "Open UI String" field to the relevant document type(s). Change the 'path' and 'Default Caption' to values that make sense for your project and set 'ui.extension' to 'bynder' (this needs to match the name of the node created in the previous step.

If your project uses dynamic content beans (default in 13.2.0), the Bynder field will be available for use in frontend templates immediately.

If your project does not use dynamic content beans, you will need to update the content bean(s) of the changed document type(s). When using [Essentials](https://documentation.bloomreach.com/library/setup/introduction.html), this can be done using the [Bean Writer tool](https://documentation.bloomreach.com/library/setup/development-tools.html#beanwriter).

You can now start using the plugin in your documents.

### Step 3: Render the Bynder assets in your frontend templates

You can now start using the Bynder references that are stored in your documents to render the assets in your frontend templates.

### (Optional) Step 4: Add a Bynder CKeditor plugin to your project

To be able to add images directly into rich text fields, a Bynder CKEditor plugin is needed. A sample implementation of such as plugin is included in this repository [here](./ckeditor).

## Resources

- [Bloomreach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
- [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/)
