import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { Story, StoryContext } from '@storybook/react'
import React, { Fragment, ReactNode, useEffect } from 'react'
// import { theme as proTheme } from '../themes/chakra-ui-pro/src'

interface MainProps {
  colorMode?: 'dark' | 'light'
  children?: ReactNode
}

// export const theme = extendTheme(
//   {
//     colors: { ...baseTheme.colors, brand: baseTheme.colors.purple },
//   },
//   proTheme,
// )

const Main = (props: MainProps) => {
  const { colorMode, children } = props
  const { setColorMode } = useColorMode()
  useEffect(() => setColorMode(colorMode ? colorMode : 'light'), [colorMode])
  return <Fragment>{children}</Fragment>
}

export const ThemeProvider = (StoryFn: Story, context: StoryContext) => (
  <ChakraProvider>
    <Main colorMode={context.globals.isDarkMode ? 'dark' : 'light'}>
      <StoryFn {...context} />
    </Main>
  </ChakraProvider>
)
