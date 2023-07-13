import { defineCssVars, defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { transparentize } from '@chakra-ui/theme-tools'

const sizes = {
  '2xs': defineStyle({
    h: '6',
    minW: '6',
    fontSize: '2xs',
    px: '2',
    '& svg': {
      fontSize: 'sm',
    },
  }),
  xs: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'xs',
    lineHeight: '1.125rem',
    px: '2',
    '& svg': {
      fontSize: 'md',
    },
  }),
  sm: defineStyle({
    h: '9',
    minW: '9',
    fontSize: 'sm',
    lineHeight: '1.25rem',
    px: '3.5',
    '& svg': {
      fontSize: 'xl',
    },
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'sm',
    lineHeight: '1.25rem',
    px: '4',
    '& svg': {
      fontSize: 'xl',
    },
  }),
  lg: defineStyle({
    h: '11',
    minW: '11',
    fontSize: 'md',
    lineHeight: '1.5rem',
    px: '4.5',
    '& svg': {
      fontSize: 'xl',
    },
  }),
  xl: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'md',
    lineHeight: '1.5rem',
    px: '5',
    '& svg': {
      fontSize: 'xl',
    },
  }),
  '2xl': defineStyle({
    h: '15',
    minW: '15',
    fontSize: 'lg',
    lineHeight: '1.75rem',
    px: '7',
    '& svg': {
      fontSize: '2xl',
    },
  }),
}

const vars = defineCssVars('button', ['bg', 'color'])

