import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Components / Drawer',
}

export default meta

export const Basic = () => {
  return (
    <Drawer isOpen={true} placement="right" onClose={() => void 0}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader bg="red.100">
          <Box bg="red.500">Header</Box>
        </DrawerHeader>
        <DrawerBody bg="green.100">
          <Box bg="green.500">Body</Box>
        </DrawerBody>
        <DrawerFooter bg="blue.100">
          <Box bg="blue.500">Footer</Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
