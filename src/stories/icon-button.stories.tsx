import { IconButton, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'
import { FiCircle } from 'react-icons/fi'

const meta: Meta = {
  title: 'Components / Icon Button',
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
          <IconButton variant="primary" size={size} icon={<FiCircle />} aria-label="icon button" />
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
  ]
  return (
    <Stack spacing="8" align="start">
      {variants.map(({ variant, colorScheme }) => (
        <Stack key={variant} spacing="3" align="start">
          <Text textStyle="xs" color="fg.muted">
            {variant}
          </Text>
          <IconButton
            variant={variant}
            colorScheme={colorScheme}
            icon={<FiCircle />}
            aria-label="Circle"
          />
          <IconButton
            variant={variant}
            colorScheme={colorScheme}
            icon={<FiCircle />}
            aria-label="Circle"
            isDisabled
          />
        </Stack>
      ))}
    </Stack>
  )
}
