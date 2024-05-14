import React from "react";
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
import { LinkIcon, EmailIcon } from "@chakra-ui/icons";
import ALL_COMPANIES from "@/data/companies";
import { CloseIcon } from "@chakra-ui/icons";

type subImage = {
  name: string;
  link: string;
};

export type Product = {
  productId: string;
  image: string;
  name: string;
  description: string;
  subImages: subImage[];
  video: string;
};

export type Company = {
  logo: string;
  english: string;
  chinese: string;
  website: string;
  email: string;
  products: Product[];
};

export default function CompanyDetailPage({ company }: { company: Company }) {
  const router = useRouter();
  const { slug } = router.query;

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
      <Flex flexDir={["column", "row"]} gap="10px">
        <WebsiteBox
          text="OFFICIAL WEBSITE"
          url={company.website}
          icon={<LinkIcon />}
        />
        <WebsiteBox
          text="CONTACT US"
          url={company.email}
          icon={<EmailIcon />}
          isEmail={true}
        />
      </Flex>
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
        {company.products.map((p, index) => (
          <ChakraLink
            as={Link}
            _hover={{
              textDecor: "none",
            }}
            href={`/company/${slug}/product/${p.productId}`}
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
            maxW="150px"
          >
            CLOSE
            <CloseIcon boxSize={3} />
          </Flex>
        </ChakraLink>
      </Flex>
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

const WebsiteBox = ({
  url,
  text,
  icon,
  isEmail,
}: {
  url: string;
  text: string;
  icon: React.ReactNode;
  isEmail?: boolean;
}) => {
  return (
    <ChakraLink
      as={Link}
      _hover={{
        textDecor: "none",
      }}
      href={isEmail ? `mailto:${url}` : url}
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
          {text}
        </Text>
        {icon}
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
    throw new Error("Company not found");
  }

  return {
    props: { company: company.file },
  };
}
