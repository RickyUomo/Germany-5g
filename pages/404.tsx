import { Text, Link as ChakraLink, Flex, Center } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <Center minH="100vh" display="flex" flexDir="column">
      <Text fontSize={["44px"]} fontWeight={800} mb="10px">
        Page not found
      </Text>
      <Flex justify="center">
        <ChakraLink
          as={Link}
          textAlign="center"
          _hover={{
            textDecor: "none",
          }}
          color="white"
          href="/"
        >
          <Flex
            px="20px"
            py="10px"
            alignItems="center"
            justify="center"
            gap="10px"
            bgGradient="linear(to-r, #1ebea5, #107bef)"
            borderRadius="5px"
            maxW="300px"
            fontSize="20px"
          >
            Home
          </Flex>
        </ChakraLink>
      </Flex>
    </Center>
  );
}
