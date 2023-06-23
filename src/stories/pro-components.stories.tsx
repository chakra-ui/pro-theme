import {
  Box,
  Button,
  CloseButton,
  Container,
  Heading,
  Icon,
  Link,
  Square,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BiCookie } from 'react-icons/bi'

const meta = {
  title: 'Pro Components',
}

export default meta

export const Banner1 = () => (
  <Container as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Box
      bg="bg.accent.default"
      color="fg.accent.default"
      px={{ base: '4', md: '3' }}
      py={{ base: '4', md: '2.5' }}
      position="relative"
      borderRadius="xl"
    >
      <CloseButton display={{ md: 'none' }} position="absolute" right="2" top="2" />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing={{ base: '3', md: '2' }}
      >
        <Stack
          spacing="4"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'start', md: 'center' }}
        >
          <Square
            size="12"
            bg="bg.accent.subtle"
            borderRadius="md"
            display={{ base: 'none', lg: 'flex' }}
          >
            <Icon as={BiCookie} boxSize="6" />
          </Square>

          <Stack spacing="0.5" pe={{ base: '4', md: '0' }}>
            <Text fontWeight="medium">
              We use our own and third-party cookies to personalize content.
            </Text>
            <Text color="fg.accent.muted">
              Read our <Link>Cookie Policy</Link>
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={{ base: '3', md: '2' }}
          align={{ base: 'stretch', md: 'center' }}
        >
          <Button variant="secondary.accent" width="full">
            Reject
          </Button>
          <Button variant="primary.accent" width="full">
            Allow
          </Button>
          <CloseButton display={{ base: 'none', md: 'inline-flex' }} />
        </Stack>
      </Stack>
    </Box>
  </Container>
)

export const Banner2 = () => (
  <Container as="section" pt={{ base: '4', md: '8' }} pb={{ base: '12', md: '24' }}>
    <Box
      bg="bg.surface"
      px={{ base: '4', md: '3' }}
      py={{ base: '4', md: '2.5' }}
      position="relative"
      boxShadow="sm"
      borderRadius="xl"
    >
      <CloseButton display={{ md: 'none' }} position="absolute" right="2" top="2" />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        spacing={{ base: '3', md: '2' }}
      >
        <Stack
          spacing="4"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'start', md: 'center' }}
        >
          <Square size="12" bg="bg.subtle" borderRadius="md" display={{ base: 'none', lg: 'flex' }}>
            <Icon as={BiCookie} boxSize="6" />
          </Square>
          <Stack spacing="0.5" pe={{ base: '4', md: '0' }}>
            <Text fontWeight="medium">
              We use our own and third-party cookies to personalize content.
            </Text>
            <Text color="fg.muted">
              Read our <Link>Cookie Policy</Link>
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          spacing={{ base: '3', md: '2' }}
          align={{ base: 'stretch', md: 'center' }}
        >
          <Button variant="secondary" width="full">
            Reject
          </Button>
          <Button variant="primary" width="full">
            Allow
          </Button>
          <CloseButton display={{ base: 'none', md: 'inline-flex' }} />
        </Stack>
      </Stack>
    </Box>
  </Container>
)

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
