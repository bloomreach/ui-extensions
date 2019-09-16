# Siteimprove UI Extension for Bloomreach Experience

This UI Extension integrates Bloomreach Experience with Siteimprove. Siteimprove's all-in-one software helps you perfect your digital presence and turn it into the asset it was meant to be. The integration leverages the Siteimprove CMS plugin.

## How does the UI Extension work?

From the Bloomreach Channel Manager menu, page tools can be opened. In the tools side panel, the Siteimprove extension is loaded to display a report for the current page. The user can navigate around their site to view the Siteimprove analytics and insights, request a re-check of the current page, or navigate to the Siteimprove dashboard for more details.

## Requirements

- A BloomReach Experience Manager (brXM) project running on version 13.2.0 or above.
- An account with Siteimprove, and site crawling setup for the site that is being analyzed.

## How to use the Siteimprove Extension

### Step 1: Configure the extension in brXM

Open the console of your brXM instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```yaml
/siteimprove:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '{}'
  frontend:displayName: Siteimprove
  frontend:extensionPoint: channel.page.tools
  frontend:url: https://bloomreach.github.io/ui-extensions/samples/siteimprove/
```

### Step 2: Start using the extension

The Siteimprove extension should now be available in the Channel Manager. To open it, open the Page manu and select the Tools button. The extension will require you to login with Siteimprove separately.

## Resources

- [Siteimprove](https://siteimprove.com/)
- [BloomReach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)
