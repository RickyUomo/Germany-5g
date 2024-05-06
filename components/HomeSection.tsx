import React, { useEffect, useState } from "react";
import { Box, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { HomeBoxLink } from "@/components/HomeBoxLink";
import { PX, MAX_W } from "@/styles/constans";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const BOX_DATA = [
  {
    name: (
      <Text fontSize={["18px", null, "20px"]} color="white">
        <Text as="span" fontWeight={800}>
          MetaVerse
        </Text>{" "}
        for Electronics and Computer Peripherals
      </Text>
    ),
    url: "",
  },
  {
    name: (
      <Text fontSize={["18px", null, "20px"]} color="white">
        <Text as="span" fontWeight={800}>
          MetaVerse
        </Text>{" "}
        for Metal Fabrication and Livelihood Solutions
      </Text>
    ),
    url: "",
  },
  {
    name: (
      <Text fontSize={["18px", null, "20px"]} color="white">
        <Text as="span" fontWeight={800}>
          MetaVerse
        </Text>{" "}
        for Car Accessories and Medical Equipment
      </Text>
    ),
    url: "",
  },
];

export const HomeSection = () => {
  const [isIPhone, setIsIPhone] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIPhone(userAgent.match(/iPhone/i) !== null);
    setIsSafari(/safari/.test(userAgent) && !/chrome/.test(userAgent));
  }, []);

  return (
    <Box
      pos="relative"
      bgImage={["web-m.jpg", null, "/web.jpg"]}
      bgSize="cover"
      bgPos="center top"
      minH={["640px", "100vh"]}
      id="home"
    >
      <Box px={PX} maxW={MAX_W} mx="auto">
        <Flex
          pos="absolute"
          bottom={["3%", "10%"]}
          left="50%"
          transform="translateX(-50%)"
          flexWrap="wrap"
          justify="center"
          alignItems="center"
          gap="10px"
          w="100%"
        >
          {BOX_DATA.map((data, index) => (
            <HomeBoxLink {...data} key={index} />
          ))}
          {isIPhone && isSafari && (
            <ChakraLink
              as={Link}
              _hover={{ cursor: "pointer" }}
              w={["100%", null, "150px"]}
              px="30px"
              py="20px"
              maxW="360px"
              bg="white"
              borderRadius="10px"
              h="100%"
              href="/vitart"
              rel="ar"
            >
              <Flex justify="center" alignItems="center" gap="5px">
                <Text
                  fontSize={["18px", null, "20px"]}
                  bgGradient="linear(to-r, #1bb9aa, #3197d3)"
                  bgClip="text"
                  textAlign="center"
                >
                  Physical
                </Text>
                <ArrowForwardIcon color="#3298d2" boxSize={5} />
              </Flex>
            </ChakraLink>
          )}
        </Flex>
      </Box>
    </Box>
  );
};
