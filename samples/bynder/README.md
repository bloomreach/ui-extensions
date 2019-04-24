# BloomReach Bynder UI Extension

This UI Extension integrates BloomReach Experience with Bynder's digital asset management platform. It leverages Bynder's compact view component to browse media from Bynder and use these within BloomReach powered sites.

![Bynder Integration](Bynder.gif)
The Bynder UI Extension in action

## How does the UI Extension work?

From a BloomReach document, a picker dialog can be opened that load Bynder's compact view. On first use, this dialog asks the user for a username and password to authenticate with Bynder. The dialog can then be used to browse and select media, for which references are stored in the BloomReach document. Sites can then use these references to add the selected media to pages.

## Requirements
- A BloomReach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Bynder with access to a brand portal (yourIdentifier.getbynder.com).

## Configuration

### Step 1: Configure the extension in brXM
Go to the console of your brXM instance and add a node of type `frontend:uiExtension` named 'bynder' as child node of the node at the path `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then add the following properties and values:

- `frontend:displayName`: 'Bynder'
- `frontend:extensionPoint`: 'document.field'
- `frontend:url`: 'https://bloomreach.github.io/ui-extensions/samples/bynder/'
- `frontend:config`: '{"dataMode":"single", "dataAssetTypes":"image","dataDefaultEnvironment":"https://***yourIdentifier***.getbynder.com"}'

The config property holds a JSON object that (partly) controls the behavior of the Bynder Compact View module. The value of the 'dataDefaultEnvironment' should always be changed to match your Bynder environment, the other attributes can be changed according to the Bynder Compact View [developer documentation](https://developer-docs.bynder.com/UI%20components/).

### Step 2: Add a bynder field to your document type(s)

Using the document type editor, add an "Open UI String" field to the relevant document type(s). Change the 'path' and 'Default Caption' to values that make sense for your project and set 'ui.extension' to 'bynder' (this needs to match the name of the node created in the previous step.

You will need to update the content bean(s) of the changed document type(s). When using [Essentials](https://documentation.bloomreach.com/library/setup/introduction.html), this can be done using the [Bean Writer tool](https://documentation.bloomreach.com/library/setup/development-tools.html#beanwriter).

You can now start using the plugin in your documents.

### Step 3: Use the bynder assets in your templates

You can now start using the references to Bynder assets that are stored in your documents in your templates.


## Resources
- [BloomReach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
- [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/) 