import { Button, HStack, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'
import { FiArrowRight } from 'react-icons/fi'

const meta: Meta = {
  title: 'Components / Button',
}

export default meta

export const WithSizes = () => {
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
  return (
    <Stack spacing="8" align="start">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs" color="fg.muted">
            {size}
          </Text>
          <Button variant="primary" size={size} rightIcon={<FiArrowRight />}>
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}

export const WithVariants = () => {
  const variants = [
    [
      { variant: 'solid', colorScheme: 'teal' },
      { variant: 'primary', colorScheme: 'brand' },
    ],
    [
      { variant: 'outline', colorScheme: 'gray' },
      { variant: 'secondary', colorScheme: 'gray' },
    ],
    [
      { variant: 'ghost', colorScheme: 'gray' },
      { variant: 'tertiary', colorScheme: 'gray' },
    ],
    [
      { variant: 'link', colorScheme: 'gray' },
      { variant: 'text', colorScheme: 'gray' },
    ],
  ]
  return (
    <Stack spacing="20" align="start">
      {variants.map(([chakra, pro], index) => (
        <Stack key={index}>
          <HStack spacing="12">
            <Stack spacing="3">
              <Text textStyle="xs" color="fg.muted">
                {chakra.variant}
              </Text>
              <Button
                variant={chakra.variant}
                colorScheme={chakra.colorScheme}
                rightIcon={<FiArrowRight />}
              >
                Button
              </Button>
              <Button
                variant={chakra.variant}
                colorScheme={chakra.colorScheme}
                rightIcon={<FiArrowRight />}
                isDisabled
              >
                Button
              </Button>
            </Stack>
            <Stack spacing="3">
              <Text textStyle="xs" color="fg.muted">
                {pro.variant}
              </Text>
              <Button
                variant={pro.variant}
                colorScheme={pro.colorScheme}
                rightIcon={<FiArrowRight />}
              >
                Button
              </Button>
              <Button
                variant={pro.variant}
                colorScheme={pro.colorScheme}
                rightIcon={<FiArrowRight />}
                isDisabled
              >
                Button
              </Button>
            </Stack>
          </HStack>
        </Stack>
      ))}
    </Stack>
  )
}
