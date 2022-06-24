import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Carrito from './components/carrito/Carrito';
import LandingPage from './components/landingPage/LandingPage';
import DetailProduct from './components/DetallesDelProducto/DetallesDelProducto';
import CreateProduct from './components/createProduct/CreateProduct';
import Login from "./components/login/Login";
import CreateAccount from "./components/createAccount/CreateAccount";

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="products" element={<Products />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="createProduct" element={<CreateProduct />} />
          <Route path="login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
      </Routes>
    </div>
  );
}

export default App;