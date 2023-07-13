import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'

const meta = {
  title: 'Pro Components',
}

export default meta

export const PageHeader = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '8', md: '10' }}>
      <Stack spacing={{ base: '4', md: '6' }}>
        <Stack spacing="3">
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="accent">
            Tagline
          </Text>
          <Heading size={{ base: 'md', md: 'lg' }} fontWeight="semibold">
            Get lifetime access
          </Heading>
        </Stack>
        <Text color="fg.muted" fontSize={{ base: 'lg', md: 'xl' }} maxW="3xl">
          Get early access to 210+ components and free updates.
        </Text>
      </Stack>
      <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing="4">
        <Button variant="secondary" size="xl">
          Learn more
        </Button>
        <Button variant="primary" size="xl">
          Buy now
        </Button>
      </Stack>
    </Stack>
  </Container>
)
