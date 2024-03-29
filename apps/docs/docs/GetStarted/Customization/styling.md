---
sidebar_position: 1
---

# Styling

Tip Top UI is set up to support a variety of ways to customize the components.

## CSS variables

It is recommended that you start with trying to customize everything using CSS variables. You can read more on the [CSS Variables page](./cssVariables) or see the available CSS variables in each Component's documentation.

## Global classes with CSS/SASS/LESS

If the CSS Variables don't provide the level of customization you require you can style the components directly.

Each component has class names that are available globally and can be used in your CSS/SASS/LESS.

All the class names are prefixed with `tipTop-` to scope the names and prevent conflicts and use the following format:

```css
.tipTop-<ComponentName>-<partName>
```

For example you can target the different parts of the Button component with the following classes.

```css
.tipTop-Button-root {
  /* styles go here */
}
.tipTop-Button-children {
  /* styles go here */
}
.tipTop-Button-slot {
  /* styles go here */
}
```

Each component's documentation has a list of available parts for that component.

## ClassNames prop

If you want to apply your own classes to the parts that make up the component you can use the `classNames` prop. The prop takes an object where the key is the name of the child part inside the component.

Each component's documentation has a list of available parts for that component.

```jsx
import { Button } from "@tiptopui/components";

function ClassNameDemo() {
  return (
    <Button
      classNames={{
        root: "foo",
        children: "bar",
        slot: "baz",
      }}
    >
      My Button
    </Button>
  );
}
```

:::note

The components `className` prop gets added to the root component.

So the following will add the class name 'foo' to the same part of the component.

```jsx
<Button className="foo">My Button</Button>
```

```jsx
<Button classNames={{ root: "foo" }}>My Button</Button>
```

:::

### CSS modules

The `classNames` prop can be used with [CSS Modules](https://github.com/css-modules/css-modules), which can be used to scope styles to each component.

```css title="cssModuleDemo.module.css"
.root {
  background-color: red;
}
.children {
  font-family: "Comic Sans";
}
.slot {
  padding: 0;
}
```

```jsx title="cssModuleDemo.jsx"
import { Button } from "@tiptopui/components";
import cssModule from "./CssModuleDemo.modules.css";

function CssModuleDemo() {
  return <Button classNames={cssModule}>My Button</Button>;
}
```

### Tailwind

The `classNames` prop can be used with [Tailwind](https://tailwindcss.com/) to add utility classes to the elements that make up the component.

```jsx
import { Button } from "@tiptopui/components";

function TailwindModuleDemo() {
  return (
    <Button
      classNames={{
        root: "bg-white",
        children: "font-sans",
        slot: "p-0",
      }}
    >
      My Button
    </Button>
  );
}
```

## Margin Props

Adding margins around components can vary depending on the context. To make this easier each component includes margin props to quickly add margin.

| Prop | Description                    |
| ---- | ------------------------------ |
| `mt` | Sets CSS `margin-block-start`  |
| `mb` | Sets CSS `margin-block-end`    |
| `ms` | Sets CSS `margin-inline-start` |
| `me` | Sets CSS `margin-inline-end`   |

```jsx live
<div>
  <Button me="10px">Primary</Button>
  <Button>Secondary</Button>
</div>
```

## Styles Prop

The `styles` prop allows you to add inline styles to the parts of a component.

```jsx
import { Button } from "@tiptopui/components";

function StylesPropDemo() {
  return (
    <Button
      styles={{
        root: { backgroundColor: "red-500" },
        children: { fontFamily: "Comic Sans" },
        slot: { padding: 0 },
      }}
    >
      My Button
    </Button>
  );
}
```

## Unstyled

If you don't provide any CSS variables and you will only get the basic display and layout setting needed to render the components.

If you don't include the Tip Top UI styles from `@tiptopui/components/dist/index.css` then you won't get any styles at all.
