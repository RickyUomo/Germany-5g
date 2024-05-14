import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  useDisclosure,
  Flex,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { NAV_DATA } from "./Navbar";

export const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box display={["inline-block", null, "none"]}>
      <Button colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs"
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton fontSize="20px" />
          <DrawerBody mt="50px">
            <Flex flexDir="column" gap="10px">
              {NAV_DATA.map((data, index) => (
                <ChakraLink
                  textDecor="none"
                  _active={{
                    textDecor: "none",
                  }}
                  _hover={{
                    textDecor: "none",
                  }}
                  href={data.url}
                  as={Link}
                  key={index}
                  onClick={() => onClose()}
                >
                  <Text fontSize="24px">{data.name}</Text>
                </ChakraLink>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
