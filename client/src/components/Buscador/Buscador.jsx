import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductByName } from "../../redux/actions";
import style from './Buscador.module.css';

const Buscador = () => {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setProducto(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductByName(producto));
    setProducto("");
  }
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Buscar producto"
        value={producto}
        onChange={(e) => handleInputChange(e)}
        className={style.inputSearch}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)} className={style.buttonSearch}>
       Buscar
      </button>
    </div>
  );
};

export default Buscador;
