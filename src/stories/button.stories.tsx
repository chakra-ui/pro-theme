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
    ['solid', 'primary'],
    ['outline', 'secondary'],
    ['ghost', 'tertiary'],
    ['link', 'text'],
  ]
  return (
    <Stack spacing="20" align="start">
      {variants.map(([chakra, pro], index) => (
        <Stack key={index}>
          <HStack spacing="12">
            <Stack spacing="3">
              <Text textStyle="xs" color="fg.muted">
                {chakra}
              </Text>
              <Button
                variant={chakra}
                rightIcon={<FiArrowRight />}
                colorScheme={chakra === 'solid' ? 'teal' : 'gray'}
              >
                Button
              </Button>
              <Button
                variant={chakra}
                rightIcon={<FiArrowRight />}
                colorScheme={chakra === 'solid' ? 'teal' : 'gray'}
                isDisabled
              >
                Button
              </Button>
            </Stack>
            <Stack spacing="3">
              <Text textStyle="xs" color="fg.muted">
                {pro}
              </Text>
              <Button
                variant={pro}
                rightIcon={<FiArrowRight />}
                colorScheme={pro === 'text' ? 'gray' : 'teal'}
              >
                Button
              </Button>
              <Button
                variant={pro}
                rightIcon={<FiArrowRight />}
                isDisabled
                colorScheme={pro === 'text' ? 'gray' : 'teal'}
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
