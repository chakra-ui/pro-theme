import { ChakraProvider, extendTheme, useColorMode } from '@chakra-ui/react'
import '@fontsource-variable/open-sans'
import '@fontsource-variable/spline-sans'
import { Fragment, ReactNode, useEffect } from 'react'
import { theme } from '../src'

type Props = {
  colorMode: 'dark' | 'light'
  children?: ReactNode | undefined
}

export const ThemeProvider = (props: Props) => {
  const proTheme = extendTheme(theme)
  const extenstion = {
    colors: { ...proTheme.colors, brand: proTheme.colors.teal },
  }
  const myTheme = extendTheme(extenstion, proTheme)

  return (
    <ChakraProvider theme={myTheme}>
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
