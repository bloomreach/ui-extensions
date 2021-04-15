# Bynder UI Extension for Bloomreach Experience - v2

This UI Extension integrates Bloomreach Experience with Bynder's digital asset management platform. It leverages Bynder's Compact View v2 component to browse media from Bynder and use these within Bloomreach powered sites.

![Bynder Integration](Bynder_v2.gif)

The Bynder UI Extension in action

## How does the UI Extension work?

From a Bloomreach document, a picker dialog can be opened that loads Bynder's compact view. On first use, this dialog asks the user for a username and password to authenticate with Bynder. The dialog can then be used to browse and select media, for which references are stored in the Bloomreach document. Sites can then use these references to add the selected media to pages.

## Requirements

- A Bloomreach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Bynder with access to a brand portal (yourDomain.getbynder.com).
- (Optional) A OAuth2 application configured on your Bynder portal to allow the extension to register asset usage in Bloomreach.

## Use the Bynder UI Extension in your Bloomreach project

### Step 0 (OPTIONAL): Configure a O2uth2 application in your Bynder portal

For the extension to be able register usage of Bynder assets in Bloomreach, it needs to be able to connect to the Bynder API. To enable this, create a OAuth2 application in your Bynder portal (see Bynder [documentation](https://developer-docs.bynder.com/authentication-oauth2-oauth-apps)). Make sure to select grant type "Client Credentials" and assign the app to a specific user account. It's advised to set up a dedicated user account for this purpose. Select the scopes `asset.usage:read` and `asset.usage:write` (no other scopes are needed). Copy the client ID and client secret to be used in the next step. Make sure to also add the **domain where the extension is hosted** to the HTTP access control list, otherwise the extension will not be able to call the Bynder API because of CORS restrictions.

### Step 1: Configure the extension in Bloomreach

Open the console of your Bloomreach instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```yaml
/bynder:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '{"defaultDomain":"<YOUR_BYNDER_PORTAL_DOMAIN>", "language":
    "en_US", "mode": "SingleSelect", "assetTypes": ["image"], "clientId":
    "<YOUR_CLIENT_ID>", "clientSecret":"<YOUR_CLIENT_SECRET"}'
  frontend:displayName: Bynder
  frontend:extensionPoint: document.field
  frontend:url: <URL_WHERE_UI_EXTENSION_IS_HOSTED>
```

The `frontend:config` property holds a JSON object that (partly) controls the behavior of the Bynder compact view. All of the parameters are optional, and they can be changed according to the Bynder compact view [developer documentation](https://developer-docs.bynder.com/ui-components) (see table at the bottom of the page).

For demo and testing purposes, it's possible to use the Github-hosted version of this extension by setting the `frontend:url` property to `https://bloomreach.github.io/ui-extensions/samples/bynder_v2/`. Do not use this in production!

### Step 2: Add a Bynder field to your document type(s)

Using the document type editor, add an "Open UI String" field to the relevant document type(s). Change the 'path' and 'Default Caption' to values that make sense for your project and set 'ui.extension' to 'bynder' (this needs to match the name of the node created in the previous step.

If your document type uses dynamic content beans, the Bynder field will be available for use in frontend templates immediately. Otherwise you will need to update the content bean(s) of the changed document type(s). When using [Essentials](https://documentation.bloomreach.com/library/setup/introduction.html), this can be done using the [Bean Writer tool](https://documentation.bloomreach.com/library/setup/development-tools.html#beanwriter).

### Step 3: Render the Bynder asset(s) in your frontend

You can now start using the Bynder references that are stored in your documents to render the assets in your frontend (templates).

## Resources

- [Bloomreach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Compact View on the Bynder Knowledge Base](https://help.bynder.com/system/compact-view.htm)
- [Compact View in the Bynder Developer Documentation](https://developer-docs.bynder.com/UI%20components/)
- [Bynder OAuth2 documentation](https://developer-docs.bynder.com/authentication-oauth2-oauth-apps)
