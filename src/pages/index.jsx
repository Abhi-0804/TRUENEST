import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCalculator,
  FaRegHandshake,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

export default function Home() {
  // Auto-rotating testimonials
  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Satisfied Homeowner",
      text: "Using this platform made securing my home loan incredibly straightforward. I appreciated the transparency and quick process.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Miller",
      role: "First-time Buyer",
      text: "I never imagined getting my mortgage approved this fast. Highly recommend for anyone looking for a stress-free experience.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Lee",
      role: "Investor",
      text: "The personalized loan offers were a game changer. The team really cares about what works best for you.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Animation presets
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <Box
        bgImage="/landing_page.png"
        bgAttachment="fixed"
        bgSize="cover"
        bgPos="center"
        h="100vh"
        position="relative"
        color="white"
      >
        <Box
          bgGradient="linear(to-r, blackAlpha.800, blackAlpha.600, blackAlpha.800)"
          w="full"
          h="full"
          position="absolute"
        />
        <MotionVStack
          spacing={6}
          position="relative"
          zIndex={2}
          h="full"
          justify="center"
          textAlign="center"
          px={6}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Heading
            size={{ base: "3xl", md: "6xl" }}
            fontWeight="extrabold"
            lineHeight="shorter"
            bgGradient="linear(to-r, yellow.300, white)"
            bgClip="text"
          >
            Get Your Mortgage Today
          </Heading>
          <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.200">
            Simple, Transparent, Fast
          </Text>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button
              size="lg"
              bg="yellow.400"
              color="black"
              px={10}
              py={6}
              shadow="xl"
              _hover={{ bg: "yellow.300" }}
            >
              Start Now
            </Button>
          </motion.div>
        </MotionVStack>
      </Box>

      {/* Services Section */}
      <MotionBox
        bg="gray.950"
        color="white"
        py={20}
        px={6}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading textAlign="center" mb={12}>
          SERVICES
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {[
            {
              icon: FaCalculator,
              title: "Mortgage Calculator",
              text: "AI-powered calculator for instant and accurate results.",
              img: "/mortagecalculator.webp",
            },
            {
              icon: FaRegHandshake,
              title: "Personalized Loan Offers",
              text: "Tailored loan options to suit your financial goals.",
              img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
            },
            {
              icon: FaGlobe,
              title: "Effortless Application",
              text: "Seamless online application with zero hassle.",
              img: "/Cleartransparent.jpeg",
            },
          ].map((service, i) => (
            <MotionBox
              key={i}
              p={8}
              borderRadius="2xl"
              bgImage={`url(${service.img})`}
              bgSize="cover"
              bgPos="center"
              position="relative"
              h="350px"
              overflow="hidden"
              whileHover={{ scale: 1.05 }}
              transition="all 0.4s ease"
              shadow="2xl"
              _before={{
                content: '""',
                pos: "absolute",
                inset: 0,
                bg: "blackAlpha.600",
                borderRadius: "2xl",
              }}
              variants={fadeUp}
            >
              <VStack
                spacing={3}
                position="relative"
                zIndex={2}
                color="white"
                textAlign="center"
                backdropFilter="blur(4px)"
              >
                <Icon as={service.icon} w={14} h={14} color="yellow.300" />
                <Heading size="lg">{service.title}</Heading>
                <Text maxW="250px">{service.text}</Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Testimonials Section */}
      <MotionBox
        bg="black"
        color="white"
        py={20}
        px={6}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Heading textAlign="center" mb={12}>
          TESTIMONIALS
        </Heading>
        <MotionFlex
          key={active}
          direction="column"
          align="center"
          textAlign="center"
          maxW="700px"
          mx="auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            size="xl"
            src={testimonials[active].img}
            mb={4}
            border="3px solid yellow"
          />
          <Flex justify="center" mb={3}>
            {[...Array(5)].map((_, i) => (
              <Icon as={FaStar} key={i} color="yellow.400" />
            ))}
          </Flex>
          <Text fontStyle="italic" mb={4} fontSize="xl">
            "{testimonials[active].text}"
          </Text>
          <Text fontWeight="bold">{testimonials[active].name}</Text>
          <Text color="gray.400">{testimonials[active].role}</Text>
        </MotionFlex>
      </MotionBox>

      {/* Contact Section */}
      <MotionBox
        bgImage="url('https://images.unsplash.com/photo-1502920917128-1aa500764b8a')"
        bgSize="cover"
        bgPos="center"
        color="white"
        py={20}
        px={6}
        position="relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Box bg="blackAlpha.700" position="absolute" inset="0" />
        <Heading textAlign="center" mb={12} position="relative" zIndex={2}>
          CONTACT
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={12}
          justify="center"
          align="start"
          position="relative"
          zIndex={2}
        >
          {/* Contact Info */}
          <MotionVStack
            align="start"
            spacing={4}
            maxW="300px"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
          >
            <Text><b>📍 Address:</b> Bengaluru, Karnataka</Text>
            <Text><b>📞 Phone:</b> 999-7777-000</Text>
            <Text><b>📧 Email:</b> xyz@gmail.com</Text>
            <Text><b>🕒 Hours:</b> Mon-Fri, 08:00-19:00</Text>
          </MotionVStack>

          {/* Contact Form */}
          <MotionVStack
            spacing={4}
            flex="1"
            maxW="500px"
            w="full"
            bg="gray.800"
            p={8}
            borderRadius="2xl"
            shadow="2xl"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" bg="white" color="black" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Your email" bg="white" color="black" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Your phone number" bg="white" color="black" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message..." bg="white" color="black" />
            </FormControl>
            <Button
              colorScheme="yellow"
              size="lg"
              w="full"
              _hover={{ transform: "scale(1.05)" }}
            >
              Contact Us
            </Button>
          </MotionVStack>
        </Flex>
      </MotionBox>
    </>
  );
}
