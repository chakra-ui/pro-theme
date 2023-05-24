import { Button, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'
import { FiCircle } from 'react-icons/fi'

const meta: Meta = {
  title: 'Components / Button',
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
    <Stack spacing="8" align="start">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs" color="muted">
            {size}
          </Text>
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
    <Stack spacing="8" align="start">
      {variants.map((variant) => (
        <Stack key={variant}>
          <Text textStyle="xs" color="muted">
            {variant}
          </Text>
          <Button variant={variant} leftIcon={<FiCircle />} rightIcon={<FiCircle />}>
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}
