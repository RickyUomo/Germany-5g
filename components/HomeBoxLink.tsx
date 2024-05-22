import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const HomeBoxLink = ({
  name,
  url,
}: {
  name: React.ReactNode;
  url: string;
}) => {
  return (
    <Link
      px="10px"
      py="5px"
      maxW="360px"
      bgGradient="linear(to-r, #1ebea5, #107bef)"
      borderRadius="10px"
      textAlign="center"
      _hover={{
        textDecor: "none",
      }}
      target="_blank"
      href={url}
    >
      <Flex alignItems="center" justify="center" gap="10px">
        {name}
        <ArrowForwardIcon color="white" boxSize={5} />
      </Flex>
    </Link>
  );
};
