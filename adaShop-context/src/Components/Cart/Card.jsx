import { Box, Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";

const Card = ({ product }) => {
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
            {product.price} - cantidad {product.cant}
          </Box>
        </Flex>
      </Box>
      <Box>
        <Button w="50%" onClick={() => console.log("hola")}>
          Quitar
        </Button>
        <Button w="50%" onClick={() => console.log("hola")}>
          Agregar
        </Button>
        <Button w="50%" onClick={() => console.log("hola")}>
          Eliminar
        </Button>
      </Box>
    </Flex>
  );
};
export default Card;
