import Header from "../components/Header";
import Footer from "../components/Footer";
import MortgageCalculator from "../components/MortgageCalculator";
import { Box, Heading } from "@chakra-ui/react";

export default function MortgagePage() {
  return (
    <>
      <Header />
      <Box maxW="800px" mx="auto" py={16}>
        <Heading mb={6}>Mortgage Calculator</Heading>
        <MortgageCalculator defaultTaxes={265} defaultZip="421005" />
      </Box>
      <Footer />
    </>
  )
}
