import './App.css';
import { Route, Routes } from "react-router-dom";
//import Navbar from './components/navbar/Navbar';
// import Products from './components/products/Products';
import Carrito from './components/carrito/Carrito';
// import Login from './components/login/Login';
import DetallesDelProducto from './components/detallesDelProducto/DetallesDelProducto';

function App() {
  return (
    <div >
      <Routes>
        {/* <Route path="products" element={<Products />} /> */}
        <Route path="carrito" element={<Carrito />} />
        <Route path="/detail/:id" element={<DetallesDelProducto />} />
        {/* <Route path="login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;