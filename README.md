ember-spectrum-color-picker
==============================================================================

Simple Ember color picker component based on [spectrum.js](http://bgrins.github.io/spectrum/).


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-spectrum-color-picker
```

Usage
------------------------------------------------------------------------------

Example:

``` handlebars
{{spectrum-color-picker color=teamColor}}
```

The `color` property should be set and will be updated through Ember's two-way bindings.

It's also possible to bind actions to the `onChange`, `onMove`, `onShow`, and `onHide` attributes. The action handler will receive the new color as a
parameter:

``` handlebars
{{spectrum-color-picker
    color=teamColor
    onChange=(action "colorChanged")
    onShow=(action "pickerOpened")
    onHide=(action "pickerClosed")
    onMove=(action "userMovedColorPicker")
}}
```

The following properties can be set to customize a particular color picker:

* `allowEmpty` (default: `false`): whether or not the color value may be null.
* `disabled` (default: `false`): when set to true, the color picker is disabled.
* `showInput` (default: `false`): whether or not to show an input field in the color picker with the current color
  value.
* `preferredFormat` (default: `null`): the preferred format for the color values displayed in the input. Values can be
  `"hex"`, `"hex3"`, `"hsl"`, `"rgb"` or `"name"`. When set to null, the format will adapt to a previously entered
  format.
* `showAlpha` (default: `false`): whether or not to allow setting the alpha value in the color picker.
* `showInitial` (default: `false`): whether or not to show a box with the original color for comparison.
* `showButtons` (default: `true`): whether or not to show the 'choose' and 'cancel' buttons.
* `showPalette` (default: `false`): whether or not to show a color palette.
* `showPaletteOnly` (default: `false`): when set to true, only a color palette is shown.
* `palette` (default: `[]`): array of color values to show in the palette. Can be an array of arrays, where each array
  is a row in the palette. Pass this as a JSON string in the HBS file, like
  `palette='[["red","lime"],["yellow","blue"]]'`.
* `togglePaletteOnly` (default: `false`): initialy shows only the palette, but a 'more' button can be clicked for custom
  colors.
* `showSelectionPalette` (default: `false`): shows a palette with the colors that were picked previously by the user.
* `hideAfterPaletteSelect` (default: `false`): when set to true, the palette will close when a color is selected.
* `maxSelectionSize` (default: 7): sets the maximum number of colors shown on the palette.
* `moveFiresChange` (default: `false`): when set to true, the color value will be updated in real time, instead of only
  once the user clicks the 'choose' button.
* `clickoutFiresChange` (default: `false`): when set to true, the color value will also update when the user clicks
  outside the widget, instead of only once the user clicks the 'choose' button.
* `chooseText` (default: `'Choose'`): the text displayed on the 'choose' button.
* `cancelText` (default: `'Cancel'`): the text displayed on the 'cancel' button.
* `togglePaletteMoreText` (default: `'More'`): the text displayed on the 'more' button when `togglePaletteOnly` is set
  to true.
* `togglePaletteLessText` (default: `'Less'`): the text displayed on the 'less' button when `togglePaletteOnly` is set
  to true.
* `appendTo` (default: `'body'`): the element the color picker widget is appended to. Changing this can help resolve
  issues with opening the colorpicker in a modal dialog or fixed position container, for instance.
* `localStorageKey` (default: `'spectrum-color-picker'`): the key used for local storage when `showSelectionPalette` is
  set to true.
* `flatMode` (default: `false`): when set to true, the color picker is always shown fully expanded.

For a more detailed documentation on these options, see the [spectrum.js documentation](http://bgrins.github.io/spectrum/).

If you want to set different defaults for all color pickers in your application, extend the component and override the
defaults with your own:

```javascript
// app/components/spectrum-color-picker.js
import SpectrumColorPickerComponent from 'ember-spectrum-color-picker/components/spectrum-color-picker';

export default SpectrumColorPickerComponent.extend({
  showInput: true,

  showAlpha: true
});
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
