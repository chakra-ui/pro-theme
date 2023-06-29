import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'
import { indicator } from './indicator.variant'
import { underline } from './underline.variant'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys)

export default defineMultiStyleConfig({
  variants: {
    underline,
    indicator,
  },
  defaultProps: {
    colorScheme: 'brand',
    size: 'md',
  },
})
