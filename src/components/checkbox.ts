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
    bg: 'white',
    _dark: {
      bg: 'brand.200',
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
