import { Button, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'
import { FiCircle } from 'react-icons/fi'

const meta: Meta = {
  title: 'Button',
}

export default meta

// Chakra UI vs Pro
// 2xs: ?! _> 24
// xs: 24 -> 32
// sm: 32 -> 36
// md: 40 -> 40
// lg: 48 -> 44
// xl: ?! -> 48
// 2xl: ?! -> 60
export const WithSizes = () => {
  const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']
  return (
    <Stack direction="row" gap="4">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs">{size}</Text>
          <Button variant="primary" size={size} leftIcon={<FiCircle />} rightIcon={<FiCircle />}>
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}

export const WithVariants = () => {
  const variants = ['primary', 'secondary']
  return (
    <Stack direction="row" gap="4">
      {variants.map((variant) => (
        <Stack key={variant}>
          <Text textStyle="xs">{variant}</Text>
          <Button variant={variant} leftIcon={<FiCircle />} rightIcon={<FiCircle />}>
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}
