import React from "react";
import {
  Text,
  Grid,
  Box,
  Link as ChakraLink,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import Link from "next/link";

type Company = {
  name: string;
  url: string;
};

export const CompanyCategory = ({
  category,
  description,
  companies,
  ...styles
}: {
  category: string;
  description: string;
  companies: Company[];
} & BoxProps) => {
  return (
    <Box w="100%" {...styles}>
      <Text
        color="#59c9aa"
        mb="10px"
        fontSize={["18px", "22px", "24px"]}
        fontWeight="bold"
      >
        {category}
      </Text>
      <Text color="#408cfd" mb={["40px", "50px"]} fontWeight="bold">
        {description}
      </Text>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap="15px"
        alignItems="center"
      >
        {companies.map((company, index) => (
          <ChakraLink as={Link} href={company.name} key={index}>
            <Image
              w="100%"
              objectFit="contain"
              src={company.url}
              alt={company.name}
              aspectRatio={3 / 1}
              bgPos="center center"
            />
          </ChakraLink>
        ))}
      </Grid>
    </Box>
  );
};
