# Ember Spectrum color picker change log

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
