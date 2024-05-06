import React, { useState } from "react";
import { useRouter } from "next/router";
import { CloseIcon } from "@chakra-ui/icons";
import { Text, Flex, Image, Box, Link } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import ALL_COMPANIES from "@/data/companies";
import ReactPlayer from "react-player";
import { Product } from "..";

type ImageProps = {
  name: string | null;
  link: string | null;
};

export default function ProductDetailPage({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState<ImageProps>({
    name: null,
    link: null,
  });

  const router = useRouter();
  const { slug } = router.query;

  const handleClick = (image: ImageProps) => setSelectedImage(image);

  return (
    <Box px={PX} py="60px" maxW={MAX_W} mx="auto">
      <Flex flexDir={["column", null, "row"]} gap="50px" mb="50px">
        <Flex flexDir="column" w={["100%", null, "50%"]}>
          <Image
            objectFit="cover"
            src={selectedImage.link ?? product.subImages[0].link}
            alt={selectedImage.name ?? product.subImages[0].name}
          />
          <Flex gap="10px">
            {product.subImages.map((image, index) => (
              <Box
                _hover={{
                  cursor: "pointer",
                }}
                onClick={() => handleClick(image)}
                key={index}
              >
                <Image
                  border="#666666 1px solid"
                  px="10px"
                  objectFit="cover"
                  w={["70px", null, "100px"]}
                  h={["70px", null, "100px"]}
                  src={image.link}
                  alt={image.name}
                />
              </Box>
            ))}
          </Flex>
        </Flex>
        <Box w={["100%", null, "50%"]}>
          <Text fontWeight={600} fontSize={["24px", null, "32px"]} mb="20px">
            {product.name}
          </Text>
          <Text>{product.description}</Text>
        </Box>
      </Flex>

      <Box w="100%" className="playerWrapper" mb="100px">
        <ReactPlayer
          className="reactPlayer"
          height="100%"
          width="100%"
          controls
          url="/example/video1.mp4"
        />
      </Box>

      <Flex justify="center">
        <Link
          textAlign="center"
          _hover={{
            textDecor: "none",
          }}
          color="white"
          href={`/company/${slug}`}
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
        </Link>
      </Flex>
    </Box>
  );
}

export async function getStaticPaths() {
  const paths = ALL_COMPANIES.flatMap((company) =>
    company.file.products.map((p) => ({
      params: {
        slug: company.slug,
        productId: p.productId,
      },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const { slug, productId } = params!;
  const company = ALL_COMPANIES.find((company) => company.slug === slug);
  const product = company?.file.products.find(
    (product) => product.productId === productId
  );

  if (!company || !product) {
    throw new Error("Product not found");
  }

  return {
    props: { product },
  };
}
