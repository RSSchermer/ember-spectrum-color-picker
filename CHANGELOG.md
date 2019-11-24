# Ember Spectrum color picker change log

## 0.10.0

Updated for ember-cli 3.12, thanks to @alexdiliberto! This updates the NodeJS version requirement from 4.0 to 8.0.

## 0.9.0

Exposes `getOptions`, `setCallbacks` and `initSpectrum` to allow easier customization from subclassed components,
thanks to @nateevans!

## 0.8.0

The `palette` option will now dynamically update, thanks to @coreypmurphy.

## 0.7.0

Adds configuration option to disable including the default css in case you wish to provide your own css:

```js
// config/environment.js

...

let ENV = {
  ...

  emberSpectrumColorPicker: {
    includeStyles: false
  }
}

...
```

## 0.6.0

This version drops the dependency on Bower and switches to NPM to manage the Spectrum.js dependency. If this causes
problems with your application, please let me know in [issue 17](https://github.com/RSSchermer/ember-spectrum-color-picker/issues/17).

## 0.5.0

Adds `maxSelectionSize` attribute, which sets the maximum number of colors shown on the palette (thanks @sethphillips!).

## 0.4.0

Adds `onMove`, `onShow`, and `onHide` attributes which can be set to an action. The action handlers will receive the
new color value as a parameter upon a color change:

``` handlebars
{{spectrum-color-picker
    color=teamColor
    onShow=(action "pickerOpened")
    onHide=(action "pickerClosed")
    onMove=(action "userMovedColorPicker")
}}
```

## 0.3.0

Adds an `onChange` attribute which can be set to an action. The action handler will receive the new color value as
a parameter upon a color change:

``` handlebars
{{spectrum-color-picker color=teamColor onChange=(action "colorChanged")}}
```

## 0.2.0

The `disabled` property is now a two-way binding so dynamically disabling/enabling is now possible.

## 0.1.0

Previously the update function would always return the color formatted as a hexadecimal value. This meant that after
a color was picked, the bound color property would always become a hex value, regardless of the `prefferedFormat` set
or inferred from the initial value.

Now the update function respects the `prefferedFormat` or inferred format and will return a color string formatted
accordingly.
