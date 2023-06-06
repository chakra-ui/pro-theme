import type { Preview } from '@storybook/react'
import { ThemeProvider } from './ThemeProvider'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'padded',
    options: {
      storySort: {
        order: ['Introduction', 'Changelog'],
      },
    },
  },
  decorators: [ThemeProvider],
  globalTypes: {
    isDarkMode: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
    },
  },
}

export default preview
