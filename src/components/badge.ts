import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { transparentize } from '@chakra-ui/theme-tools'

const sizes = {
  sm: defineStyle({
    textStyle: 'xs',
    px: 2,
    py: 0.5,
  }),
  md: defineStyle({
    textStyle: 'sm',
    px: 2.5,
    py: 0.5,
  }),
  lg: defineStyle({
    textStyle: 'sm',
    px: 3,
    py: 1,
  }),
}

const vars = defineCssVars('badge', ['bg', 'color', 'shadow'])

const variants = {
  pill: defineStyle((props) => {
    const { colorScheme, theme } = props
    const darkBg = transparentize(`${colorScheme}.200`, 0.16)(theme)
    return {
      textTransform: 'normal',
      fontWeight: 'medium',
      borderRadius: '2xl',
      [vars.shadow.variable]: `inset 0 0 0px 1px ${props.theme.colors[colorScheme][200]}`,
      [vars.bg.variable]: `colors.${colorScheme}.50`,
      [vars.color.variable]: `colors.${colorScheme}.700`,
      _dark: {
        [vars.bg.variable]: darkBg,
        [vars.color.variable]: `colors.${colorScheme}.200`,
        [vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`,
      },
    }
  }),
}

export default defineStyleConfig({
  defaultProps: {
    size: 'md',
    colorScheme: 'brand',
  },
  variants,
  sizes,
})
