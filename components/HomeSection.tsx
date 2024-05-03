import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { HomeBoxLink } from "@/components/HomeBoxLink";

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
    <Box>
      <Flex flexWrap="wrap" gap="10px">
        {BOX_DATA.map((data, index) => (
          <HomeBoxLink {...data} key={index} />
        ))}
      </Flex>
    </Box>
  );
};
