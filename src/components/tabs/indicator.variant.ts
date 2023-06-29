import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, type StyleFunctionProps } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

type StyleFunctionPropsWithSize = StyleFunctionProps & { size: 'md' | 'lg' }

const sizes = {
  md: definePartsStyle({
    tab: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
    },
    tablist: {
      px: '1',
      gap: '2',
      h: '11',
    },
    indicator: {
      h: '9',
      marginTop: '-10',
    },
  }),
  lg: definePartsStyle({
    tab: {
      fontSize: 'md',
    },
    tablist: {
      px: '1.5',
      gap: '2',
      h: '14',
    },
    indicator: {
      h: '11',
      marginTop: '-50px',
    },
  }),
}

export const indicator = definePartsStyle((props) => {
  const { size } = props as StyleFunctionPropsWithSize
  const sizeProps = sizes[size]

  return {
    tablist: {
      ...sizeProps.tablist,
      borderRadius: 'lg',
      borderWidth: '1px',
      bg: 'bg.subtle',
    },
    tab: {
      ...sizeProps.tab,
      color: 'fg.subtle',
      fontWeight: 'semibold',
      zIndex: 1,
      _selected: {
        color: 'fg.emphasized',
      },
    },
    indicator: {
      ...sizeProps.indicator,
      borderRadius: 'md',
      boxShadow: 'xs',
      bg: 'white',
      _dark: {
        bg: 'gray.700',
      },
    },
  }
})
