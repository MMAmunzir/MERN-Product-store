import { useProductStore } from "../store/product";
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../project-components/ProductCard.jsx";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  console.log(products);
  return (
    <Container>
      <VStack>
        <p className="home-heading">current Prodducts 🚀</p>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <div style={{ display: "flex" }}>
            <p>No Product found 😥</p>
            <Link to={"/create"}>
              <p style={{ color: "blue", marginLeft: "10px" }}>
                create product
              </p>
            </Link>
          </div>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
