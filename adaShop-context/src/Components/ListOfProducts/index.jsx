import { Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./Card";
import productsArray from "./products";

const ELEMENT_FOR_PAGE = 3;

const ListOfProducts = () => {
  const [products, setProduct] = useState(productsArray);
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(products.length / ELEMENT_FOR_PAGE);
  const offset = ELEMENT_FOR_PAGE * (page - 1);

  const addProduct = () => {
    console.log("hacer funcion");
  };

  const handleOnKeyPress = (event) => {
    setProduct(
      productsArray.filter((productFl) =>
        productFl.title.toLocaleLowerCase().includes(event.target.value)
      )
    );
    setPage(1);
  };

  return (
    <Container maxW="container.xl" mt="5">
      <Heading mt="3">Productos</Heading>
      <Input
        mt="3"
        w="full"
        placeholder="Ingrese el nombre del producto"
        variant="filled"
        onKeyDown={handleOnKeyPress}
      ></Input>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {[...products].splice(offset, ELEMENT_FOR_PAGE).map((product) => (
          <Card
            product={product}
            addProduct={addProduct}
            key={`productCard${product.id}`}
          ></Card>
        ))}
      </Flex>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        {" "}
        -{" "}
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
        {" "}
        +{" "}
      </Button>
    </Container>
  );
};

export default ListOfProducts;
