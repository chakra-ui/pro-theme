import { paginationAnatomy } from '@ark-ui/react'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system'

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  getKeys(paginationAnatomy.build()),
)

const baseStyle = definePartsStyle({
  list: defineStyle({
    display: 'flex',
    listStyleType: 'none',
  }),
  listItem: defineStyle({
    display: 'flex',
    alignItems: 'center',
  }),
})

export default defineMultiStyleConfig({ baseStyle })
