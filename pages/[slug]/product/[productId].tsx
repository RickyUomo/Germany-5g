import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import ALL_PRODUCTS from "@/data/products";
import ReactPlayer from "react-player";

type ImageProps = {
  name: string | null;
  link: string | null;
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState<ImageProps>({
    name: null,
    link: null,
  });

  const router = useRouter();
  const { productId, slug } = router.query;
  const company = ALL_PRODUCTS.find((p) => p.company === slug);
  const productList = company ? company.productList : null;
  const productDetail = productList?.find((p) => p.id === productId) || null;

  const handleClick = (image: ImageProps) => setSelectedImage(image);

  if (!productList || !productDetail) {
    return (
      <Flex flexDir="column" justify="center" alignItems="center" minH="100vh">
        <Text fontWeight={800} fontSize={["20px", "24px", "28px"]}>
          Product not found
        </Text>
      </Flex>
    );
  }

  return (
    <Box px={PX} py="60px" maxW={MAX_W} mx="auto">
      <Flex flexDir={["column", null, "row"]} gap="50px">
        <Flex flexDir="column" w={["100%", null, "50%"]}>
          <Image
            objectFit="cover"
            src={selectedImage.link ?? productDetail.images[0].link}
            alt={selectedImage.name ?? productDetail.images[0].name}
          />
          <Flex gap="10px">
            {productDetail.images.map((image, index) => (
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
            {productDetail.name}
          </Text>
          <Text>{productDetail.description}</Text>
        </Box>
      </Flex>

      <Box className="playerWrapper">
        <ReactPlayer
          className="reactPlayer"
          height="500px"
          width="800px"
          controls
          url="/example/video1.mp4"
        />
      </Box>
    </Box>
  );
}
