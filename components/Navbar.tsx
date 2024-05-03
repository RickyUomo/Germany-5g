import React from "react";
import { Flex, Image, Text, Link } from "@chakra-ui/react";

const NAV_DATA = [
  {
    name: "HOME",
    url: "/",
  },
  {
    name: "ABOUT",
    url: "/#about",
  },
  {
    name: "COMPANY",
    url: "/#company",
  },
];

export const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bg="#070b36"
      px={["20px", "40px", "60px", "80px"]}
      py={["3px", "6px"]}
    >
      <Image w={["100px", "200px"]} src="/web_logo.svg" alt="web logo" />

      <Flex
        alignItems="center"
        color="white"
        fontSize={["14px", "16px", "18px", "20px"]}
        gap={["5px", "10px", "15px"]}
      >
        {NAV_DATA.map((data, index) => (
          <Text key={index}>
            <Link
              _hover={{
                textDecor: "none",
              }}
              href={data.url}
            >
              {data.name}
            </Link>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
