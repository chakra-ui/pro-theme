import { ChakraProvider, theme as baseTheme, extendTheme, useColorMode } from '@chakra-ui/react'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'
import { Fragment, ReactNode, useEffect } from 'react'
import { theme as proTheme } from '../src'

type Props = {
  colorMode: 'dark' | 'light'
  children?: ReactNode | undefined
}

export const ThemeProvider = (props: Props) => {
  const theme = extendTheme(
    {
      colors: { ...baseTheme.colors, brand: baseTheme.colors.teal },
    },
    proTheme,
  )
  return (
    <ChakraProvider theme={theme}>
      <Main {...props} />
    </ChakraProvider>
  )
}

const Main = (props: Props) => {
  const { colorMode, children } = props
  const { setColorMode } = useColorMode()
  useEffect(() => setColorMode(colorMode ? colorMode : 'light'), [colorMode])
  return <Fragment>{children}</Fragment>
}
