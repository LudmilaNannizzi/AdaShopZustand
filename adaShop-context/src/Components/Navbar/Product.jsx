import { Box, Flex, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { BsFillTrashFill } from "react-icons/bs";
import useCartStore from "../../store/useCartStore";

const Product = ({ product }) => {
  const deleteItemCart = useCartStore((state) => state.deleteItemCart);

  return (
    <Flex mt="5">
      <Image
        src={product.image}
        w="70px"
        objectFit="cover"
        alt={`imagen de producto ${product.title}`}
      />
      <Box>
        <Heading size="sm"> {product.title}</Heading>
        <Text>{product.price}</Text>
        <Text>{product.cant}</Text>
      </Box>
      <IconButton
        icon={<BsFillTrashFill />}
        onClick={() => deleteItemCart(product.id)}
      ></IconButton>
    </Flex>
  );
};

export default Product;
