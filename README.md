# GamaUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

# IconComponent

The `IconComponent` is an Angular standalone component designed to display icons with customizable properties such as type, name, and styles. It supports two icon types (`icons` and `symbols`) and allows passing custom styles through an input property.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Input Properties](#input-properties)
  - [type](#type)
  - [name](#name)
  - [style](#style)
- [Example](#example)

## Installation

To use the `IconComponent` in your Angular application, ensure you have Angular set up and follow these steps:

1. **Install necessary dependencies (if required):**

   If your project doesn't have Angular installed, you can set it up with:

   ```bash
   ng new your-project-name
   cd your-project-name
   ```

2. **Import the IconComponent:**

   Ensure that your Angular module or component imports the `IconComponent`:

   ```typescript
   import { IconComponent } from '@componenets/icon/icon.component'; // Adjust the path accordingly
   ```

3. **Add the component to your template:**

   You can now use `<app-icon>` in your templates.

## Usage

You can use the `IconComponent` in your Angular templates as follows:

```html
<app-icon type="icons" name="home" [style]="{ color: 'blue', fontSize: '24px' }"></app-icon>
```

## Input Properties

### `type`

- **Type:** `string`
- **Description:** Specifies the type of icon to display. Allowed values are `icons` or `symbols`.
- **Default:** `symbols`
- **Validation:** If the value is not `icons` or `symbols`, an error will be thrown.

### `name`

- **Type:** `string`
- **Description:** Specifies the name of the icon to be displayed. 
- **Validation:** If the value is empty or null, an error will be thrown.

### `style`

- **Type:** `Style` (custom interface)
- **Description:** An object containing CSS styles to apply to the icon. This allows for dynamic styling of the icon.
- **Default:** An empty object `{}`.

## Example

Here’s a simple example of how to use the `IconComponent` in a parent component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-icon 
      type="icons" 
      name="home" 
      [style]="{ color: 'red', fontSize: '30px' }">
    </app-icon>
  `,
})
export class ParentComponent {}
```

### Example of Style Interface

You may define your `Style` interface as follows:

```typescript
export interface Style {
  color?: string; 
  fontSize?: string; 
  backgroundColor?: string; 
  [key: string]: any; // Allow other CSS properties if needed
}
```

