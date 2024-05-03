import React from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";

export const AboutSection = () => {
  return (
    <Box bg="#070b36" color="white" textAlign="center" id="about">
      <Flex
        flexDir="column"
        justify="center"
        alignItems="center"
        px={PX}
        py="50px"
        maxW={MAX_W}
        mx="auto"
        gap={["30px", "40px"]}
      >
        <Text
          bgGradient="linear(to-r, #1bb9aa, #3197d3)"
          bgClip="text"
          fontSize={["20px", "28px", "32px"]}
          fontWeight="extrabold"
        >
          ABOUT
        </Text>
        <Image w="200px" src="/web_intro-logo.svg" alt="intro logo" />
        <Box maxW="565px">
          <Text
            color="#00e2e7"
            fontSize={["18px", "22px", "26px"]}
            fontWeight={600}
          >
            &quot;Show your products with XR devices&quot;
          </Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            BizWinner offers enterprises digital product showcase services
            across three types of technologies: VR, AR, and MR. It leverages
            diverse display effects, including immersive interactive
            experiences, cross-platform displays, and the seamless integration
            of physical and digital spaces.
          </Text>
        </Box>
        <Box maxW="565px">
          <Text
            color="#00e2e7"
            fontSize={["18px", "20px", "24px"]}
            fontWeight={600}
          >
            &quot;Win your business across the multi-verse&quot;
          </Text>
          <Text fontSize={["14px", "16px", "18px"]}>
            BizWinner leverages 5G technology to enable enterprises to showcase
            product features and characteristics more quickly and conveniently,
            enhancing exhibition effectiveness and gaining more business.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
