/*
 * Copyright 2019 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
  "use strict";

  function iterate (object, func) {
    var property;
    for (property in object) {
      if (object.hasOwnProperty(property)) {
        func(property, object[property]);
      }
    }
  }

  function isEmpty (value) {
    return value === undefined || value === null || value === "";
  }

  function getNestedValue(obj, path) {
    path = path.split('.');
    var value = obj;
    for (var i = 0; i < path.length; i++) {
      value = value[path[i]];
      if (isEmpty(value)) return null;
    }
    return value;
  }

  function setElementAttributes (element, attributeParameterMap, parameters) {
    iterate(attributeParameterMap, function (attribute, parameterName) {
      var parameterValue = getNestedValue(parameters, parameterName);
      if (isEmpty(parameterValue)) {
        element.removeAttribute(attribute);
      } else {
        element.setAttribute(attribute, parameterValue);
      }
    });
  }

  function disableRegisteredCKEditorDialog (ckeditorEvent) {
    ckeditorEvent.data.dialog = null;
  }

  function initImagePicker (editor) {

    var IMAGE_ATTRIBUTE_PARAMETER_MAP = {
      'data-bid': 'databaseId',
      alt: 'description',
      src: 'urlSelectedVariant'
    },
    LANG = editor.lang.bynderimagepicker;

    function openImagePickerDialog (element = null) {
      console.log("opening dialog");
      editor.openDialog('pickerDialog');
      var pickerDialog = window.CKEDITOR.dialog.getCurrent();
      console.log(pickerDialog);
      if (element != null) pickerDialog.parts.contents.setAttribute("data-bid", element.getAttribute("data-bid"));
      else pickerDialog.parts.contents.setAttribute("data-bid", "");
      pickerDialog.parts.footer.hide();
      pickerDialog.on("assetSelected", assetListener);
    }

    editor.ui.addButton('BynderPickImage', {
      label: LANG.imageTooltip,
      command: 'pickBynderImage',
      toolbar: 'insert,6',
      icon: 'plugins/bynderimagepicker/icons/bynderimagepicker.png',
      allowedContent: 'img[!data-btype,!data-bid,!src,alt]',
      requiredContent: 'img[!data-btype,!data-bid,!src]'

    });

    editor.addCommand('pickBynderImage', {
      exec: function () {
        openImagePickerDialog();
      }
    });

    function insertBynderImage (parameters) {
      var img = editor.document.createElement('img');
      setElementAttributes(img, IMAGE_ATTRIBUTE_PARAMETER_MAP, parameters);
      img.setAttribute('data-btype', 'bynder');
      editor.insertElement(img);
    }

    function isBynderImage (element) {
      return !element.isReadOnly()
        && element.is('img')
        && element.getAttribute('data-btype') === 'bynder';
    }

    editor.on('doubleclick', function (event) {
      var clickedElement = event.data.element;

      if (isBynderImage(clickedElement)) {
        disableRegisteredCKEditorDialog(event);
        openImagePickerDialog(clickedElement);
      }
    }, null, null, 30); // use a higher priority than 10 to overwrite the external image dialog

    var assetListener = function (event) {
      insertBynderImage(event.data);
    };

  }

  CKEDITOR.plugins.add('bynderimagepicker', {
    requires: ['iframe'],
    icons: 'bynderimagepicker',
    hidpi: false,
    lang: 'en',

    init: function (editor) {
      CKEDITOR.dialog.addIframe('pickerDialog', 'Insert Bynder Image', this.path + 'dialogs/picker.html', 900, 600, function () { /*oniframeload*/});
      initImagePicker(editor);
    }

  });
}());
