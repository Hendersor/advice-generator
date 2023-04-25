import React, { useEffect, useState } from "react";
import "../styles/global.scss";
import { AdviceContainer } from "./AdviceContainer";
import { fetchData } from "../utils/APIconection";
const App = () => {
  const API = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState("");
  // useEffect se usa para que justo despues de cargar los elementos
  // haga la conexion a la API.
  useEffect(() => {
    const getAdvice = async () => {
      const data = await fetchData(API);
      const adviceFinal = data.slip.advice;
      setAdvice(adviceFinal);
    };
    getAdvice();
  }, []);

  // Funcion de conexion para mandarla como prop al componente
  // Se crea una variable que contiene la funcion asincrona que ejecuta la
  // conexion a la API, para despues actualizar el estado.
  const generateAdvice = async () => {
    const data = await fetchData(API);
    const adviceFinal = data.slip.advice;
    setAdvice(adviceFinal);
  };

  // Pagina principal con los props para rendirerizar la informacion.
  return (
    <main className="main">
      <AdviceContainer advice={advice} generateAdvice={generateAdvice} />
    </main>
  );
};

export { App };
