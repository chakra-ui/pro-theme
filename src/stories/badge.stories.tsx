import { Badge, HStack, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components / Badge',
}

export default meta

export const WithSizes = () => {
  const sizes = ['sm', 'md', 'lg']
  return (
    <Stack spacing="8" align="start">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs" color="fg.muted">
            {size}
          </Text>
          <Badge size={size} variant="pill">
            Badge
          </Badge>
        </Stack>
      ))}
    </Stack>
  )
}

export const WithVariants = () => {
  const variants = ['pill']
  return (
    <Stack spacing="20" align="start">
      {variants.map((variant) => (
        <Stack key={variant}>
          <HStack spacing="12">
            <Stack spacing="3">
              <Text textStyle="xs" color="fg.muted">
                {variant}
              </Text>
              <HStack spacing="3">
                {['teal', 'blue', 'purple', 'gray'].map((color) => (
                  <Badge key={color} variant={variant} colorScheme={color}>
                    Badge
                  </Badge>
                ))}
              </HStack>
            </Stack>
          </HStack>
        </Stack>
      ))}
    </Stack>
  )
}
