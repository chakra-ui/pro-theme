import { Input, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components / Input',
}

export default meta

export const WithSizes = () => {
  const sizes = ['sm', 'md', 'lg', 'xl']
  return (
    <Stack spacing="8" align="start">
      {sizes.map((size) => (
        <Stack key={size}>
          <Text textStyle="xs" color="fg.muted">
            {size}
          </Text>
          <Input size={size} placeholder="Placeholder" />
        </Stack>
      ))}
    </Stack>
  )
}
