import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MotionBox = motion(Box);

export default function MortgageCalculator({
  defaultTaxes = 265,
  defaultZip = "421005",
}) {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6);
  const [propertyTaxes, setPropertyTaxes] = useState(defaultTaxes);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const [breakdown, setBreakdown] = useState({
    principal: 0,
    interest: 0,
    taxes: 0,
  });

  useEffect(() => {
    calculateMonthlyPayment();
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTaxes]);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterest = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const basePayment =
      (principal *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPayments)) /
      (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);

    const taxesPerMonth = propertyTaxes / 12;
    const total = basePayment + taxesPerMonth;

    setMonthlyPayment(total.toFixed(2));

    setBreakdown({
      principal: (basePayment * 0.7).toFixed(2), // rough split
      interest: (basePayment * 0.3).toFixed(2),
      taxes: taxesPerMonth.toFixed(2),
    });
  };

  const resetValues = () => {
    setHomePrice(500000);
    setDownPayment(100000);
    setLoanTerm(30);
    setInterestRate(6);
    setPropertyTaxes(defaultTaxes);
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const resultBg = useColorModeValue("blue.50", "blue.900");

  const pieData = {
    labels: ["Principal", "Interest", "Taxes"],
    datasets: [
      {
        data: [breakdown.principal, breakdown.interest, breakdown.taxes],
        backgroundColor: ["#2B6CB0", "#63B3ED", "#ED8936"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      bgGradient="linear(to-r, blue.900, gray.900)"
      p={10}
      borderRadius="2xl"
      shadow="2xl"
      maxW="1000px"
      mx="auto"
      color="white"
      my={12}
    >
      <Heading
        size="lg"
        mb={8}
        textAlign="center"
        bgGradient="linear(to-r, yellow.300, white)"
        bgClip="text"
      >
        Mortgage Calculator
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        {/* Input Section */}
        <Box flex="1" bg={cardBg} p={6} borderRadius="xl" shadow="lg">
          <VStack spacing={6} align="stretch">
            {/* Home Price */}
            <FormControl>
              <FormLabel color="gray.600" fontWeight="bold">
                Home Price ($)
              </FormLabel>
              <NumberInput
                value={homePrice}
                min={0}
                max={5000000}
                onChange={(value) => setHomePrice(Number(value))}
              >
                <NumberInputField
                  bg="white"
                  color="black"
                  _placeholder={{ color: "gray.500" }}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            {/* Down Payment */}
            <FormControl>
              <FormLabel color="gray.600" fontWeight="bold">
                Down Payment ($)
              </FormLabel>
              <NumberInput
                value={downPayment}
                min={0}
                max={homePrice}
                onChange={(value) => setDownPayment(Number(value))}
              >
                <NumberInputField
                  bg="white"
                  color="black"
                  _placeholder={{ color: "gray.500" }}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            {/* Loan Term */}
            <FormControl>
              <FormLabel color="gray.600" fontWeight="bold">
                Loan Term (Years)
              </FormLabel>
              <Slider
                value={loanTerm}
                min={5}
                max={40}
                step={1}
                onChange={(val) => setLoanTerm(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text mt={2} color="gray.700" fontWeight="medium">
                {loanTerm} Years
              </Text>
            </FormControl>

            {/* Interest Rate */}
            <FormControl>
              <FormLabel color="gray.600" fontWeight="bold">
                Interest Rate (%)
              </FormLabel>
              <Slider
                value={interestRate}
                min={0}
                max={15}
                step={0.1}
                onChange={(val) => setInterestRate(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text mt={2} color="gray.700" fontWeight="medium">
                {interestRate}%
              </Text>
            </FormControl>

            {/* Property Taxes */}
            <FormControl>
              <FormLabel color="gray.600" fontWeight="bold">
                Property Taxes ($/year)
              </FormLabel>
              <NumberInput
                value={propertyTaxes}
                min={0}
                max={50000}
                onChange={(value) => setPropertyTaxes(Number(value))}
              >
                <NumberInputField
                  bg="white"
                  color="black"
                  _placeholder={{ color: "gray.500" }}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button colorScheme="yellow" mt={4} onClick={resetValues}>
              Reset
            </Button>
          </VStack>
        </Box>

        {/* Result Section */}
        <MotionBox
          flex="1"
          bg={resultBg}
          p={6}
          borderRadius="xl"
          shadow="lg"
          textAlign="center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Heading size="md" mb={4} color="gray.800">
            Monthly Payment
          </Heading>
          <AnimatePresence mode="wait">
            <motion.div
              key={monthlyPayment}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="blue.700">
                ${monthlyPayment}
              </Text>
            </motion.div>
          </AnimatePresence>

          <Divider my={4} />

          <Text fontWeight="semibold" mb={2} color="gray.800">
            Breakdown (per month)
          </Text>
          <Text color="blue.700">Principal: ${breakdown.principal}</Text>
          <Text color="blue.500">Interest: ${breakdown.interest}</Text>
          <Text color="orange.500">Taxes: ${breakdown.taxes}</Text>

          <Box mt={6}>
            <Pie data={pieData} />
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  );
}
