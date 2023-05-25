import {
  PaginationNextPageTrigger as ArkPaginationNextPageTrigger,
  type PaginationNextPageTriggerProps as ArkPaginationNextPageTriggerProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export interface PaginationNextPageTriggerProps
  extends Assign<ArkPaginationNextPageTriggerProps, ChakraProps> {}

const ChakraPaginationNextPageTrigger = chakra(ArkPaginationNextPageTrigger)

export const PaginationNextPageTrigger = forwardRef<
  HTMLButtonElement,
  PaginationNextPageTriggerProps
>(function PaginationNextPageTrigger(props, ref) {
  const styles = usePaginationStyles()
  return <ChakraPaginationNextPageTrigger ref={ref} {...props} __css={styles.nextPageTrigger} />
})
