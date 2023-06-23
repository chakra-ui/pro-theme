# Welcome to Chakra UI Pro Theme

The Chakra UI Pro Theme extends the base Chakra UI theme by introducing additional component variants, sizes, and a collection of semantic tokens and text layer styles.
Made to fit perfectly with the original Chakra UI theme, the Pro Theme makes your user interface look even better, and it won't mess up your current setup. Just a heads up though - if your custom variants have the same names as ours, you might see a few changes. For the best experience with the Pro Theme, you might want to check out our comparison [here](https://pro-theme.chakra-ui.com).

## Installation

Ensure Chakra UI is installed in your project. If not, you can follow the [installation guide on Chakra UI's website](https://chakra-ui.com/docs/getting-started).
To install Chakra UI Pro Theme, you can use yarn:

```bash
yarn add install @chakra-ui/pro-theme
```

Alternatively, if you prefer using npm:

```bash
npm install @chakra-ui/pro-theme
```

## Setting up the Pro Theme

Setting up the Pro Theme is a straightforward process. The Pro Theme extends the base theme from Chakra UI and can be incorporated in a few simple steps.
Import the Pro Theme and the base theme from Chakra UI:

```typescript
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
```

Next, extend the base theme with our Pro Theme:

```javascript
export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme,
)
```

This code snippet imports the Pro Theme and the base theme from Chakra UI. It then uses the `extendTheme` function from Chakra UI to merge the Pro Theme with your custom configuration.

## Font Configuration

Chakra UI Pro Theme uses `Spline Sans` as `heading` font family and `Open Sans` as `body` font family by default. To include this, first, you need to install the font:

```bash
yarn add @fontsource-variable/spline-sans @fontsource-variable/open-sans
```

Then, you can import it in your theme setup:

```javascript
import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'
```

> Note: Depending on the platform/framework, the best way to install fonts may differ.

### Using a Different Font

To use a different font, such as `Inter`, you first need to install the font:

```bash
yarn add @fontsource-variable/inter
```

Then, import the font and adjust the `fonts` key in your theme configuration:

```javascript
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import '@fontsource-variable/inter'

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
    fonts: {
      heading: "'Inter Variable', -apple-system, system-ui, sans-serif",
      body: "'Inter Variable', -apple-system, system-ui, sans-serif",
    },
  },
  proTheme,
)
```

## Generating Theme Typings

With Chakra UI Pro Theme, you can enhance your development experience by generating theme typings. This makes the theme tokens used in the Pro Theme available to your IDE's intellisense, aiding in faster and more accurate development.

To generate the theme typings, follow these steps:

First, install the Chakra CLI as a dev dependency:

```bash
yarn add --dev @chakra-ui/cli
```

Next, generate the theme typings using the following command. Replace `'./path-to-theme.ts'` with the actual path to your theme file:

```bash
yarn chakra-cli tokens ./path-to-theme.ts
```

Once this is completed, you may need to "Restart the TS Server" in VSCode to see the changes.

For further information about the Chakra CLI and theme typings, check out the [Chakra CLI documentation](https://chakra-ui.com/docs/styled-system/advanced-theming#theme-typings).
