import {
  PaginationListItem as ArkPaginationListItem,
  type PaginationListItemProps as ArkPaginationListItemProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export type PaginationListItemProps = Assign<ArkPaginationListItemProps, ChakraProps>

const ChakraPaginationListItem = chakra(ArkPaginationListItem)

export const PaginationListItem = forwardRef<HTMLLIElement, PaginationListItemProps>(
  function PaginationListItem(props, ref) {
    const styles = usePaginationStyles()
    return <ChakraPaginationListItem ref={ref} {...props} __css={styles.listItem} />
  },
)
