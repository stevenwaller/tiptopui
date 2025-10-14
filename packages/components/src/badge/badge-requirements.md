# Badge

This document is for an Badge component.

Include the [component requirements](../../component-requirements.md).

## Inspiration

Look at how the [Button component](../button/) for patterns and prop usage.

## CSS

Read the [Styling](../../../../apps/docs/docs/GetStarted/Customization/styling.md) and [CSS Variables](../../../../apps/docs/docs/GetStarted/Customization/cssVariables.md) docs for rules

## Requirements

- children can be an icon, number, text, or more
  - With no children or slots the badge should just render the shape and color
- Slots
  - Users can render a number as a slot or as children
  - User can render an icon as a slot or as children
  - Users can provide a button as slot content
  - Slots can also be any react content
- Badge should default to being shown inline

## Some example supported scenarios

- Badge with no content shows just a circle
- Badge with icon in startSlot and text as children
- Badge with text as children and a clickable close button as endSlot

## Component Specific Props

- shape: circle or pill
- size: 'xs' | 'sm' | 'normal' | 'md' | 'lg' | 'xl'
- showOutline: enables the white outline to help offset the badge from what it overlays
- onClick: when provided the root div should work as an accessible button
- slotStart
- slotEnd
- children
- position: will use absolute positioning to position the badge
  - top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
- variant?:
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'danger'
  | 'warning'
  | 'success'
  | 'light'
  | 'dark'
- appearance?: 'solid' | 'faded' | 'outline' | 'ghost' | 'text'
