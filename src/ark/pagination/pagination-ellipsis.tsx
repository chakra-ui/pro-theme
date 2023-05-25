import {
  PaginationEllipsis as ArkPaginationEllipsis,
  type PaginationEllipsisProps as ArkPaginationEllipsisProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export type PaginationEllipsisProps = Assign<ArkPaginationEllipsisProps, ChakraProps>

const ChakraPaginationEllipsis = chakra(ArkPaginationEllipsis)

export const PaginationEllipsis = forwardRef<HTMLDivElement, PaginationEllipsisProps>(
  function PaginationEllipsis(props, ref) {
    const styles = usePaginationStyles()
    return <ChakraPaginationEllipsis ref={ref} {...props} __css={styles.ellipsis} />
  },
)