const variants = {
  primary: defineStyle((props) => {
    const { colorScheme } = props
    return {
      borderRadius: 'lg',
      flexShrink: 0,
      bg: vars.bg.reference,
      color: vars.color.reference,

      [vars.bg.variable]: `colors.${colorScheme}.500`,
      [vars.color.variable]: `colors.white`,
      _dark: {
        [vars.bg.variable]: `colors.${colorScheme}.200`,
        [vars.color.variable]: `colors.gray.800`,
      },
      _hover: {
        [vars.bg.variable]: `colors.${colorScheme}.600`,
        _disabled: {
          background: 'inerit',
        },
        _dark: {
          [vars.bg.variable]: `colors.${colorScheme}.300`,
        },
      },
      _active: {
        [vars.bg.variable]: `colors.${colorScheme}.700`,
        _dark: {
          [vars.bg.variable]: `colors.${colorScheme}.400`,
        },
      },
      _disabled: {
        _hover: {
          [vars.bg.variable]: `colors.${colorScheme}.500`,
          _dark: {
            [vars.bg.variable]: `colors.${colorScheme}.200`,
          },
        },
      },
      _focusVisible: {
        boxShadow: 'focus',
      },
    }
  }),

  secondary: defineStyle({
    borderWidth: '1px',
    borderColor: 'border.emphasized',
    borderRadius: 'lg',
    flexShrink: 0,
    bg: vars.bg.reference,
    color: vars.color.reference,
    [vars.color.variable]: `colors.gray.700`,
    '> svg': {
      color: 'fg.muted',
    },
    _dark: {
      [vars.color.variable]: `colors.gray.200`,
    },
    _hover: {
      [vars.bg.variable]: `colors.gray.50`,
      [vars.color.variable]: `colors.gray.800`,
      _dark: {
        [vars.bg.variable]: `colors.gray.800`,
        [vars.color.variable]: `colors.white`,
      },
    },
    _checked: {
      [vars.bg.variable]: `colors.gray.50`,
      _dark: {
        [vars.bg.variable]: `colors.gray.800`,
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
    _selected: {
      [vars.bg.variable]: `colors.gray.50`,
      [vars.color.variable]: `colors.gray.900`,
      _dark: {
        [vars.bg.variable]: `colors.gray.800`,
        [vars.color.variable]: `colors.white`,
      },
    },
    _disabled: {
      opacity: 1,
      borderColor: 'border.default',
      [vars.color.variable]: `colors.gray.400`,
      '> svg': {
        color: 'unset',
      },
      _dark: {
        [vars.color.variable]: `colors.gray.600`,
      },
      _hover: {
        [vars.color.variable]: `colors.gray.400`,
        _dark: {
          [vars.color.variable]: `colors.gray.600`,
        },
      },
    },
    _focusVisible: {
      boxShadow: 'focus',
    },
  }),

  tertiary: defineStyle({
    borderRadius: 'lg',
    flexShrink: 0,
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
    _checked: {
      [vars.bg.variable]: `colors.gray.50`,
      _dark: {
        [vars.bg.variable]: `colors.gray.800`,
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
    _activeLink: {
      [vars.bg.variable]: `colors.gray.100`,
      _dark: {
        [vars.bg.variable]: `colors.gray.700`,
      },
    },
    _disabled: {
      opacity: 1,
      [vars.color.variable]: `colors.gray.400`,
      _dark: {
        [vars.color.variable]: `colors.gray.600`,
      },
      _hover: {
        [vars.color.variable]: `colors.gray.400`,
        _dark: {
          [vars.color.variable]: `colors.gray.600`,
        },
      },
    },
    _focusVisible: {
      boxShadow: 'focus',
    },
  }),

  text: defineStyle((props) => {
    const { colorScheme } = props
    const baseStyle = defineStyle({
      borderRadius: '0',
      padding: 0,
      height: 'auto',
      verticalAlign: 'baseline',
      color: vars.color.reference,
      justifyContent: 'flex-start',
    })

    if (colorScheme === 'gray') {
      return {
        ...baseStyle,
        [vars.color.variable]: `colors.gray.600`,
        _dark: {
          [vars.color.variable]: `colors.gray.200`,
        },
        _hover: {
          [vars.color.variable]: `colors.gray.700`,
          _dark: {
            [vars.color.variable]: `colors.gray.300`,
          },
        },
        _active: {
          [vars.color.variable]: `colors.gray.800`,
          _dark: {
            [vars.color.variable]: `colors.gray.300`,
          },
        },
        _focusVisible: {
          boxShadow: 'focus',
        },
        _disabled: {
          opacity: 1,
          [vars.color.variable]: `colors.gray.400`,
          _dark: {
            [vars.color.variable]: `colors.gray.600`,
          },
          _hover: {
            [vars.color.variable]: `colors.gray.400`,
            _dark: {
              [vars.color.variable]: `colors.gray.600`,
            },
          },
        },
      }
    }

    return {
      ...baseStyle,
      [vars.color.variable]: `colors.${colorScheme}.600`,
      _dark: {
        [vars.color.variable]: `colors.${colorScheme}.200`,
      },
      _hover: {
        [vars.color.variable]: `colors.${colorScheme}.700`,
        _dark: {
          [vars.color.variable]: `colors.${colorScheme}.300`,
        },
      },
      _active: {
        [vars.color.variable]: `colors.${colorScheme}.700`,
        _dark: {
          [vars.color.variable]: `colors.${colorScheme}.300`,
        },
      },
    }
  }),

  'primary.accent': defineStyle(() => {
    return {
      bg: 'brand.50',
      color: 'brand.600',
      _hover: { bg: 'brand.100' },
      _active: { bg: 'brand.100' },
    }
  }),

  'secondary.accent': {
    color: 'white',
    borderColor: 'brand.50',
    borderWidth: '1px',
    _hover: { bg: 'whiteAlpha.200' },
    _active: { bg: 'whiteAlpha.200' },
  },

  'tertiary.accent': defineStyle((props) => ({
    color: 'fg.accent.muted',
    _hover: {
      bg: transparentize('brand.500', 0.67)(props.theme),
    },
    _activeLink: {
      color: 'white',
      bg: 'bg.accent.subtle',
    },
  })),

  'text.accent': defineStyle({
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
  }),
}

export default defineStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: 'primary',
    colorScheme: 'brand',
  },
})
