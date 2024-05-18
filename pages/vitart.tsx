import {
  Box,
  Image,
  Text,
  Grid,
  Link as ChakraLink,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { PX, MAX_W } from "@/styles/constans";
import VITART from "@/data/vitart";

export default function Home() {
  return (
    <Box px={PX} py="60px" maxW={MAX_W} mx="auto">
      <Text
        bgGradient="linear(to-r, #20c1a0, #0d72fa)"
        bgClip="text"
        fontSize={["20px", "28px", "32px"]}
        fontWeight="extrabold"
        mb={["30px", null, "50px"]}
        textAlign="center"
      >
        PHYGITAL
      </Text>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap="20px"
        alignItems="center"
        mt="30px"
        mb={["40px", "60px", "80px"]}
      >
        <ChakraLink as={Link} href="/quicklook/quick1.reality">
          <Image src="/example/product1.png" alt="p1" />
        </ChakraLink>
      </Grid>
    </Box>
  );
}
