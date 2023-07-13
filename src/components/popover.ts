import { popoverAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system'

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

const baseStyleContent = defineStyle({
  bg: 'bg.surface',
  borderWidth: '1px',
  boxShadow: 'lg',
  borderRadius: 'lg',
  overflow: 'hidden',
  _focusVisible: {
    boxShadow: 'focus',
  },
})

const baseStyle = definePartsStyle({
  content: baseStyleContent,
})

export default defineMultiStyleConfig({
  baseStyle,
})
