import { Button } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Button',
}

export default meta

export const Basic = () => {
  return <Button>Hello</Button>
}
