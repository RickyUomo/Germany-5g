import React from "react";
import { useRouter } from "next/router";
import { Text, Flex, Image, Box } from "@chakra-ui/react";
import { PX, MAX_W } from "@/styles/constans";
import ALL_PRODUCTS from "@/data/products";

export default function ProductDetailPage() {
  const router = useRouter();
  const { productId, slug } = router.query;
  const company = ALL_PRODUCTS.find((p) => p.company === slug);
  const productList = company ? company.productList : null;
  const productDetail = productList?.find((p) => p.id === productId) || null;

  console.log("productDetail:", productDetail);

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
    <Box px={PX} maxW={MAX_W} mx="auto">
      this is ProductDetailPage
    </Box>
  );
}