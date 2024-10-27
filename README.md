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
  [key: string]: any; // Allow other CSS properties if needed
}
```

# DateRangePickerComponent

The `DateRangePickerComponent` is a custom Angular component that allows users to select a date range by choosing start and end dates. It includes a calendar view for easy date selection and supports date range validation and keyboard shortcuts for quick navigation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Inputs](#inputs)
- [Outputs](#outputs)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Validation](#validation)

## Features

- **Select Start and End Dates**: Allows users to pick a date range with a start (from) and end (to) date.
- **Date Validation**: Validates dates to ensure the "to" date is not before the "from" date and vice versa.
- **Keyboard Shortcuts**: Provides keyboard navigation and date selection with shortcuts.
- **Hover and Range Highlight**: Displays a highlight for dates between the selected range on hover.
- **Custom Date Format Support**: Configurable date format (default `MM/dd/yyyy`).

## Installation

Add the `DateRangePickerComponent` to your Angular project by copying the component code and required dependencies (like `DatePipe`) to your project.

```typescript
import { DateRangePickerComponent } from '@gama/components';
```

## Usage

### In HTML

To use the date range picker component, include it in your template and bind any necessary inputs and outputs.

```html
<app-date-range-picker
  [date]="dateRange"
  (emitSaveEvent)="onDateRangeSave($event)"
></app-date-range-picker>
```

## Inputs

- `date` (`{ from: Date | null; to: Date | null }`): The initial date range to display in the picker. This includes `from` and `to` properties for start and end dates, respectively.

## Outputs

- `emitSaveEvent` (`EventEmitter<{ from: Date | null; to: Date | null }>`): Emits the selected date range when the user saves it.

## Keyboard Shortcuts

- **Save**: `Ctrl + S` (Windows) or `Cmd + S` (Mac) to save the selected date range.
- **Navigate Months**: 
  - `Ctrl + ArrowLeft` (Windows) or `Cmd + ArrowLeft` (Mac) to go to the previous month.
  - `Ctrl + ArrowRight` (Windows) or `Cmd + ArrowRight` (Mac) to go to the next month.
- **Tab between "From" and "To" fields**: `Alt + Tab` to toggle between "from" and "to" tabs.

## Validation

The `DateRangePickerComponent` ensures date range validity through:
- **Date Comparison**: Disables dates in the "to" tab that are before the selected "from" date, and vice versa.
- **Input Validation**: When a date is manually entered, it checks if the entered date format is correct and updates the calendar accordingly.

