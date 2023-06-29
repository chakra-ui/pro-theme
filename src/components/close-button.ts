import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const vars = defineCssVars('close-button', ['bg', 'color', 'size'])

const baseStyle = defineStyle({
  borderRadius: 'lg',
  w: [vars.size.reference],
  h: [vars.size.reference],
  bg: vars.bg.reference,
  color: vars.color.reference,
  [vars.color.variable]: `colors.gray.600`,
  _dark: {
    [vars.color.variable]: `colors.gray.300`,
  },
  _hover: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.800`,
    _dark: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`,
    },
  },
  _active: {
    [vars.bg.variable]: `colors.gray.50`,
    [vars.color.variable]: `colors.gray.900`,
    _dark: {
      [vars.bg.variable]: `colors.gray.800`,
      [vars.color.variable]: `colors.white`,
    },
  },
  _focusVisible: {
    boxShadow: 'focus',
  },
})

const sizes = {
  '2xs': defineStyle({
    [vars.size.variable]: 'sizes.6',
    fontSize: '2xs',
  }),
  xs: defineStyle({
    [vars.size.variable]: 'sizes.8',
    fontSize: 'xs',
  }),
  sm: defineStyle({
    [vars.size.variable]: 'sizes.9',
    fontSize: 'xs',
  }),
  md: defineStyle({
    [vars.size.variable]: 'sizes.10',
    fontSize: 'sm',
  }),
  lg: defineStyle({
    [vars.size.variable]: 'sizes.11',
    fontSize: 'md',
  }),
  xl: defineStyle({
    [vars.size.variable]: 'sizes.12',
    fontSize: 'lg',
  }),
  '2xl': defineStyle({
    [vars.size.variable]: 'sizes.15',
    fontSize: 'xl',
  }),
}

export default defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
