import { Stack, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components / Tabs',
}

export default meta

export const VariantUnderline = () => {
  const sizes = ['md', 'lg'] as const
  const orientations = ['horizontal', 'vertical'] as const
  return (
    <Stack spacing="12">
      {orientations.map((orientation) => (
        <Stack spacing="8" key={orientation}>
          {sizes.map((size) => (
            <Stack key={size} spacing="4">
              <Tabs size={size} orientation={orientation} variant="underline">
                <TabList>
                  <Tab>Home</Tab>
                  <Tab>Components</Tab>
                  <Tab>Pricing</Tab>
                </TabList>
                <TabIndicator />
              </Tabs>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}

export const VariantIndicator = () => {
  const sizes = ['md', 'lg'] as const
  const orientations = ['horizontal'] as const
  return (
    <Stack spacing="12">
      {orientations.map((orientation) => (
        <Stack spacing="8" key={orientation}>
          {sizes.map((size) => (
            <Stack key={size} spacing="4">
              <Tabs size={size} orientation={orientation} variant="indicator">
                <TabList>
                  <Tab>Home</Tab>
                  <Tab>Components</Tab>
                  <Tab>Pricing</Tab>
                </TabList>
                <TabIndicator />
              </Tabs>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  )
}
