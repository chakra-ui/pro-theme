import { tabsAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  type StyleFunctionProps,
} from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

const baseStyle = definePartsStyle({
  tab: {
    fontWeight: 'semibold',
    color: 'fg.subtle',
  },
})

const sizes = {
  md: definePartsStyle({
    tab: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
      py: '2',
    },
  }),
  lg: definePartsStyle({
    tab: {
      fontSize: 'md',
      py: '2.5',
    },
  }),
}

interface StyleFunctionPropsWithSize extends StyleFunctionProps {
  size: 'md' | 'lg'
}

const underline = defineStyle((props) => {
  const { orientation, size } = props as StyleFunctionPropsWithSize
  const isVertical = orientation === 'vertical'
  const borderProp = isVertical ? 'borderStart' : 'borderBottom'
  const marginProp = isVertical ? 'marginStart' : 'marginBottom'

  const sizeProps = sizes[size]

  const horizontalStyles = definePartsStyle({
    tab: {
      pt: '0',
      pb: '2.5',
      px: '1',
      justifyContent: 'start',
    },
    tabList: {
      gap: '4',
    },
  })

  const verticalStyles = definePartsStyle({
    tab: {
      justifyContent: 'start',
      px: size === 'lg' ? '3.5' : '3',
    },
    tabList: {
      gap: '1',
    },
  })

  return {
    tablist: {
      [borderProp]: '1px solid',
      borderColor: 'inherit',
      ...(isVertical ? verticalStyles.tabList : horizontalStyles.tabList),
    },
    tab: {
      [borderProp]: '2px solid transparent',
      [marginProp]: '-1px',
      ...baseStyle.tab,
      ...sizeProps.tab,
      _selected: {
        color: 'accent',
        [borderProp]: '2px solid',
      },
      ...(isVertical ? verticalStyles.tab : horizontalStyles.tab),
    },
  }
})

export default defineMultiStyleConfig({
  variants: {
    underline,
  },
  defaultProps: {
    colorScheme: 'brand',
  },
})
