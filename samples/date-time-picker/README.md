## Date-Time-Picker
OpenUI extension for picking date and time in brXM cms document fields. It uses [this datetimepicker lib](http://jquense.github.io/react-widgets/api/DateTimePicker/)

Source code is at https://code.onehippo.org/sandbox/openui-datetimepicker
### Install

*  Add the extension configuration at /hippo:configuration/hippo:frontend/cms/ui-extensions/:

```yaml
/datetimepicker:
  jcr:primaryType: frontend:uiExtension
  frontend:config: "{\r\n  \"dropUp\": false,\r\n  \"editFormat\": \"MMM dd, yyyy\"\
    ,\r\n  \"format\": \"MMM dd, yyyy\",\r\n  \"showTime\": true,\r\n  \"step\": 30,\r\
    \n   \"readOnly\": false\r\n}"
  frontend:displayName: DateTimePicker
  frontend:extensionPoint: document.field
  frontend:initialHeightInPixels: 400
  frontend:url: https://bloomreach.github.io/ui-extensions/samples/date-time-picker/build/
```

* Then [Add this extension to a document type](https://documentation.bloomreach.com/library/concepts/open-ui/configure-a-document-field-extension.html)

### Configuration

* Here's a sample configuration on the uiExtension node mentioned above:

```json
{
  "dropUp": false,
  "editFormat": "MMM dd, yyyy",
  "format": "MMM dd, yyyy",
  "showTime": true,
  "step": 30,
   "readOnly": false
}
```

* Above configuration properties map to the properties listed on the js lib [page](http://jquense.github.io/react-widgets/api/DateTimePicker/) 
