import { ChakraProvider, theme as baseTheme, extendTheme, useColorMode } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { Story, StoryContext } from '@storybook/react'
import { Fragment, ReactNode, useEffect } from 'react'
import { theme as proTheme } from '../src'

interface MainProps {
  colorMode?: 'dark' | 'light'
  children?: ReactNode
}

const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.teal },
  },
  proTheme,
)

const Main = (props: MainProps) => {
  const { colorMode, children } = props
  const { setColorMode } = useColorMode()
  useEffect(() => setColorMode(colorMode ? colorMode : 'light'), [colorMode])
  return <Fragment>{children}</Fragment>
}

export const ThemeProvider = (StoryFn: Story, context: StoryContext) => (
  <ChakraProvider theme={theme}>
    <Main colorMode={context.globals.isDarkMode ? 'dark' : 'light'}>
      <StoryFn {...context} />
    </Main>
  </ChakraProvider>
)
