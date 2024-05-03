import React from "react";
import { useRouter } from "next/router";
import { Text, Flex, Box, Image, Link as ChakraLink } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import Link from "next/link";
import { LinkIcon } from "@chakra-ui/icons";

export default function CompanyDetail() {
  const router = useRouter();
  const companyName = router.query.slug;

  return (
    <Box px={PX} py="60px" maxW={MAX_W} mx="auto" textAlign="center">
      <Text
        bgGradient="linear(to-r, #1bb9aa, #3197d3)"
        bgClip="text"
        fontSize={["20px", "28px", "32px"]}
        fontWeight="extrabold"
      >
        COMPANY
      </Text>
      <Image />
    </Box>
  );
}
