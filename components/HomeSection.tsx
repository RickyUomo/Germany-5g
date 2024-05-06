import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
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
          <Flex
            bg="white"
            px="30px"
            py="20px"
            maxW="360px"
            justify="center"
            alignItems="center"
            gap="5px"
            borderRadius="10px"
            h="100%"
            w={["100%", null, "150px"]}
            _hover={{ cursor: "pointer" }}
          >
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
        </Flex>
      </Box>
    </Box>
  );
};
