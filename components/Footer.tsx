import React from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";

export const Footer = () => {
  return (
    <>
      <Box bg="#eeeeee">
        <Flex
          px={PX}
          py={["30px", null, "60px"]}
          maxW={MAX_W}
          mx="auto"
          justify="center"
          alignItems="center"
          gap={["40px", null, "80px"]}
        >
          <Image
            objectFit="cover"
            maxW={["80px", null, "200px"]}
            src="/footer/footer1.png"
            alt="een logo"
          />
          <Image
            objectFit="cover"
            maxW={["80px", null, "200px"]}
            src="/footer/footer2.png"
            alt="taiwan expo logo"
          />
          <Image
            objectFit="cover"
            maxW={["80px", null, "200px"]}
            src="/footer/footer3.png"
            alt="xrt logo"
          />
        </Flex>
      </Box>
      <Text
        textAlign="center"
        fontWeight={700}
        fontSize={["20px", null, "24px"]}
        py="60px"
      >
        Copyright &copy; bizWINNER 2024
      </Text>
    </>
  );
};
