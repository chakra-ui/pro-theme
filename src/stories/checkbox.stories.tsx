import { Checkbox, Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components / Checkbox',
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
          <Checkbox size={size} defaultChecked>
            Remember me
          </Checkbox>
        </Stack>
      ))}
    </Stack>
  )
}
