import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, type StyleFunctionProps } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

type StyleFunctionPropsWithSize = StyleFunctionProps & { size: 'md' | 'lg' }

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

export const underline = definePartsStyle((props) => {
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
    indicator: {
      height: '0.5',
      marginTop: -0.5,
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
    indicator: {
      width: '0.5',
    },
  })

  return {
    tablist: {
      [borderProp]: '1px solid',
      borderColor: 'inherit',
      ...(isVertical ? verticalStyles.tabList : horizontalStyles.tabList),
    },
    tab: {
      [marginProp]: '-1px',
      fontWeight: 'semibold',
      color: 'fg.subtle',
      ...sizeProps.tab,
      _selected: {
        color: 'accent',
      },
      ...(isVertical ? verticalStyles.tab : horizontalStyles.tab),
    },
    indicator: {
      bg: 'accent',
      ...(isVertical ? verticalStyles.indicator : horizontalStyles.indicator),
    },
  }
})
