# Avatar

This document is for an Avatar component.

Include the [component requirements](../../component-requirements.md).

## Component Specific Props

- children: will be an image tag, icon, or text
- onClick: When an onClick is provided the image should be wrapped in a button component
- active: Will add `.tipTop-<ComponentName>--active` class. Adds a border to the component
- shape: square or circle
- fallback: fallback image tag, icon, or text to be used if children are not provided
- badge: takes a Badge component
