import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import ListOfProducts from "./Components/ListOfProducts";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListOfProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
