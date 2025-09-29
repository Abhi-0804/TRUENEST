import { Box, Text, Link, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <Box bg="gray.50" py={8} mt={16}>
      <Flex maxW="1200px" mx="auto" justify="space-between" flexWrap="wrap">
        <Text>© {new Date().getFullYear()} Better.com Replica</Text>
        <Flex gap={4}>
          <NextLink href="/about-us"><Link>About Us</Link></NextLink>
          <NextLink href="/start"><Link>Start</Link></NextLink>
        </Flex>
      </Flex>
    </Box>
  )
}
