import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Start() {
  return (
    <>
      <Header />
      <Box maxW="800px" mx="auto" py={16} textAlign="center">
        <Heading mb={4}>Start Your Mortgage</Heading>
        <Text fontSize="lg" mb={8}>It only takes 3 minutes to get started and see your options.</Text>
        <Button colorScheme="blue" size="lg">Start Now</Button>
      </Box>
      <Footer />
    </>
  )
}
