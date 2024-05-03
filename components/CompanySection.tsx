import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import { CompanyCategory } from "./CompanyCategory";
import CATEGORY1 from "@/data/categories/category1";

export const CompanySection = () => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
      px={PX}
      py="70px"
      maxW={MAX_W}
      mx="auto"
      textAlign="center"
      id="company"
    >
      <Text
        bgGradient="linear(to-r, #1bb9aa, #3197d3)"
        bgClip="text"
        fontSize={["20px", "28px", "32px"]}
        fontWeight="extrabold"
        mb={["40px", "60px"]}
      >
        COMPANY
      </Text>
      <CompanyCategory mb={["60px", "80px", "100px"]} {...CATEGORY1} />
      <CompanyCategory mb={["60px", "80px", "100px"]} {...CATEGORY1} />
      <CompanyCategory {...CATEGORY1} />
    </Flex>
  );
};
