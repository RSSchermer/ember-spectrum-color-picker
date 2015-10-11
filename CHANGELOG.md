# Ember Spectrum color picker change log

## 0.2.0

The `disabled` property is now a two-way binding so dynamically disabling/enabling is now possible.

## 0.1.0

Previously the update function would always return the color formatted as a hexadecimal value. This meant that after
a color was picked, the bound color property would always become a hex value, regardless of the `prefferedFormat` set
or inferred from the initial value.

Now the update function respects the `prefferedFormat` or inferred format and will return a color string formatted
accordingly.
