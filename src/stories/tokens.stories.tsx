import { AspectRatio, Box, Stack, Text, Wrap, useTheme } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Foundations / Tokens',
}

export default meta

export const TextStyles = () => {
  const textStyles = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl']
  return (
    <Stack spacing="8">
      {textStyles.map((textStyle) => (
        <Stack key={textStyle}>
          <Text textStyle="xs" color="fg.muted">
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

export const Shadows = () => {
  const theme = useTheme()
  const shadows = Object.keys(theme.semanticTokens.shadows).filter(
    (key) => !key.includes('chakra') && key !== 'focus',
  )

  return (
    <Stack spacing="5">
      <Text textStyle="xl" fontWeight="semibold">
        Shadows
      </Text>
      <Wrap spacing="8">
        {shadows.map((shadow) => (
          <Stack key={shadow}>
            <AspectRatio ratio={2 / 1} width="40">
              <Box boxShadow={shadow} bg="bg.surface" />
            </AspectRatio>
            <Text textStyle="xs" color="fg.muted">
              {shadow}
            </Text>
          </Stack>
        ))}
      </Wrap>
    </Stack>
  )
}

export const Colors = () => {
  const theme = useTheme()
  const semanticColors = Object.keys(theme.semanticTokens.colors).filter(
    (key) => !key.includes('chakra'),
  )

  return (
    <Stack spacing="20">
      <ColorPalette title="Foreground" items={semanticColors.filter((key) => key.includes('fg'))} />
      <ColorPalette title="Background" items={semanticColors.filter((key) => key.includes('bg'))} />
      <ColorPalette title="Border" items={semanticColors.filter((key) => key.includes('border'))} />
      <ColorPalette
        title="Accent"
        items={semanticColors.filter((key) => key.startsWith('accent'))}
      />
    </Stack>
  )
}

type ColorPaletteProps = {
  title: string
  items: string[]
}

const ColorPalette = (props: ColorPaletteProps) => {
  const { title, items } = props
  return (
    <Stack spacing="5">
      <Text textStyle="xl" fontWeight="semibold">
        {title}
      </Text>
      <Wrap spacing="1">
        {items.map((key) => (
          <Stack key={key}>
            <AspectRatio ratio={2 / 1} width="40">
              <Box key={key} bg={key} boxShadow="xs" />
            </AspectRatio>
            <Text textStyle="xs" color="fg.muted">
              {key}
            </Text>
          </Stack>
        ))}
      </Wrap>
    </Stack>
  )
}
