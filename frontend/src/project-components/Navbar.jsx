import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { useColorMode } from "../components/ui/color-mode";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <p className="nav-name">
          <Link to={"/"}>Product Store 🛒</Link>
        </p>
        <HStack>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoIosMoon /> : <IoSunnyOutline />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
