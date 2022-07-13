import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) =>
    set(({ cart }) => {
      const productExist = cart.some((pr) => pr.id === product.id);
      console.log(productExist);
      if (productExist === false) {
        const productoCantidad = { ...product, cantidad: 1 };
        return { cart: [...cart, productoCantidad] };
      } else {
        return {
          cart: cart.map((pr) => {
            if (pr.id === product.id) {
              return { ...pr, cantidad: pr.cantidad + 1 };
            }
            return pr;
          }),
        };
      }
    }),
  deleteItemCart: (id) =>
    set(({ cart }) => ({
      cart: cart.filter((product) => product.id !== id),
    })),
  deleteAllProducts: () => set({ cart: [] }),
}));
export default useCartStore;
