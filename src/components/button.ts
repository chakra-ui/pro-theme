import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { darken, mode, transparentize, type StyleFunctionProps } from '@chakra-ui/theme-tools'

const baseStyle = defineStyle({
  borderRadius: 'lg',
})

const sizes = {
  '2xs': defineStyle({
    h: '6',
    minW: '6',
    fontSize: '2xs',
    px: '2',
    '& .chakra-button__icon': {
      fontSize: 'sm',
    },
  }),
  xs: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'xs',
    px: '2',
    '& svg': {
      fontSize: 'md',
    },
  }),
  sm: defineStyle({
    h: '9',
    minW: '9',
    fontSize: 'sm',
    px: '3.5',
    '& .chakra-button__icon': {
      fontSize: 'xl',
    },
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'sm',
    px: '4',
    '& .chakra-button__icon': {
      fontSize: 'xl',
    },
  }),
  lg: defineStyle({
    h: '11',
    minW: '11',
    fontSize: 'md',
    px: '4.5',
    '& .chakra-button__icon': {
      fontSize: 'xl',
    },
  }),
  xl: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'md',
    px: '5',
    '& .chakra-button__icon': {
      fontSize: 'xl',
    },
  }),
  '2xl': defineStyle({
    h: '15',
    minW: '15',
    fontSize: 'lg',
    px: '7',
    '& .chakra-button__icon': {
      fontSize: '2xl',
    },
  }),
}

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'brand',
    }),
  'primary-on-accent': () => ({
    bg: 'brand.50',
    color: 'brand.600',
    _hover: { bg: 'brand.100' },
    _active: { bg: 'brand.100' },
  }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props,
      variant: 'outline',
      colorScheme: 'gray',
    }),
  'secondary-on-accent': {
    color: 'white',
    borderColor: 'brand.50',
    borderWidth: '1px',
    _hover: { bg: 'whiteAlpha.200' },
    _active: { bg: 'whiteAlpha.200' },
  },
  outline: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    bg: mode('white', 'gray.800')(props),
    _hover: {
      bg: mode(
        darken('gray.50', 1)(props.theme),
        transparentize('gray.700', 0.4)(props.theme),
      )(props),
    },
    _checked: {
      bg: mode('gray.100', 'gray.700')(props),
    },
    _active: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  ghost: (props: StyleFunctionProps) => ({
    color: 'emphasized',
    _hover: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
    _active: {
      bg: mode(darken('gray.50', 1)(props.theme), darken('gray.700', 4)(props.theme))(props),
    },
    _activeLink: {
      bg: mode('gray.100', 'gray.700')(props),
    },
  }),
  'ghost-on-accent': (props: StyleFunctionProps) => ({
    color: 'brand.50',
    _hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    _activeLink: {
      color: 'white',
      bg: 'bg-accent-subtle',
    },
  }),
  link: (props: StyleFunctionProps) => {
    if (props.colorScheme === 'gray') {
      return {
        color: 'muted',
        _hover: {
          textDecoration: 'none',
          color: 'default',
        },
        _active: {
          color: 'default',
        },
      }
    }
    return {
      color: mode(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
      _hover: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
        textDecoration: 'none',
      },
      _active: {
        color: mode(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
      },
    }
  },
  'link-on-accent': () => {
    return {
      padding: 0,
      height: 'auto',
      lineHeight: 'normal',
      verticalAlign: 'baseline',
      color: 'brand.50',
      _hover: {
        color: 'white',
      },
      _active: {
        color: 'white',
      },
    }
  },
}

export default defineStyleConfig({
  baseStyle,
  variants,
  sizes,
})
