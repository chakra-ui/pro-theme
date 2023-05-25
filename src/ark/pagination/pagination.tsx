import {
  Pagination as ArkPagination,
  type PaginationProps as ArkPaginationProps,
} from '@ark-ui/react'
import type { Assign } from '@ark-ui/react/dist/types'
import {
  chakra,
  omitThemingProps,
  shouldForwardProp,
  useMultiStyleConfig,
  type ChakraProps,
  type ThemingProps,
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { PaginationStylesProvider } from './pagination-context'

export interface PaginationProps
  extends Assign<ArkPaginationProps, ChakraProps>,
    ThemingProps<'Pagination'> {}

const ChakraPagination = chakra(ArkPagination, {
  shouldForwardProp: (prop) => prop === 'as' || shouldForwardProp(prop),
})

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(function Pagination(
  props,
  ref,
) {
  const styles = useMultiStyleConfig('Pagination', props)
  const ownProps = omitThemingProps(props)
  return (
    <PaginationStylesProvider value={styles}>
      <ChakraPagination ref={ref} {...ownProps} __css={styles.root} />
    </PaginationStylesProvider>
  )
})
