import { Stack, Text } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Text Styles',
}

export default meta

export const Basic = () => {
  const textStyles = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']
  return (
    <Stack spacing="8">
      {textStyles.map((textStyle) => (
        <Stack key={textStyle}>
          <Text textStyle="xs" color="muted">
            {textStyle}
          </Text>
          <Text textStyle={textStyle} variant={textStyle}>
            Ag
          </Text>
        </Stack>
      ))}
    </Stack>
  )
}
