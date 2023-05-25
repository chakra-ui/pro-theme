import {
  PaginationList as ArkPaginationList,
  type PaginationListProps as ArkPaginationListProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export type PaginationListProps = Assign<ArkPaginationListProps, ChakraProps>

const ChakraPaginationList = chakra(ArkPaginationList)

export const PaginationList = forwardRef<HTMLUListElement, PaginationListProps>(
  function PaginationList(props, ref) {
    const styles = usePaginationStyles()
    return <ChakraPaginationList ref={ref} {...props} __css={styles.list} />
  },
)
