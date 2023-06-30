import { Button, Stack, Text } from '@chakra-ui/react'
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
    { variant: 'primary', colorScheme: 'brand' },
    { variant: 'secondary', colorScheme: 'gray' },
    { variant: 'tertiary', colorScheme: 'gray' },
    { variant: 'text', colorScheme: 'gray' },
  ]
  return (
    <Stack spacing="20" align="start">
      {variants.map(({ variant, colorScheme }, index) => (
        <Stack key={index}>
          <Stack spacing="3">
            <Text textStyle="xs" color="fg.muted">
              {variant}
            </Text>
            <Button variant={variant} colorScheme={colorScheme} rightIcon={<FiArrowRight />}>
              Button
            </Button>
            <Button
              variant={variant}
              colorScheme={colorScheme}
              rightIcon={<FiArrowRight />}
              isDisabled
            >
              Button
            </Button>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}
