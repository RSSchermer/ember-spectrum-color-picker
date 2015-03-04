# Changelog

## 0.1.0

Previously the update function would always return the color formatted as a hexadecimal value. This meant that after
a color was picked, the bound color property would always become a hex value, regardless of the `prefferedFormat` set
or inferred from the initial value.

Now the update function respects the `prefferedFormat` or inferred format and will return a color string formatted
accordingly.
