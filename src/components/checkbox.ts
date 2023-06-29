import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineCssVars } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
)

const vars = defineCssVars('checkbox', ['bg'])

const baseStyle = definePartsStyle((props) => {
  const { colorScheme } = props
  return {
    label: {
      color: 'fg.emphasized',
      fontWeight: 'medium',
    },
    control: {
      borderWidth: '1px',
      borderColor: 'border.emphasized',
      bg: vars.bg.reference,
      _checked: {
        [vars.bg.variable]: `colors.${colorScheme}.500`,
        color: 'white',
        _hover: {
          [vars.bg.variable]: `colors.${colorScheme}.600`,
        },
        _dark: {
          [vars.bg.variable]: `colors.${colorScheme}.200`,
          color: 'gray.800',
          _hover: {
            [vars.bg.variable]: `colors.${colorScheme}.300`,
          },
        },
      },
      _indeterminate: {
        [vars.bg.variable]: `colors.${colorScheme}.500`,
        _dark: {
          [vars.bg.variable]: `colors.${colorScheme}.200`,
        },
      },
    },
  }
})

const sizes = {
  sm: definePartsStyle({
    label: { fontSize: 'xs', lineHeight: '1.125rem' },
    control: { borderRadius: 'sm' },
    icon: { fontSize: '3xs' },
  }),
  md: definePartsStyle({
    label: { fontSize: 'sm', lineHeight: '1.25rem' },
    control: { borderRadius: 'base' },
    icon: { fontSize: '2xs' },
  }),
  lg: definePartsStyle({
    label: { fontSize: 'md' },
    control: { borderRadius: 'md', lineHeight: '1.5rem' },
    icon: { fontSize: 'xs' },
  }),
}

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'brand',
  },
})
