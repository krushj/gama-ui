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
    <GIcon 
      type="icons" 
      name="home" 
      [style]="{ color: 'red', fontSize: '30px' }">
    </GIcon>
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


Here's a detailed `README` document for your `ButtonComponent`. It covers the attributes, how to use them, and how users can customize the button theming using `--gama-` CSS variables.

---

# `GButton` Component README

The `GButton` component is a highly customizable button component designed to be used with Angular. It supports different button sizes, themes, icons, and various other configurations to provide flexibility in design. This document will guide you on how to use the component, customize its attributes, and adjust its styling with CSS variables.

## Table of Contents:
- [Usage](#usage)
  - [Component Selector](#component-selector)
  - [Input Properties](#input-properties)
  - [Output Events](#output-events)
- [Customizing Theming](#customizing-theming)
  - [Overview of Theming Variables](#overview-of-theming-variables)
  - [Customizing Button Colors](#customizing-button-colors)
  - [Adjusting Button Sizes and Padding](#adjusting-button-sizes-and-padding)
- [Example](#example)

---

## Installation

To install and use the `GButton` component, follow these steps:


1. **Add the Component to Your Module**:
   Import the `ButtonComponent` into your module, where you want to use the button.

   ```typescript
   import { ButtonComponent } from '@gama/components';
   ```

   Include it in the `declarations` of your module:

   ```typescript
   @NgModule({
     declarations: [ButtonComponent],
     exports: [ButtonComponent]
   })
   export class YourModule {}
   ```

---

## Usage

### Component Selector

The `GButton` component is used in your HTML as follows:

```html
<GButton 
  [style]="yourButtonStyle" 
  [disabled]="isDisabled" 
  [type]="'primary'"
  [theme]="'info'" 
  [buttonSize]="'medium'"
  [prefixIcon]="prefixIcon"
  [suffixIcon]="suffixIcon"
  [title]="'Click Me'"
</GButton>

or 

<GButton 
  [style]="yourButtonStyle" 
  [disabled]="isDisabled" 
  [type]="'primary'"
  [theme]="'info'" 
  [buttonSize]="'medium'"
  [iconButton]="true"
  [iconType]="'symbols'"
  [iconName]="'check-circle'"
  [iconStyle]="iconStyle"
  (onClick)="handleClick()">
</GButton>

```

### Input Properties

| Property        | Type                | Description                                                                                                                                      | Default Value      |
|-----------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|
| `style`         | `Style`             | Defines custom inline styles for the button.                                                                                                     | `{}`               |
| `disabled`      | `boolean`           | Disables the button if `true`.                                                                                                                    | `false`            |
| `type`    | `string`            | Specifies the type of button (e.g., 'primary', 'secondary', etc.).                                                                                | `'primary'`        |
| `theme`   | `string`            | Defines the theme for the button (e.g., 'info', 'success', 'warn', 'alert').                                                                      | `''`               |
| `buttonSize`    | `string`            | Specifies the size of the button (e.g., 'small', 'medium', 'large').                                                                             | `'medium'`         |
| `iconButton`    | `boolean string`  | If `true` or `'true'`, the button will render with an icon.                                                                                       | `false`            |
| `prefixIcon`    | `Icon`              | Icon to be displayed before the button text (if any).                                                                                           | `null`             |
| `suffixIcon`    | `Icon`              | Icon to be displayed after the button text (if any).                                                                                            | `null`             |
| `title`   | `string`            | Text displayed on the button.                                                                                                                   | `null`             |
| `iconType`      | `string`            | Type of icon used (e.g., `'symbols'`, `'font-awesome'`, etc.).                                                                                   | `'symbols'`        |
| `iconName`      | `string | null`      | Name of the icon to be used (e.g., `'check-circle'`).                                                                                           | `null`             |
| `iconStyle`     | `Style`             | Custom styles for the icon.                                                                                                                     | `{}`               |

### Output Events

| Event Name | Description                                    |
|------------|------------------------------------------------|
| `onClick`  | Emits when the button is clicked.              |

Example:

```html
<GButton (onClick)="handleClick($event)">Click Me</GButton>
```

---

## Customizing Theming
Certainly! Below is the **documentation for theming variables** used in the `GButton` component. The documentation will explain how users can customize the look and feel of the buttons via CSS custom properties (also known as CSS variables), allowing for dynamic theming and styling.

---

# GButton Component Theming Documentation

## Introduction

The `GButton` component supports theming via CSS custom properties (variables). These variables allow users to easily customize button sizes, paddings, icon sizes, and colors for various button states (e.g., hover, active, and disabled states). You can also customize the appearance of button themes such as `info`, `success`, `warn`, and `alert` buttons, as well as define specific sizes for small, medium, and large buttons.

In this documentation, we explain how you can customize the button’s theme by setting values for these variables.

## Theming Variables Overview

The theming variables are grouped based on button sizes (small, medium, and large), and button types (e.g., info, success, warn, alert). Below is the detailed explanation of each variable you can customize:

### Button Size Variables

These variables control the size, padding, border radius, and icon size for different button sizes: **small**, **medium**, and **large**.

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-small--size` | Button size for small buttons | `1.25rem` |
| `--gama-button-small--padding` | Padding for small buttons | `0.125rem` |
| `--gama-button-small--border-radius` | Border radius for small buttons | `0.125rem` |
| `--gama-button-small--icon-size` | Icon size for small buttons | `0.75rem` |
| `--gama-button-small--column-gap` | Gap between the icon and text for small buttons | `0.125rem` |

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-medium--size` | Button size for medium buttons | `1.5rem` |
| `--gama-button-medium--padding` | Padding for medium buttons | `0.25rem` |
| `--gama-button-medium--border-radius` | Border radius for medium buttons | `0.25rem` |
| `--gama-button-medium--icon-size` | Icon size for medium buttons | `0.875rem` |
| `--gama-button-medium--column-gap` | Gap between the icon and text for medium buttons | `0.25rem` |

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-large--size` | Button size for large buttons | `2.25rem` |
| `--gama-button-large--padding` | Padding for large buttons | `0.5rem` |
| `--gama-button-large--border-radius` | Border radius for large buttons | `0.5rem` |
| `--gama-button-large--icon-size` | Icon size for large buttons | `1rem` |
| `--gama-button-large--column-gap` | Gap between the icon and text for large buttons | `0.375rem` |

#### How to Customize Button Sizes

You can override the default size variables in your CSS to create custom button sizes. For example:

```css
:root {
  --gama-button-small--size: 1.5rem;
  --gama-button-medium--size: 1.75rem;
  --gama-button-large--size: 2.5rem;
}
```

This will update the size of the buttons across your application.

### Button Theme Variables

The button's theme can be customized using various color and background properties, such as **info**, **success**, **warn**, **alert**, and more. Below are the variables for each theme state.

#### Info Button Theme

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-theme-info--background-color` | Background color for info buttons | `$blue-600` |
| `--gama-button-theme-info--color` | Text color for info buttons | `$white-0` |
| `--gama-button-theme-info-hover--background-color` | Background color for info buttons on hover | `$blue-700` |
| `--gama-button-theme-info-hover--color` | Text color for info buttons on hover | `$white-0` |
| `--gama-button-theme-info-hover--box-shadow` | Box shadow for info buttons on hover | `0px 0.125rem 0.125rem 0px $blue-700` |
| `--gama-button-theme-info-active--background-color` | Background color for info buttons when active | `$blue-800` |
| `--gama-button-theme-info-active--color` | Text color for info buttons when active | `$white-0` |
| `--gama-button-theme-info-active--box-shadow` | Box shadow for info buttons when active | `0px 0.125rem 0.125rem 0px $blue-800` |

#### Success Button Theme

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-theme-success--background-color` | Background color for success buttons | `$green-600` |
| `--gama-button-theme-success--color` | Text color for success buttons | `$white-0` |
| `--gama-button-theme-success-hover--background-color` | Background color for success buttons on hover | `$green-700` |
| `--gama-button-theme-success-hover--color` | Text color for success buttons on hover | `$white-0` |
| `--gama-button-theme-success-hover--box-shadow` | Box shadow for success buttons on hover | `0px 0.125rem 0.125rem 0px $green-700` |
| `--gama-button-theme-success-active--background-color` | Background color for success buttons when active | `$green-800` |
| `--gama-button-theme-success-active--color` | Text color for success buttons when active | `$white-0` |
| `--gama-button-theme-success-active--box-shadow` | Box shadow for success buttons when active | `0px 0.125rem 0.125rem 0px $green-800` |

#### Warn Button Theme

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-theme-warn--background-color` | Background color for warn buttons | `$yellow-600` |
| `--gama-button-theme-warn--color` | Text color for warn buttons | `$white-0` |
| `--gama-button-theme-warn-hover--background-color` | Background color for warn buttons on hover | `$yellow-700` |
| `--gama-button-theme-warn-hover--color` | Text color for warn buttons on hover | `$white-0` |
| `--gama-button-theme-warn-hover--box-shadow` | Box shadow for warn buttons on hover | `0px 0.125rem 0.125rem 0px $yellow-700` |
| `--gama-button-theme-warn-active--background-color` | Background color for warn buttons when active | `$yellow-800` |
| `--gama-button-theme-warn-active--color` | Text color for warn buttons when active | `$white-0` |
| `--gama-button-theme-warn-active--box-shadow` | Box shadow for warn buttons when active | `0px 0.125rem 0.125rem 0px $yellow-800` |

#### Alert Button Theme

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-theme-alert--background-color` | Background color for alert buttons | `$red-600` |
| `--gama-button-theme-alert--color` | Text color for alert buttons | `$white-0` |
| `--gama-button-theme-alert-hover--background-color` | Background color for alert buttons on hover | `$red-700` |
| `--gama-button-theme-alert-hover--color` | Text color for alert buttons on hover | `$white-0` |
| `--gama-button-theme-alert-hover--box-shadow` | Box shadow for alert buttons on hover | `0px 0.125rem 0.125rem 0px $red-700` |
| `--gama-button-theme-alert-active--background-color` | Background color for alert buttons when active | `$red-800` |
| `--gama-button-theme-alert-active--color` | Text color for alert buttons when active | `$white-0` |
| `--gama-button-theme-alert-active--box-shadow` | Box shadow for alert buttons when active | `0px 0.125rem 0.125rem 0px $red-800` |

#### Disabled Icon Button Theme

| Variable Name | Description | Default Value |
|---------------|-------------|---------------|
| `--gama-button-theme-disabled--background-color` | Background color for disabled icon buttons | `$white-600` |
| `--gama-button-theme-disabled--color` | Text color for disabled icon buttons | `$white-0` |

### How to Customize Button Themes

To customize the button themes, you can override these CSS variables in your global stylesheet. For example, to change the background color for the success button in the hover state:

```css
:root {
  --gama-button-theme-success-hover--background-color: #45a049; /* Custom hover background

 color */
  --gama-button-theme-success-hover--color: #ffffff; /* Text color */
}
```

### Example of Customizing Button Appearance

To make the **small success button** with a custom hover effect and background color, you can override the following:

```css
:root {
  --gama-button-small--size: 1.5rem;
  --gama-button-theme-success--background-color: #28a745;
  --gama-button-theme-success--color: #ffffff;
  --gama-button-theme-success-hover--background-color: #218838;
  --gama-button-theme-success-hover--color: #ffffff;
}
```

---