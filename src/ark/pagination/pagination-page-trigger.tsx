import {
  PaginationPageTrigger as ArkPaginationPageTrigger,
  type PaginationPageTriggerProps as ArkPaginationPageTriggerProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import { chakra, type ChakraProps } from '@chakra-ui/react'
import { forwardRef } from 'react'
import { usePaginationStyles } from './pagination-context'

export type PaginationPageTriggerProps = Assign<ArkPaginationPageTriggerProps, ChakraProps>

const ChakraPaginationPageTrigger = chakra(ArkPaginationPageTrigger)

export const PaginationPageTrigger = forwardRef<HTMLButtonElement, PaginationPageTriggerProps>(
  function PaginationPageTrigger(props, ref) {
    const styles = usePaginationStyles()
    return <ChakraPaginationPageTrigger ref={ref} {...props} __css={styles.pageTrigger} />
  },
)
