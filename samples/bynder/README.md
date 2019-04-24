# BloomReach Bynder UI Extension

This UI Extension integrates BloomReach Experience with Bynder's digital asset management platform. It leverages Bynder's compact view component to browse media from Bynder and use these within BloomReach powered sites.

##How does the UI Extension work?

From a BloomReach document, a picker dialog can be opened that load Bynder's compact view. On first use, this dialog asks the user for a username and password to authenticate with Bynder. The dialog can then be used to browse and select media, for which references are stored in the BloomReach document. Sites can then use these references to add the selected media to pages.

##Requirements
- A BloomReach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Bynder with access to a brand portal (yourIdentifier.getbynder.com).

##Configuration

First, configure the extension in the brXM Console. Add a node of type `frontend:uiExtension` named 'bynder' as child node of the node at the path `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then add the following properties:

- `frontend:displayName`: Value should be set to 'Bynder'
- `frontend:extensionPoint`: Value should be set to 'document.field'
- `frontend:url`: Value should be set to 
- `frontend:config`: 

##Resources
- [BloomReach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
- [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/) 