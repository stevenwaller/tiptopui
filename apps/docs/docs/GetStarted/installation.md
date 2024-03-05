---
sidebar_position: 1
---

# Installation

Tip Top UI is available on [npmjs.org](https://www.npmjs.com/package/@tiptopui/components) and can be installed using a package manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

<Tabs>
  <TabItem value="npm" label="npm">
    ```sh
    npm install @tiptopui/components
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```sh
    yarn add @tiptopui/components
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```sh
    pnpm add @tiptopui/components
    ```
  </TabItem>
</Tabs>

# Usage

The following is a simple example of using a default button component.

```jsx
// import the component from Tip Top UI
import { Button } from "@tiptopui/components";
// import the styles for Tip Top UI
import "@tiptopui/components/dist/index.css";

// use the component in your React application
function App() {
  return <Button>Hello World</Button>;
}
```
