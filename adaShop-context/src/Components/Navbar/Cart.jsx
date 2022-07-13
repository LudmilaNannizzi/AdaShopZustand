import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Product from "./Product";
import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cart = useCartStore((state) => state.cart);
  const deleteAllProducts = useCartStore((state) => state.deleteAllProducts);

  const totalCart = cart.reduce(
    (acc, product) => acc + product.price * product.cantidad,
    0
  );

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Carrito ({cart.length})
      </Button>{" "}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carrito</DrawerHeader>
          {!!cart.length || (
            <DrawerBody>
              <Text> No hay productos en el carrito ☹️</Text>
            </DrawerBody>
          )}

          {!!cart.length && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product product={product} key={`cartProduct${product.id}`} />
                ))}
              </DrawerBody>
              <DrawerFooter display="flex" flexDir="column">
                <Button
                  variant="outline"
                  mb={3}
                  w="full"
                  onClick={deleteAllProducts}
                >
                  Vaciar Carrito
                </Button>
                <Text>Total: {totalCart}</Text>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
