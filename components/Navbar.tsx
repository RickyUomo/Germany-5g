import React from "react";
import { Flex, Image, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { PX } from "@/styles/constans";
import { useRouter } from "next/router";

const NAV_DATA = [
  {
    name: "HOME",
    url: "/#home",
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
  const router = useRouter();

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bg="#070b36"
      px={PX}
      py={["6px", "8px", "10px"]}
    >
      <ChakraLink as={Link} href="/">
        <Image w={["100px", "200px"]} src="/web_logo.svg" alt="web logo" />
      </ChakraLink>

      <Flex
        alignItems="center"
        color="white"
        fontSize={["14px", "16px", "18px", "20px"]}
        gap={["5px", "10px", "15px"]}
      >
        {NAV_DATA.map((data, index) => (
          <Text key={index}>
            <ChakraLink
              as={Link}
              _hover={{
                textDecor: "none",
              }}
              color={router.asPath === data.url ? "#56b2ef" : "white"}
              href={data.url}
            >
              {data.name}
            </ChakraLink>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
