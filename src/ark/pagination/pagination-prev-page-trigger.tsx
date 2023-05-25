import {
  PaginationPrevPageTrigger as ArkPaginationPrevPageTrigger,
  type PaginationPrevPageTriggerProps as ArkPaginationPrevPageTriggerProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export type PaginationPrevPageTriggerProps = Assign<ArkPaginationPrevPageTriggerProps, ChakraProps>

const ChakraPaginationPrevPageTrigger = chakra(ArkPaginationPrevPageTrigger)

export const PaginationPrevPageTrigger = forwardRef<
  HTMLButtonElement,
  PaginationPrevPageTriggerProps
>(function PaginationPrevPageTrigger(props, ref) {
  const styles = usePaginationStyles()
  return <ChakraPaginationPrevPageTrigger ref={ref} {...props} __css={styles.prevPageTrigger} />
})
