# Cludinary UI Extension for Bloomreach Experience

This UI Extension integrates Bloomreach Experience with the Cloudinary digital asset management platform. It leverages the Cloudinary Media Library Widget to browse media from Cloudinary and use these within Bloomreach powered sites.

![Cloudinary Integration](Cloudinary.gif)

The Cloudinary UI Extension in action

## How does the UI Extension work?

From a Bloomreach document, a picker dialog can be opened that loads the Cloudinary Media Library Widget. On first use, this dialog asks the user for a username and password to authenticate with Cloudinary. The dialog can then be used to browse, edit and select media, for which references are stored in the Bloomreach document. Sites can then use these references to add the selected media to pages.

## Requirements

- A Bloomreach Experience Manager (brXM) project running on version 14.2.0 or above.
- An account with Cloudinary with a Cloud set up (including an API key).

## Use the Cloudinary UI Extension in your Bloomreach project

### Step 1: Configure the extension in Bloomreach

Open the console of your Bloomreach instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```yaml
/cloudinary:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '{"cloudName":"<YOUR_CLOUD_NAME>", "apiKey":"<YOUR_API_KEY>","multiple":false, "resourceType":"image"}'
  frontend:displayName: Cloudinary
  frontend:extensionPoint: document.field
  frontend:url: <URL_WHERE_UI_EXTENSION_IS_HOSTED>
```

The config property holds a JSON object that (partly) controls the behavior of the Cloudinary Media Library Widget. The value of the 'cloudName' and 'apiKey' should always be changed to match your Cloudinary environment and associated API key, the other attributes can be changed according to the Cloudinary Media Library Widget [developer documentation](https://cloudinary.com/documentation/media_library_widget).

For demo and testing purposes, it's possible to use the Github-hosted version of this extension by setting the 'frontend:url' property to 'https://bloomreach.github.io/ui-extensions/samples/cloudinary/'. Do not use this in production!

### Step 2: Add a Cloudinary field to your document type(s)

Using the document type editor, add an "Open UI String" field to the relevant document type(s). Change the 'path' and 'Default Caption' to values that make sense for your project and set 'ui.extension' to 'cloudinary' (this needs to match the name of the node created in the previous step.

If your document type uses dynamic content beans, the Cloudinary field will be available for use in frontend templates immediately. Otherwise you will need to update the content bean(s) of the changed document type(s). When using [Essentials](https://documentation.bloomreach.com/library/setup/introduction.html), this can be done using the [Bean Writer tool](https://documentation.bloomreach.com/library/setup/development-tools.html#beanwriter).

You can now start using the plugin in your documents.

### Step 3: Render the Cloudinary asset(s) in your frontend

You can now start using the Cloudinary references that are stored in your documents to render the assets in your frontend (templates).

## Resources

- [Bloomreach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Cloudinary Media Library Widget documentation](https://cloudinary.com/documentation/media_library_widget)
