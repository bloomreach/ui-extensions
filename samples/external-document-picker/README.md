# External Document Picker UI Extension for Bloomreach Experience

This UI Extension offers a generic UI to be used as an external document picker (original external document picker: https://github.com/bloomreach-forge/external-document-picker). The UI allows you to browse through external resources and leverages ability to relate external documents/images/assets to a document in BrXM.
 

## How does the UI Extension work?

From a Bloomreach document, a picker dialog can be opened that loads the External Document Picker UI. ... todo


## Use the External Document Picker UI Extension in your brXM project

### Step 1: Configure the extension in brXM
Open the console of your brXM instance and browse to the node `/hippo:configuration/hippo:frontend/cms/ui-extensions`. Then import the following YAML snippet:

```
/<plugin>:
  jcr:primaryType: frontend:uiExtension
  frontend:config: '...'
  frontend:displayName: ..
  frontend:extensionPoint: document.field
  frontend:url: https://bloomreach.github.io/ui-extensions/samples/external-document-picker/build
```

The config property holds a JSON object that (partly) controls the behavior of the External Document Picker.

### Step 2: Add a External Document Picker to your document type(s)

todo

### Step 3: Render the External Document Picker assets in your frontend templates

todo

## Resources
- [Bloomreach UI Extensions Documentation](https://documentation.bloomreach.com/library/concepts/open-ui/introduction.html)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3002) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
