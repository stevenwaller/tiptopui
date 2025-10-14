---
sidebar_position: 2
---

# CSS Variables

Tip Top UI uses CSS variables (custom properties) to define colors, sizes, paddings and other properties. You can customize the CSS variables by defining them in your own stylesheets.

```css
:root {
  --tipTop-color-primary: "#209f47";
  --tipTop-fontFamily-text: "Comic Sans";
}
```

The documentation for each component includes the unique CSS variables they use.

## Variable naming conventions

```
--tipTop-<ComponentName>-<partName>--<componentVariant>-<state>__<propertyGroup>-<propertyName>--<propertyVariant>: <value>;
```

- `tipTop`: Required prefix to avoid naming conflicts with third party CSS variables
- `ComponentName`: Pascal cased name of the component. Assumed to be the root or top most element of the component.
- `partName`: Part of the component. Examples:
  - `child`: The inner most element that contains the `children` prop
  - `slot`: The container around a slot
  - etc...
- `componentVariant`: Variant of the component. Examples:
  - `primary`
  - `secondary`
  - `success`
  - etc...
- `state`: State of the component. Examples:
  - `hovered`
  - `focused`
  - `active`
  - `disabled`
- `propertyGroup`: Namespace to group related properties together. Examples:
  - `bgColorMix`: Group all properties needed for a background color mix function
  - `textColorMix`: Group all properties needed for a text color mix function
- `property`: The required property of the CSS variable. Tends to match the a CSS property name. Examples:
  - `color`
  - `fontSize`
  - `padding`
  - `margin`
  - `borderRadius`
  - etc...
- `propertyVariant`: Variant of the property. Examples:
  - `sm`
  - `md`
  - `lg`
  - etc...

Only the `tipTop` prefix and the `property` are required. All other parts are optional and should only be included if they make sense for the specific CSS variable.

### Examples

Global CSS variable that applies to all components.

```css
/* --tipTop__<propertyName>: <value>; */
--tipTop__color: "#fff";
```

CSS variable that applies to a specific component.

```css
/* --tipTop-<ComponentName>__<propertyName>: <value>; */
--tipTop-Button__color: "#209f47";
```
