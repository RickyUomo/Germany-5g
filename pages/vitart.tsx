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
        {VITART.map((data, index) => (
          <ChakraLink
            as={Link}
            _hover={{
              textDecor: "none",
            }}
            href={data.href}
            rel="ar"
            key={index}
          >
            <Flex
              flexDir="column"
              justify="center"
              alignItems="center"
              maxH="500px"
            >
              <Image
                objectFit="contain"
                w={["200px", "300px", "400px"]}
                h={["200px", "300px", "400px"]}
                mb="10px"
                aspectRatio={4 / 9}
                draggable={false}
                src={data.image}
                alt={data.name}
              />
              <Text fontSize={["20px", null, "24px"]} fontWeight={600}>
                {data.name}
              </Text>
            </Flex>
          </ChakraLink>
        ))}
      </Grid>
    </Box>
  );
}
