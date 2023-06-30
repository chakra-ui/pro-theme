import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  header: {
    px: { base: 4, md: 6 },
    pt: 6,
    pb: 0,
    fontSize: 'md',
    fontWeight: 'normal',
  },
  body: {
    px: { base: 4, md: 6 },
    py: 6,
  },
  footer: {
    px: { base: 4, md: 6 },
    py: 4,
    display: 'block',
  },
  dialog: {
    bg: 'bg.surface',
    boxShadow: 'lg',
  },
})

export default defineMultiStyleConfig({ baseStyle })
