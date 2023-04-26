import React, { useEffect, useState } from "react";
import "../styles/global.scss";
import "../styles/DesktopAdviceContainer.scss";
import { AdviceContainer } from "./AdviceContainer";
import { fetchData } from "../utils/APIconection";
import APIconection from "@utils/APIconection";
const App = () => {
  const API = "https://api.adviceslip.com/advice";
  // El estado del consejo y del id
  const [advice, setAdvice] = useState("");
  const [idAdvice, setIdAdvice] = useState("123");
  // useEffect se usa para que justo despues de cargar los elementos
  // haga la conexion a la API.
  useEffect(() => {
    const getAdvice = async () => {
      const data = await fetchData(API);
      const adviceFinal = data.slip.advice;
      setIdAdvice(data.slip.id);
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
    setIdAdvice(data.slip.id);
    setAdvice(adviceFinal);
  };

  // Pagina principal con los props para rendirerizar la informacion.
  return (
    <main className="main">
      <AdviceContainer
        advice={advice}
        generateAdvice={generateAdvice}
        id={idAdvice}
      />
    </main>
  );
};

export { App };
