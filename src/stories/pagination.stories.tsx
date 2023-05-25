import { Button, ButtonGroup, Center, VisuallyHidden } from '@chakra-ui/react'
import { type Meta } from '@storybook/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNextPageTrigger,
  PaginationPageTrigger,
  PaginationPrevPageTrigger,
} from '../ark/pagination'

export default {
  title: 'Components / Pagination',
} as Meta

export const Basic = () => (
  <Pagination count={200} pageSize={10} siblingCount={2}>
    {({ pages }) => (
      <PaginationList>
        <PaginationListItem>
          <PaginationPrevPageTrigger asChild>
            <Button variant="ghost" leftIcon={<FiArrowLeft fontSize="1.25rem" />}>
              Previous <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationPrevPageTrigger>
        </PaginationListItem>

        {pages.map((page, index) =>
          page.type === 'page' ? (
            <PaginationListItem key={index}>
              <PaginationPageTrigger asChild {...page}>
                <Button variant="ghost">{page.value}</Button>
              </PaginationPageTrigger>
            </PaginationListItem>
          ) : (
            <PaginationListItem key={index}>
              <PaginationEllipsis index={index}>&#8230;</PaginationEllipsis>
            </PaginationListItem>
          ),
        )}
        <PaginationListItem>
          <PaginationNextPageTrigger asChild>
            <Button variant="ghost" rightIcon={<FiArrowRight fontSize="1.25rem" />}>
              Next <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationNextPageTrigger>
        </PaginationListItem>
      </PaginationList>
    )}
  </Pagination>
)

export const PaginationSpaceBetween = () => (
  <Pagination count={200} pageSize={10} siblingCount={2}>
    {({ pages }) => (
      <PaginationList justifyContent="space-between">
        <PaginationListItem>
          <PaginationPrevPageTrigger asChild>
            <Button variant="secondary" leftIcon={<FiArrowLeft fontSize="1.25rem" />}>
              Previous <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationPrevPageTrigger>
        </PaginationListItem>

        <PaginationList gap="1">
          {pages.map((page, index) =>
            page.type === 'page' ? (
              <PaginationListItem key={index}>
                <PaginationPageTrigger asChild {...page}>
                  <Button variant="ghost">{page.value}</Button>
                </PaginationPageTrigger>
              </PaginationListItem>
            ) : (
              <PaginationListItem key={index}>
                <PaginationEllipsis index={index}>&#8230;</PaginationEllipsis>
              </PaginationListItem>
            ),
          )}
        </PaginationList>

        <PaginationListItem>
          <PaginationNextPageTrigger asChild>
            <Button variant="secondary" rightIcon={<FiArrowRight fontSize="1.25rem" />}>
              Next <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationNextPageTrigger>
        </PaginationListItem>
      </PaginationList>
    )}
  </Pagination>
)

export const PaginationButtonGroup = () => (
  <Pagination count={200} pageSize={10} siblingCount={2}>
    {({ pages }) => (
      <ButtonGroup as={PaginationList} isAttached gap={0}>
        <PaginationListItem>
          <PaginationPrevPageTrigger asChild>
            <Button
              variant="secondary"
              borderEndRadius="inherit"
              marginInlineEnd="-1px"
              leftIcon={<FiArrowLeft fontSize="1.25rem" />}
            >
              Previous <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationPrevPageTrigger>
        </PaginationListItem>

        {pages.map((page, index) =>
          page.type === 'page' ? (
            <PaginationPageTrigger key={index} {...page}>
              <Button variant="secondary" borderRadius="inherit" marginInlineEnd="-1px">
                {page.value}
              </Button>
            </PaginationPageTrigger>
          ) : (
            <PaginationEllipsis index={index} asChild>
              <Button variant="secondary" borderRadius="inherit" marginInlineEnd="-1px">
                &#8230;
              </Button>
            </PaginationEllipsis>
          ),
        )}

        <PaginationNextPageTrigger>
          <Button
            variant="secondary"
            borderStartRadius="inherit"
            rightIcon={<FiArrowRight fontSize="1.25rem" />}
          >
            Next <VisuallyHidden>Page</VisuallyHidden>
          </Button>
        </PaginationNextPageTrigger>
      </ButtonGroup>
    )}
  </Pagination>
)

export const PaginationShort = () => (
  <Pagination count={200} pageSize={10} siblingCount={2}>
    {({ pages, page }) => (
      <PaginationList gap="1">
        <PaginationListItem>
          <PaginationPrevPageTrigger asChild>
            <Button variant="secondary" leftIcon={<FiArrowLeft fontSize="1.25rem" />}>
              Previous <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationPrevPageTrigger>
        </PaginationListItem>
        <PaginationListItem>
          <Center as="span" flex="1" fontWeight="medium">
            Page {page} of {pages.length}
          </Center>
        </PaginationListItem>

        <PaginationListItem>
          <PaginationNextPageTrigger asChild>
            <Button variant="secondary" rightIcon={<FiArrowRight fontSize="1.25rem" />}>
              Next <VisuallyHidden>Page</VisuallyHidden>
            </Button>
          </PaginationNextPageTrigger>
        </PaginationListItem>
      </PaginationList>
    )}
  </Pagination>
)
