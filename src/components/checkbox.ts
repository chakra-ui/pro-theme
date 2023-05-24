import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
)

const baseStyle = definePartsStyle({
  label: {
    color: 'emphasized',
    fontWeight: 'medium',
  },
  control: {
    borderWidth: '1px',
    borderColor: 'gray.300',
    _dark: {
      borderColor: 'gray.600',
    },
    _checked: {
      bg: 'brand.500',
      color: 'white',
      _hover: {
        bg: 'brand.600',
      },
      _dark: {
        bg: 'brand.200',
        color: 'gray.800',
        _hover: {
          bg: 'brand.300',
        },
      },
    },
    _indeterminate: {
      bg: 'brand.500',
      _dark: {
        bg: 'brand.200',
      },
    },
  },
})

const sizes = {
  sm: definePartsStyle({
    label: { textStyle: 'xs' },
    control: { borderRadius: 'sm' },
    icon: { fontSize: '3xs' },
  }),
  md: definePartsStyle({
    label: { textStyle: 'sm' },
    control: { borderRadius: 'base' },
    icon: { fontSize: '2xs' },
  }),
  lg: definePartsStyle({
    label: { textStyle: 'md' },
    control: { borderRadius: 'md' },
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
