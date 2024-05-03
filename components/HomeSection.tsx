import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { HomeBoxLink } from "@/components/HomeBoxLink";
import { PX, MAX_W } from "@/styles/constans";

const BOX_DATA = [
  {
    name: (
      <Text color="white">
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
      <Text color="white">
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
      <Text color="white">
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
      bgImage="/web.jpg"
      bgSize="cover"
      bgPos="center top"
      minH={["640px", "100vh"]}
      id="#home"
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
        </Flex>
      </Box>
    </Box>
  );
};
