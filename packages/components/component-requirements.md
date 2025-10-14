# Component plan

Rules that apply to all components

## Inspiration

Look at how the [Button component](../button/) for patterns and prop usage.

## CSS and Props

Read the [Styling](../../../../apps/docs/docs/GetStarted/Customization/styling.md) and [CSS Variables](../../../../apps/docs/docs/GetStarted/Customization/cssVariables.md) docs for rules and generic props

## Generic Props for all top level components

**classNames**

Example from button component

```
export type ButtonParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'
  | 'loader'

classNames?: {
  [key in ButtonParts]?: string
}
```

**Margins**

- mt?: string
- mb?: string
- ms?: string
- me?: string

**Style Prop**

- style?: CSSProperties

**Styles**

Allows you to add inline styles to the parts of a component

Example for Button component. Parts will be deferent for each component.

```
export type ButtonParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'
  | 'loader'

styles?: {
    [key in ButtonParts]?: CSSProperties
  }
```

**Props**

See [Props documentation](../../../../apps/docs/docs/GetStarted/Customization/props.md)

```
export type ButtonParts =
  | 'root'
  | 'children'
  | 'slot'
  | 'slotStart'
  | 'slotEnd'
  | 'loader'

props?: {
  [key in ButtonParts]?: {
    [key: string]: string
  }
}
```
