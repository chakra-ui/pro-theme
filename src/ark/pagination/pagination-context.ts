import { paginationAnatomy } from '@ark-ui/react'
import { type SystemStyleObject } from '@chakra-ui/react'
import { createContext } from '@chakra-ui/react-context'

const anatomy = paginationAnatomy.build()

type Parts = keyof typeof anatomy

export const [PaginationStylesProvider, usePaginationStyles] = createContext<
  Record<Parts, SystemStyleObject>
>({
  name: 'PaginationStylesContext',
  hookName: 'usePaginationStyles',
  providerName: '<Pagination />',
})
