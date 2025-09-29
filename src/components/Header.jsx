import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  IconButton,
  Collapse,
  VStack,
  HStack,
  Text,
  useDisclosure,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Colors based on mode
  const bgColor = scrolled
    ? useColorModeValue("white", "gray.900")
    : "transparent";
  const textColor = useColorModeValue("gray.800", "white");

  // Nav links
  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/mortgage-calculator", label: "Mortgage Calculator" },
  ];

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      transition="all 0.3s ease"
      bg={bgColor}
      boxShadow={scrolled ? "sm" : "none"}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        py={4}
        justify="space-between"
        align="center"
      >
        {/* Logo */}
        <NextLink href="/" passHref>
          <Text
            fontWeight="bold"
            fontSize="xl"
            cursor="pointer"
            bgGradient="linear(to-r, teal.400, blue.400)"
            bgClip="text"
          >
            TrueNest
          </Text>
        </NextLink>

        {/* Desktop Nav */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }} color={textColor}>
          {links.map((link) => (
            <NextLink key={link.href} href={link.href} passHref>
              <Link
                position="relative"
                _hover={{ color: "teal.400" }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: router.pathname === link.href ? "100%" : "0%",
                  height: "2px",
                  bottom: "-4px",
                  left: "0",
                  bg: "teal.400",
                  transition: "width 0.3s ease",
                }}
                _hover={{
                  _after: { width: "100%" },
                }}
              >
                {link.label}
              </Link>
            </NextLink>
          ))}
          <NextLink href="/start" passHref>
            <Button
              colorScheme="yellow"
              _hover={{ transform: "scale(1.05)" }}
            >
              Start
            </Button>
          </NextLink>

          {/* Dark Mode Toggle */}
          <IconButton
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            variant="ghost"
          />
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          variant="ghost"
          aria-label="Toggle Navigation"
          fontSize="20px"
        />
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          bg={useColorModeValue("white", "gray.900")}
          color={textColor}
          py={4}
          display={{ md: "none" }}
          spacing={4}
          shadow="sm"
        >
          {links.map((link) => (
            <NextLink key={link.href} href={link.href} passHref>
              <Link onClick={onToggle}>{link.label}</Link>
            </NextLink>
          ))}
          <NextLink href="/start" passHref>
            <Button colorScheme="yellow" onClick={onToggle}>
              Start
            </Button>
          </NextLink>
          <IconButton
            aria-label="Toggle Dark Mode"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            variant="ghost"
          />
        </VStack>
      </Collapse>
    </Box>
  );
}
