import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { mode, transparentize, type StyleFunctionProps } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: {
    _disabled: {
      opacity: 1.0,
    },
    _placeholder: {
      opacity: 1,
      color: 'gray.500',
      _dark: {
        color: 'gray.300',
      },
    },
  },
})

const variants = {
  outline: (props: StyleFunctionProps) => ({
    field: {
      borderRadius: 'lg',
      bg: mode('white', 'gray.800')(props),
      _hover: { borderColor: mode('gray.300', 'gray.600')(props) },
      _focus: {
        borderColor: mode('brand.500', 'brand.200')(props),
        boxShadow: mode(
          `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
          `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
        )(props),
      },
    },
    addon: {
      borderRadius: 'lg',
      bg: mode('gray.50', 'gray.700')(props),
    },
  }),
  'outline-on-accent': (props: StyleFunctionProps) => ({
    field: {
      bg: 'white',
      borderRadius: 'lg',
      color: 'gray.900',
      borderWidth: '1px',
      borderColor: 'brand.50',
      _placeholder: {
        color: 'gray.500',
      },
      _hover: {
        borderColor: 'brand.100',
      },
      _focus: {
        borderColor: 'brand.200',
        boxShadow: `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
      },
    },
  }),
  filled: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        field: {
          bg: mode('white', 'gray.800')(props),
          _hover: {
            borderColor: mode('gray.200', 'gray.700')(props),
            bg: mode('white', 'gray.700')(props),
          },
          _focus: {
            borderColor: 'accent',
            bg: mode('white', 'gray.800')(props),
          },
        },
      }
    }
    return {
      field: {
        bg: 'bg-accent-subtle',
        color: 'on-accent',
        _placeholder: {
          color: 'on-accent',
        },
        _hover: {
          borderColor: 'brand.400',
          bg: 'bg-accent-subtle',
        },
        _focus: {
          bg: 'bg-accent-subtle',
          borderColor: 'brand.300',
        },
      },
    }
  },
}

const sizes = {
  sm: definePartsStyle({
    field: { px: 2.5, h: 9, fontSize: 'sm' },
  }),
  md: definePartsStyle({
    field: { px: 3, h: 10, fontSize: 'md' },
  }),
  lg: definePartsStyle({
    field: { px: 3.5, h: 11, fontSize: 'md' },
  }),
  xl: definePartsStyle({
    field: { px: 4, h: 12, fontSize: 'md' },
  }),
}

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
})
