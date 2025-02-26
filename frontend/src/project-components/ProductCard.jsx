import {
  Box,
  Heading,
  HStack,
  Image,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useProductStore } from "..//store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handelDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
  };
  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <p>${product.price}</p>
        <HStack spacing={2}>
          <CiEdit onClick={onOpen} />
          <MdDelete onClick={() => handelDeleteProduct(product._id)} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
