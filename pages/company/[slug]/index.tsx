import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Text,
  Flex,
  Image,
  Link as ChakraLink,
  TextProps,
  Grid,
} from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import Link from "next/link";
import { LinkIcon } from "@chakra-ui/icons";
import ALL_COMPANIES from "@/data/companies";
import { promises as fs } from "fs";
import path from "path";

type Product = {
  id: string;
  image: string;
  name: string;
};

type Company = {
  logo: string;
  english: string;
  chinese: string;
  website: string;
  products: Product[];
};

export default function CompanyDetailPage({ company }: { company: Company }) {
  // const [data, setData] = useState<Company | null>();
  const router = useRouter();
  const { slug } = router.query;
  // const company = ALL_COMPANIES.find((c) => c.slug === slug);
  // const data = company ? company.file : null;

  // useEffect(() => {
  //   const company = ALL_COMPANIES.find((c) => c.slug === slug);
  //   company ? setData(company.file) : setData(null);
  // }, [slug]);

  // if (!data) {
  //   return (
  //     <Flex flexDir="column" justify="center" alignItems="center" minH="100vh">
  //       <Text fontWeight={800} fontSize={["20px", "24px", "28px"]}>
  //         Company not found
  //       </Text>
  //     </Flex>
  //   );
  // }

  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
      px={PX}
      py="60px"
      maxW={MAX_W}
      mx="auto"
      textAlign="center"
    >
      <Text
        bgGradient="linear(to-r, #20c1a0, #0d72fa)"
        bgClip="text"
        fontSize={["20px", "28px", "32px"]}
        fontWeight="extrabold"
        mb={["30px", null, "50px"]}
      >
        COMPANY
      </Text>
      <Image
        w={["200px", "300px", "400px"]}
        src={company.logo}
        alt={company.english}
        mb="30px"
      />
      <CompanyName mb="5px" name={company.english} />
      <CompanyName mb="20px" name={company.chinese} />
      <WebsiteBox url={company.website} />
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
        mb="80px"
      >
        {company.products.map((p, index) => (
          <ChakraLink
            as={Link}
            _hover={{
              textDecor: "none",
            }}
            href={`/company/${slug}/product/${p.id}`}
            key={index}
          >
            <Flex
              flexDir="column"
              justify="center"
              alignItems="center"
              maxH="500px"
            >
              <Image
                objectFit="cover"
                w="400px"
                h="400px"
                mb="10px"
                aspectRatio={4 / 9}
                draggable={false}
                src={p.image}
                alt={p.name}
              />
              <Text fontSize={["20px", null, "24px"]} fontWeight={600}>
                {p.name}
              </Text>
            </Flex>
          </ChakraLink>
        ))}
      </Grid>
    </Flex>
  );
}

const CompanyName = ({ name, ...styles }: { name: string } & TextProps) => {
  return (
    <Text fontWeight={800} fontSize={["20px", "22px", "24px"]} {...styles}>
      {name}
    </Text>
  );
};

const WebsiteBox = ({ url }: { url: string }) => {
  return (
    <ChakraLink
      as={Link}
      _hover={{
        textDecor: "none",
      }}
      href={url}
      target="_blank"
    >
      <Flex
        borderRadius="5px"
        px="20px"
        py="10px"
        bgGradient="linear(to-r, #1ebea5, #107bef)"
        justify="center"
        alignItems="center"
        gap="10px"
        color="white"
      >
        <Text fontWeight={600} textAlign="center">
          OFFICIAL WEBSITE
        </Text>
        <LinkIcon />
      </Flex>
    </ChakraLink>
  );
};

export async function getStaticPaths() {
  const paths = ALL_COMPANIES.map((company) => ({
    params: { slug: company.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const { slug } = params!;
  const company = ALL_COMPANIES.find((company) => company.slug === slug);

  if (!company) {
    throw new Error("Post not found");
  }

  return {
    props: { company: company.file },
  };
}
