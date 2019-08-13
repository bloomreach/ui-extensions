# Giphy UI Extension for Bloomreach Experience

This UI Extension integrates Bloomreach Experience with Giphy, the first and largest GIF search engine. It leverages the official Giphy API to browse GIFs and use these within Bloomreach powered sites.

![Giphy Integration](giphy.gif)

## How does the UI Extension work?

From a Bloomreach document, a picker dialog can be opened that interacts with Giphy. The initial view shows trending GIFs, and a query can be executed to search GIFS for a certain topic. After selecting a GIF, a reference data object is stored in the Bloomreach document. Sites can then use these references to add the selected GIF to a page.

## Requirements

- A Bloomreach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Giphy, in which an API key has been created.

## Use the Giphy UI Extension in your brXM project

### Step 1: Configure the extension in brXM

Open the console of your brXM instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```yaml
/giphy:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '{"apiKey":"QDdF1iP9pKgOWu5z2X9JFCjhD55KcGTX", "giphyTrendingUrl":"https://api.giphy.com/v1/gifs/trending","giphySearchUrl":"https://api.giphy.com/v1/gifs/search","rating":"G"}'
  frontend:displayName: Giphy
  frontend:extensionPoint: document.field
  frontend:url: https://bloomreach.github.io/ui-extensions/samples/giphy/
```

The `frontend:config` property holds a JSON object that controls the behavior of the Giphy extension. The following properties can be used:

| Property name | Description | Remarks |
|---------------|-------------|---------|
| `apiKey` | To use the GIPHY API, you first have to obtain an API Key. This key will be used in the extension. More details can be found [here](https://developers.giphy.com/docs/api/).| mandatory |
| `giphyTrendingUrl` | This property holds the base url for requesting trending GIFS from Giphy. If this property is omitted, a hardcoded value is used. | optional |
| `giphySearchUrl` | This property holds the base url for searching GIFS from Giphy. If this property is omitted, a hardcoded value is used. | optional |
| `rating` | By setting the rating property, the content returned from the Giphy API can be made safe for different audiences. More details and a list of accepted values can be found [here](https://developers.giphy.com/docs/optional-settings#rating). | optional |

### Step 2: Add a Giphy field to your document type(s)

Using the document type editor, add an "Open UI String" field to the relevant document type(s). Change the 'path' and 'Default Caption' to values that make sense for your project and set 'ui.extension' to 'giphy' (this needs to match the name of the node created in the previous step).

If your project uses dynamic content beans (default since 13.2.0), the Giphy field will be available for use in frontend templates immediately. If your project does not use dynamic content beans, you will need to update the content bean(s) of the changed document type(s). When using [Essentials](https://documentation.bloomreach.com/library/setup/introduction.html), this can be done using the [Bean Writer tool](https://documentation.bloomreach.com/library/setup/development-tools.html#beanwriter).

You can now start using the plugin in your documents.

### Step 3: Render the GIF in your frontend template(s)

You can now start using the Giphy GIF object reference that is stored in your document to render the GIF in your frontend template(s). More details about the object reference schema can be found [here](https://developers.giphy.com/docs/api/schema#gif-object).

## Resources

- [Bloomreach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
- [Giphy API documentation](https://developers.giphy.com/docs/api#quick-start-guide)
- [Giphy Homepage](https://giphy.com/)
