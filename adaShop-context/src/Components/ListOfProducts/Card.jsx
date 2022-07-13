import { Flex, Box, Image, useColorModeValue, Button } from "@chakra-ui/react";
import useCartStore from "../../store/useCartStore";

const Card = ({ product }) => {
  const addProduct = useCartStore((state) => state.addProduct);
  return (
    <Flex
      p={5}
      w="full"
      maxW="350px"
      m="10px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box h="50%">
        <Image
          m="auto"
          src={product.image}
          alt={`Picture of ${product.title}`}
          roundedTop="lg"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Box p="6">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {product.title}
        </Box>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              $
            </Box>
            {product.price} - {product.id}
          </Box>
        </Flex>
      </Box>
      <Button w="full" onClick={() => addProduct(product)}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};
export default Card;
