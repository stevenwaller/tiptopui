---
sidebar_position: 4
---

# Props

The `props` prop allows you to override the props of child components. This can be useful for adding your own attributes to the parts of a component.

```jsx
import { Button } from "@tiptopui/components";

function PropsDemo() {
  return (
    <Button
      props={{
        root: { "data-testid": "foo" },
        children: { "data-testid": "bar" },
        slot: { "data-testid": "baz" },
      }}
    >
      My Button
    </Button>
  );
}
```

:::note

The `root` part is the top level element. So adding props to the `root` part is the same as adding props the the regular component.

So the following is equivalent.

```jsx
<Button data-testid="foo">My Button</Button>
```

```jsx
<Button props={{ root: { "data-testid": "foo" } }}>My Button</Button>
```

:::
